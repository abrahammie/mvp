import React from 'react';

const Lyrics = ({ lyrics }) => {
  if (lyrics) {
    return (
      <div>
        <p style={{ whiteSpace: 'pre-line' }}>
          {lyrics}
        </p>
        <br/>
        <a target="_blank" href="https://www.musixmatch.com/">Lyrics preview powered by <img style={{ maxWidth: 100 }} src="/musixmatch.png" /></a>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
};

export default Lyrics;