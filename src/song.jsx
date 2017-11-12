var SongRec = (props) => {
  return (
    <div>
      <h1>Title: {this.props.title}</h1>
      <p>Artist: {this.props.artist}</p>
    </div>
  );
}



//how else o access within app.jsx
window.SongRec = SongRec;
