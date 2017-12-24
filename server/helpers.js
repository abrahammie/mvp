const db = require('../db/index.js');

var addSongToDb = (data, callback) => {
  //modify to pull data from api in future
  //make sure input not undefined
  console.log('data is ', data);
  if (data.title && data.artist) {
  //get total num songs
    db.Song.count({}, (err, count) => {
      var track = new db.Song({
        id: `${count}`,
        title: `${data.title}`,
        artist: `${data.artist}`,
        //genre: `${data.genre}`
        //youTubeUrl:`${data.youTube}`
      });
      track.save((err, saved) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, saved);
        }
      });
    });
  } else {
    callback('missing required field', null);
  }
};

var getRandomSongFromDb = (callback) => {
  //get random index within the size of db
  db.Song.count({}, (err, count) => {
    if (count) {
      let randInd = Math.floor(Math.random() * count);
      console.log('choosing song #  ', randInd, 'of', count);
      db.Song.find({id: `${randInd}`}, (err, data) => {
        if (err) {
          callback(err, null);
        } else {
          callback(null, data);
        }
      });
    } else {
      callback(err, null);
    }
  });
}

module.exports.addSongToDb = addSongToDb;
module.exports.getRandomSongFromDb = getRandomSongFromDb;