class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song: ''
    }
    this.getSong = this.getSong.bind(this);
    this.clearFields = this.clearFields.bind(this);
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

  clearFields() {
    document.getElementById("songDetails").value = "";
  }

  saveSong() {
    document.getElementById("songDetails").reset();
    // console.log('saveSong called');
    // $.ajax({
    //   url: '/',
    //   type: 'POST',
    //   body: 'form',
    //   success: (data) => {
    //     console.log('song data was sent');
    //   }
    // });
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
          <button onClick={this.saveSong}>Save A Recommendation For Future</button>
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