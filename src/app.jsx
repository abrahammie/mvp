import React from 'react';
import axios from 'axios';
import { Button, ButtonToolbar, Panel, Tabs, Tab } from 'react-bootstrap';
import GetSong from './getSong.jsx';
import { SongForm } from './songForm.jsx';
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
    //padding: '1em',
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
    };
    this.getSong = this.getSong.bind(this);
    this.submitSong = this.submitSong.bind(this);
    this.getLyrics = this.getLyrics.bind(this);
  }

  getSong() {
    this.setState({ lyrics: '' });
    axios.get('/api/random')
      .then((data) => {
        console.log('song data received from server:', data.data[0]);
        this.setState({ song: data.data[0] });
      })
      .then((data) => this.getLyrics())
      .catch((err) => console.log(err));
  }

  submitSong(title, artist) {
    axios.post('/api/addSong', {
        title: title,
        artist: artist
      })
      .then(data => {
        //document.getElementById('songForm').append('Song saved!');
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
    .then((res) => {
      if (res.data.lyrics_body === '') {
        this.setState({ lyrics: 'Oops unfortunately we\'re not authorized to show these lyrics.' });
      } else {
        // clean up lyrics
        const words = res.data.lyrics_body.split('*******');
        this.setState({ lyrics: words[0] });
      }
    })
    .catch((err) => console.log(err));
  }

  render() {
    return (
      <div style={style.gridContainer}>
      <div></div>

      <div style={style.mainDisplay}>
        <h1>Karaoke Song Selector</h1>
        <Panel style={style.tabContainer}>
          <Tabs defaultActiveKey={1} id="tabs">
            <Tab eventKey={1} title="Get a song">
              <GetSong
              title={this.state.song.title}
              artist={this.state.song.artist}
              lyrics={this.state.lyrics}
              getSong={this.getSong}
              getLyrics={this.getLyrics}
              />
            </Tab>
            <Tab eventKey={2} title="Add a song">
              <SongForm submitSong={this.submitSong} />
            </Tab>
          </Tabs>
        </Panel>
      </div>

      <div></div>
      </div>
    );
  }
}

export default App;
