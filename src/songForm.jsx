import React from 'react';

const style = {
  main: {
    padding: '2% 10% 10% 10%',
    minHeight: 360,
  },
  songForm: {
    textAlign: 'left',
  }
};

export const SongForm = ({ submitSong }) => {
  const getFormData = ev => {
    ev.preventDefault();
    const title = ev.target.elements.songTitle.value;
    const artist = ev.target.elements.artistName.value;
    submitSong(title, artist);
    document.getElementById('songForm').reset();
  };

  return (
    <div style={style.main}>
      <h3>Add a song to the challenge database!</h3>
      <br />

      <form style={style.songForm} onSubmit={getFormData} id="songForm">
        <div className="form-group">
          <label htmlFor="songTitle">Song Title</label>
          <input
            type="text"
            className="form-control"
            id="songTitle"
            aria-describedby="songTitle"
            placeholder="Enter song title"
          />
        </div>
        <div className="form-group">
          <label htmlFor="artistName">Artist Name</label>
          <input
            type="text"
            className="form-control"
            id="artistName"
            placeholder="Enter artist name"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
};
