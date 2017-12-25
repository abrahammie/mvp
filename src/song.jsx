import React from 'react';
import { Well, Button } from 'react-bootstrap';

export const Song = ({ title, artist, getLyrics, lyrics }) => {
  if (title) {
    return (
      <div>
      <Well>
        <h3>Title: {title}</h3>
        <h3>Artist: {artist}</h3>
        <br/>
        <Button onClick={getLyrics} bsStyle="primary" bsSize="small" active>
          Can't remember how it starts?
        </Button>
      </Well>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
};