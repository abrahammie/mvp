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
app.use(bodyParser());

app.post('/api/addSong', function(req, res, next) {
  console.log('received data, adding to db...');
  helpers.addSongToDb(req.body, res);
});

app.get('/*', function(req, res) {
  res.sendFile(express.static('./public'));
});

app.get('/api/random', function(req, res) {
  console.log('get request');
  helpers.getRandomSongFromDb(function(data) {
    if (data) {
      res.end(JSON.stringify(data));
    }
  })
});

let port = 3030;

app.listen(port, function() {
  console.log(`Listening on port ${port}.`);
});

/*
To do - improvements:
should confirm song was added
should not be able to add duplicates songs - need to add table in db
can get somg by genre
*/