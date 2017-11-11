const http = require('http');
const express = require('express');
const path = require('path');
let app = express();

//serve the static assets from this folder
app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
  res.sendFile('index');
  console.log('loading...');
  res.end();
  //res.render('index.js'); //hold on...
});

let port = 3000;

app.listen(port, function(){
  console.log('Listening on port 3000.');
});