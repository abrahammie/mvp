import React from 'react';
import { Button, FormControl, ControlLabel } from 'react-bootstrap';

export const SongForm = ({ submitSong }) => {
  const getFormData = ev => {
    ev.preventDefault();
    const title = ev.target.elements.title.value;
    const artist = ev.target.elements.artist.value;
    submitSong(title, artist);
    document.getElementById('songForm').reset();
  };

  return (
    <div style={{ padding: '10%' }}>
    <h3>Add a song to the MKC database!</h3>

    <form onSubmit={getFormData} id="songForm">
      <ControlLabel>Song Title</ControlLabel>
        <FormControl
          id="title"
          type="text"
          placeholder="Enter song title"
        />
        <br/>
      <ControlLabel>Artist Name</ControlLabel>
        <FormControl
          id="artist"
          type="text"
          placeholder="Enter artist name"
        />
      <div>
      <br/>
        <Button type="submit" bsStyle="primary" bsSize="sm" active>Save</Button>
      </div>
    </form>
    </div>
  );
};


