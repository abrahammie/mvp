"use strict";

var SongRec = function SongRec(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Title: ",
      undefined.props.title
    ),
    React.createElement(
      "p",
      null,
      "Artist: ",
      undefined.props.artist
    )
  );
};

//how else o access within app.jsx
window.SongRec = SongRec;