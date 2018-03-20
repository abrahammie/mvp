import React from 'react';
import { Song } from './song.jsx';

const GetSong = ({ title, artist, getSong, lyrics }) => {
  return (
    <div
      id="recommendedSong"
      style={{ padding: "3% 10% 10% 10%", minHeight: 360 }}
    >
      <h3>Take the challenge!</h3>
      <div>
        <button type="button" className="btn btn-primary" onClick={getSong}>
          Click For Song
        </button>
      </div>
      <br />
      <Song title={title} artist={artist} lyrics={lyrics} />
    </div>
  );
};

export default GetSong;
