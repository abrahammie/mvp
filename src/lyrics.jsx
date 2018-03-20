import React from 'react';

const style = {
  text: {
    whiteSpace: 'pre-line',
  },
  image: {
    maxWidth: 100,
  },
};

export const Lyrics = ({ lyrics }) => {
  if (lyrics) {
    return (
      <div>
        <p style={style.text}>{lyrics}</p>
        <br />
        <a target="_blank" href="https://www.musixmatch.com/">
          Lyrics preview powered by{' '}
          <img style={style.image} src="/musixmatch.png" />
        </a>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
};
