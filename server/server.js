const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const helpers = require('./helpers.js');
const dummyData = require('../db/data.js');
const db = require('../db/index.js');
require('dotenv').config();

let app = express();

let port = process.env.PORT || 3030;
//initial render of index.html
app.use(express.static('./public'));

//tells bodyParser what it's working with
app.use(bodyParser());

app.post('/api/addSong', (req, res) => {
  console.log('received data, adding to db...');
  helpers.addSongToDb(req.body, (err, data) => {
    if (err) {
      console.log('Error saving song: ', err);
      res.sendStatus(500);
    } else {
      console.log('Song saved: ', data);
      res.end(JSON.stringify(data));
    }
  });
});

app.get('/api/random', (req, res) => {
  helpers.getRandomSongFromDb((err, data) => {
    if (err) {
      console.log('Error retrieving song: ', err);
      res.sendStatus(500);
    } else {
      res.end(JSON.stringify(data));
    }
  })
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}.`));

/*
To do - improvements:
make fields required
should not be able to add duplicates songs - need to add table in db
get lyrics
can get somg by genre
*/