const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const helpers = require('./helpers.js');
const dummyData = require('../db/data.js');
const db = require('../db/index.js');

let app = express();

//initial render of index.html
app.use(express.static('./public'));

//tells bodyParser what it's working with
app.use(bodyParser.urlencoded({extended: true}));

app.post('/recommend', function(req, res, next) {
  console.log('received data, adding to db...');
  helpers.addSongToDb(req.body, function(data) {
    if (data) {
      res.status(200).send('Song saved!');
    } else {
      res.status(418).send('Required fields missing!');
    }
  });

});


app.get('/random', function(req, res) {
  console.log('get request');
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

/*
should clear form fields after button click
page should not redirect after form submit
should use some css grids to make it prettier
*/