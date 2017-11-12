class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song: ''
    }
  }

  getSong() {
    console.log('getSong called');
    $.ajax({
      url: '/',
      type: 'POST',
      dataType: 'json',
      success: function(data) {
        console.log('song data was received from server', data);
        this.setState({song: data});
        this.forceUpdate();
      }
    });
  }

  saveSong() {
    console.log('saveSong called');
    $.ajax({
      url: '/',
      type: 'POST',
      dataType: 'json',
      success: function(data) {
        console.log('song data was received sent');
      }
    });
  }

  render() {
    return (
    <div>
      <form action="localhost:3000/recommend" method="post">

        <div>
          <label>Song Title</label><input name="title" value=""/>
        <div/>
        <div>
          <label>Artist Name</label><input name="artist" value=""/>
        </div>
        <div>
          <label>Genre</label><input name="title" value=""/>
        <div/>
        <div>
          <label>YouTube Link (optional)</label><input name="artist" value=""/>
        </div>

        <div>
          <button>Save A Recommendation For Future</button>
        </div>
        </div>
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

  //should update db
  componentDidMount() {
    //get request for last 5 recently meowed songs
    // $.ajax({
    //   url: '/',
    //   type: 'GET',
    //   dataType: 'json',
    //   success: function(data) {
    //   console.log('component mounted');
    //   }
    // });
  }

}



ReactDOM.render(<App name="Krista"/>, document.getElementById('app'))