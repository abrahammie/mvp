class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song: ''
    }
    //this.setState = this.setState.bind(this);
    this.getSong = this.getSong.bind(this);
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

  saveSong() {
    console.log('saveSong called');
    $.ajax({
      url: '/',
      type: 'POST',
      body: 'form',
      //dataType: 'json',
      success: (data) => {
        console.log('song data was received sent');
      }
    });
  }

  render() {
    return (
    <div>

      <form action="/recommend" method="post">
        <div>
          <label>Song Title</label><input name="title" type="title" id="title"/>
        </div>
        <div>
          <label>Artist Name</label><input name="artist" type="artist" id="artist"/>
        </div>
        <div>
          <label>Genre</label><input name="genre" type="genre" id="genre"/>
        </div>
        <div>
          <label>YouTube Link (optional)</label><input name="youTube" type="youTube" id="youTube"/>
        </div>
        <div>
          <button type="submit">Save A Recommendation For Future</button>
        </div>
      </form>

      <h3>Or</h3>

      <button onClick={this.getSong}>
        Click To Get Song Recommendation
      </button>

      <div>{this.state.song ? 'Title: ' + this.state.song.title : '' }  </div>
      <div>{this.state.song ? 'Artist: ' + this.state.song.artist : '' }  </div>
    </div>
    );
  }



ReactDOM.render(<App name="Krista"/>, document.getElementById('app'))