import React from 'react';

var Song = ({ title, artist }) => {
  return (
    <div>
      <h1>Title: {title}</h1>
      <p>Artist: {artist}</p>
    </div>
  );
}

export default Song;
