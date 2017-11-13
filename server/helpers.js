const db = require('../db/index.js');

var addSongToDb = function(data, callback) {
  //modify to pull data from api in future
  //make sure input not undefined
  if (data.title && data.artist) {
  //get total num songs
    db.Song.count({}, function(err, count) {
      var track = new db.Song({
        id: `${count}`,
        title: `${data.title}`,
        artist: `${data.artist}`,
        //genre: `${data.genre}`
        //youTubeUrl:`${data.youTube}`
      });
      track.save(function(err) {
        if (err) {
          console.log('track not saved, possible duplicate');
        } else {
          callback(track);
        }
      });
    });
  } else {
    callback(null);
  }
};



var getRandomSongFromDb = function(callback) {
  //get random index within the size of db
  db.Song.count({}, function(err, count) {
    if (count) {
      let randInd = Math.floor(Math.random() * count);
      console.log('choosing song #  ', randInd, 'of', count);
      db.Song.find({id: `${randInd}`}, function(err, data) {
        if (err) {
          console.log('problem retrieving random song');
        } else {
          console.log(data);
          callback(data);
        }
      });
    }
  });
}



module.exports.addSongToDb = addSongToDb;
module.exports.getRandomSongFromDb = getRandomSongFromDb;