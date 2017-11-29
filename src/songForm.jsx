import React from 'react';

const SubmitSong = (props) => {

  const getFormData = (ev) => {
    ev.preventDefault();
    const title = ev.target.elements.title.value;
    const artist = ev.target.elements.artist.value;
    props.SubmitSong(title, artist);
    document.getElementById("songForm").reset();
  }

  return (
        <form id="songForm">
        <div>
          <label>Song Title</label><input name="title" type="title" id="title"/>
        </div>
        <div>
          <label>Artist Name</label><input name="artist" type="artist" id="artist"/>
        </div>
        <div>
          <button onClick={props.getFormData}>Save A Recommendation For Future</button>
        </div>
        </form>
  );

};

export default SubmitSong;