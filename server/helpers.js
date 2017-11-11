const db = require('../db/index.js');

var addSongsToDb = function(data) {
  //modify to pull data from api in future
  console.log('add to db function called');
  data.forEach(song => {
    var track = new db.Song({
      id: `${song.id}`,
      title: `${song.title}`,
      artist: `${song.artist}`,
      genre: `${song.genre}`,
      youTubeUrl:`${song.youTubeUrl}`
    });
    track.save(function(err) {
      if (err) {
        console.log('track not saved, possible duplicate');
      } else {
        res.sendStatus(200);
        res.end();
      }
    });
  });
};


var getRandomSongFromDb = function(callback) {
  //get random index within the size of db
  let totalSongs = db.songs.find().count();
  let randInd = Math.floor(Math.random() * totalSongs);
  //pull a random song based on that index
  //db.Songs.find({id: `{randInd}`})

  //pass resulting data to callback

}



module.exports.addSongsToDb = addSongsToDb;
module.exports.getRandomSongFromDb = getRandomSongFromDb;