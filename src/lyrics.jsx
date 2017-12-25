import React from 'react';

const Lyrics = ({ lyrics, copyright }) => {
  return (
    <div>
      <p>
        {lyrics}
      </p>
      <a href="">{copyright}</a>
    </div>

  );
};

export default Lyrics;