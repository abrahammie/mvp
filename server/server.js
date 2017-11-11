const http = require('http');
const express = require('express');
const path = require('path');
const helpers = require('./helpers.js');
const dummyData = require('../db/data.js');
const db = require('../db/index.js');

let app = express();

app.use(express.static('./public'));

app.get('/', function(req, res) {
  res.sendFile('./index.html', function (err) {
    if (err) {
      console.log(err);
      console.log('homepage did not load');
    } else {
      console.log('loading song data...');
      helpers.addSongsToDb(req, res, dummyData.data);
    }
  });
});


app.post('/', function(req, res) {
  console.log('A POST REQUEST');
  res.end();
  helpers.getRandomSongFromDb(function(data) {
   res.end(JSON.stringify(data));
  })

});

let port = 3000;

app.listen(port, function() {
  console.log('Listening on port 3000.');
});