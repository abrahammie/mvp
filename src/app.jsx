class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song: ''
    }
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

  addSong(data) {
    console.log('addSong called');
    $.ajax({
      url: '/',
      type: 'POST',
      body: `${data}`,
      success: (response) => {
        console.log('song data was sent');
      }
    });
  }

  clearFields() {
    document.getElementById("form").value = "";
  }

  render() {
    return (
    <div>
      <SubmitForm addSong={this.addSong} clearFields={this.clearFields}/>

      <h3>Or</h3>

      <button onClick={this.getSong}>
        Click To Get Random Song Recommendation
      </button>

      <div>{this.state.song ? 'Title: ' + this.state.song.title : '' }  </div>
      <div>{this.state.song ? 'Artist: ' + this.state.song.artist : ''}  </div>
    </div>
    );
  }
}





const SubmitForm = ({addSong, clearFields}) => {

  handleChange(event) {
    this.setState({title: event.target.value})
  }

  return (
    <div>
    <form id="form">
        <div>
          <label>Song Title</label><input type="text" value={this.state.title} onChange={this.handleChange.bind(this)} />
        </div>
        <div>
          <label>Artist Name</label><input id="input" ref={node => `${val.artist = node}`} />
        </div>
        <div>
          <label>Genre</label><input id="input" ref={node => `${val.genre = node}`} />
        </div>
        <div>
          <button onClick={() => {console.log(val);
            // addSong(val);
            // clearFields();
            }}>Save A Recommendation For Future</button>
        </div>
        </form>
    </div>
    );
}

















ReactDOM.render(<App name="Krista"/>, document.getElementById('app'))