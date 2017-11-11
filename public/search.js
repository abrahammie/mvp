"use strict";

function Song(props) {
  return React.createElement(
    "div",
    null,
    React.createElement(
      "p",
      null,
      "Title: ",
      this.props.title
    ),
    React.createElement(
      "p",
      null,
      "Artist: ",
      this.props.artist
    )
  );
}