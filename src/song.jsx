import React from 'react';
import Lyrics from './lyrics.jsx';

export const Song = ({ title, artist, lyrics }) => {
  if (title) {
    return (
      <div>
      {/*<Panel>
      <Well>
        <h3>Title: {title}</h3>
        <h3>Artist: {artist}</h3>
        <br/>
      </Well>
      <Lyrics lyrics={lyrics} />
      </Panel>
    */}
    This is the Lyrics component
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
};