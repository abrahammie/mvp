import React from 'react';
import { Well, Button, Panel } from 'react-bootstrap';
import Lyrics from './lyrics.jsx';

export const Song = ({ title, artist, getLyrics, lyrics }) => {
  if (title) {
    return (
      <div>
      <Panel>
      <Well>
        <h3>Title: {title}</h3>
        <h3>Artist: {artist}</h3>
        <br/>
        <Button onClick={getLyrics} bsStyle="primary" bsSize="small" active>
          Can't remember how it starts?
        </Button>
      </Well>
      <Lyrics lyrics={lyrics} />
      </Panel>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
};