import React from 'react';
import Lyrics from './lyrics.jsx';

export const Song = ({ title, artist, lyrics }) => {
  if (title) {
    return (
      <div className="card text-center">
        <div className="card-header">
          <h3>Title: {title}</h3>
          <h3>Artist: {artist}</h3>
        </div>
        <div className="card-body">
          <Lyrics lyrics={lyrics} />
        </div>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
};