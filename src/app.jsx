class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song: ''
    }
    this.getSong = this.getSong.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  getSong() {
    $.ajax({
      url: '/random',
      type: 'GET',
      success: (data) => {
        console.log('song data was received from server');
        this.setState({song: JSON.parse(data)[0]});
      }
    });
  }

  clearForm() {
    //display song saved and then force a rerender
    document.getElementById("songDetails").append('Song saved!');
    // document.getElementById("songDetails").reset();
  }


  render() {
    return (
    <div>
    <iframe name="myform" style={{display:'none'}}></iframe>
      <form action="/" method="post" target="myform" id="songDetails">
        <div>
          <label>Song Title</label><input name="title" type="title" id="title"/>
        </div>
        <div>
          <label>Artist Name</label><input name="artist" type="artist" id="artist"/>
        </div>
        <div>
          <button type="submit" onClick={this.clearForm}>Save A Recommendation For Future</button>
        </div>
      </form>

      <h3>Or</h3>

      <button onClick={this.getSong}>
        Click To Get Random Song Recommendation
      </button>
      <div id="recommendedSong">
        <div>{this.state.song ? 'Title: ' + this.state.song.title : '' }  </div>
        <div>{this.state.song ? 'Artist: ' + this.state.song.artist : ''}  </div>
      </div>
    </div>
    );
  }
}

ReactDOM.render(<App name="Krista"/>, document.getElementById('app'))

