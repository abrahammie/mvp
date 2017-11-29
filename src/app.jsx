import React from 'react';
import {BrowserRouter, Router, Switch, NavLink} from 'react-router-dom';
import Song from './song.jsx';
import SongForm from './songForm.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song: ''
    }
    this.getSong = this.getSong.bind(this);
    this.submitSong = this.submitSong.bind(this);
  }

  getSong() {
    $.ajax({
      url: '/api/random',
      type: 'GET',
      success: (data) => {
        console.log('song data was received from server');
        this.setState({song: JSON.parse(data)[0]});
      }
    });
  }

  submitSong(title, artist) {
   $.ajax({
      url: '/api/addSong',
      type: 'POST',
      success: (data) => {
        console.log('song data was received from server');
        this.setState({song: JSON.parse(data)[0]});
      }
    }); //display song saved and then force a rerender
    document.getElementById("songForm").append('Song saved!');
  }

  render() {
    return (
    <div>
      <SongForm submitSong={this.submitSong}/>
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

export default App;

