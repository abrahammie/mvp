import React from 'react';

const Lyrics = ({ lyrics }) => {
  if (lyrics) {
    return (
      <div>
        <p>
          {lyrics}
        </p>
        <br/>
        <a target="_blank" href="https://www.musixmatch.com/">Lyrics powered by <img style={{ maxWidth: 100 }} src="/musixmatch.png" /></a>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
};

export default Lyrics;