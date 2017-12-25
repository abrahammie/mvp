import React from 'react';
import axios from 'axios';
import { Button, ButtonToolbar, Grid, Row, Col } from 'react-bootstrap';
import Song from './song.jsx';
import SongForm from './songForm.jsx';
import Lyrics from './lyrics.jsx';

const style = {
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr 1fr',
    minHeight: 300,
    height: 'auto',
    paddingTop: '10%',

  },
  mainDisplay: {
    backgroundColor: 'white',
    background: 'rgba(244, 244, 244, 0.5)',
    borderRadius: 25,
    textAlign: 'center',
  },
  tabContainer: {
    backgroundColor: 'white',
    borderRadius: 25,
    padding: '1em',
    margin: '0 auto',
    width: '90%',
    marginBottom: '5%',
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      song: '',
      lyrics: '',
      trackId: '',
      copyright: '',
    };
    this.getSong = this.getSong.bind(this);
    this.submitSong = this.submitSong.bind(this);
    this.getLyrics = this.getLyrics.bind(this);
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

  getLyrics() {
    // first get song id
    axios.get('api/getLyrics', {
      params: {
        title: this.state.song.title,
        artist: this.state.song.artist
      }
    })
    .then((res) => this.setState({ lyrics: res.data.lyrics_body, copyright: res.data.lyrics_copyright }))
    .catch((err) => console.log(err));
  }

  render() {
    return (
      <div style={style.gridContainer}>
      <div></div>
      <div style={style.mainDisplay}>
        <h1>Meowspiration Song Generator</h1>
          <div style={style.tabContainer}>


        <SongForm submitSong={this.submitSong} />
        <h3>Or</h3>

        <button onClick={this.getSong}>
          Click To Get Random Song Recommendation
        </button>
        <div id="recommendedSong">
      <Song title={this.state.song.title} artist={this.state.song.artist} />

     <ButtonToolbar>
    <Button onClick={this.getLyrics} bsStyle="primary" bsSize="large" active>Can't remember how it starts? Click here...</Button>
    </ButtonToolbar>

        <Lyrics lyrics={this.state.lyrics} copyright={this.state.copyright} />
        </div>


        </div>

      </div>
      <div></div>
      </div>
    );
  }
}

export default App;
