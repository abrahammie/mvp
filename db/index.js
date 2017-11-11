var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/meow-songs');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('We\'re connected!');
});

var songSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  title: String,
  artist: String,
  genre: String,
  youTubeUrl: String
});

var Song = mongoose.model('Song', songSchema);

module.exports.Song = Song;
module.exports.db = db;