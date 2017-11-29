import React from 'react';

var Song = (props) => {
  return (
    <div>
      <h1>Title: {this.props.title}</h1>
      <p>Artist: {this.props.artist}</p>
    </div>
  );
}

export default Song;
