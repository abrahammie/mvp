const http = require('http');
const express = require('express');
const path = require('path');
const helpers = require('./helpers.js');
let app = express();

app.use(express.static('./public'));

app.get('/', function(req, res) {
  res.sendFile('./index.html', function (err) {
    if (err) {
      console.log(err);
      console.log('homepage did not load');
    } else {
      console.log('loading...');
      res.sendStatus(200);
      res.end();
    }
  });
});


app.post('/', function(req, res) {
  helpers.test();
});

let port = 3000;

app.listen(port, function() {
  console.log('Listening on port 3000.');
});