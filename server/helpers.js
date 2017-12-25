const db = require('../db/index.js');
const axios = require('axios');

const addSongToDb = (data, callback) => {
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

const getRandomSongFromDb = (callback) => {
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

const getSongId = (songData, callback) => {
  axios.get(`https://api.musixmatch.com/ws/1.1/matcher.track.get?format=json&q_artist=${songData.artist}&q_track=${songData.title}&apikey=${process.env.MUSIXMATCH_KEY}`)
    .then((res) => callback(null, res))
    .catch((err) => callback(err, null));
};

const getLyrics = (songId, callback) => {
  axios.get(`https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${songId}&apikey=${process.env.MUSIXMATCH_KEY}`)
    .then((res) => callback(null, res))
    .catch((err) => callback(err, null));
};


module.exports.addSongToDb = addSongToDb;
module.exports.getRandomSongFromDb = getRandomSongFromDb;
module.exports.getSongId = getSongId;
module.exports.getLyrics = getLyrics;