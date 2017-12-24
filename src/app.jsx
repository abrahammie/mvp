import React from 'react';
import axios from 'axios';
import Song from './song.jsx';
import SongForm from './songForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song: '',
    };
    this.getSong = this.getSong.bind(this);
    this.submitSong = this.submitSong.bind(this);
  }

  getSong() {
    axios.get('/api/random')
      .then(data => {
        console.log('song data received from server:', data);
        this.setState({ song: data.data[0] });
      })
      .catch(err => console.log(err));
  }

  submitSong(title, artist) {
    axios.post('/api/addSong', {
        title: title,
        artist: artist
      })
      .then(data => {
        document.getElementById('songForm').append('Song saved!');
      });
  }

  render() {
    return (
      <div>
        <SongForm submitSong={this.submitSong} />
        <h3>Or</h3>

        <button onClick={this.getSong}>
          Click To Get Random Song Recommendation
        </button>
        <div id="recommendedSong">
          <div>{this.state.song ? 'Title: ' + this.state.song.title : ''} </div>
          <div>
            {this.state.song ? 'Artist: ' + this.state.song.artist : ''}{' '}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
