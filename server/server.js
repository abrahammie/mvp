const http = require('http');
const express = require('express');
const path = require('path');
const helpers = require('./helpers.js');
const dummyData = require('../db/data.js');
const db = require('../db/index.js');

let app = express();

//initial render of index.html
app.use(express.static('./public'));

//should be called on conponentDidMount
app.post('/recommend', function(req, res, next) {
  console.log('received data, adding to db...');
  helpers.addSongToDb(req, function() {
    console.log('Song added');
    res.end();
  });

});


app.post('/', function(req, res) {
  console.log('A POST REQUEST');
  helpers.getRandomSongFromDb(function(data) {
    if (data) {
      res.end(JSON.stringify(data));
    }
  })
});

let port = 3000;

app.listen(port, function() {
  console.log('Listening on port 3000.');
});