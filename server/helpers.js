const db = require('../db/index.js');

var addSongToDb = function(req, res, data) {
  //modify to pull data from api in future
  console.log('add to db function called');
  var track = new db.Song({
    id: 1,
    title: 'Under The Bridge',
    artist: 'Red Hot Chili Peppers',
    genre: 'Alternative',
    youTubeUrl: 'https://www.youtube.com/watch?v=GLvohMXgcBo'
  });
  track.save();
};


var getRandomSongFromDb = function(callback) {
  //get random index within the size of db

  //pull a random song based on that index
  //db.Songs.find()

  //pass resulting data to callback

}



module.exports.addSongToDb = addSongToDb;
module.exports.getRandomSongFromDb = getRandomSongFromDb;