import React from 'react';
import axios from 'axios';
import { GetSong } from './getSong.jsx';
import { SongForm } from './songForm.jsx';
import { Lyrics } from './lyrics.jsx';

const style = {
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 3fr 1fr',
    minHeight: 300,
    height: 'auto',
    paddingTop: '10%',
    marginBottom: 50,
  },
  mainDisplay: {
    backgroundColor: 'white',
    background: 'rgba(244, 244, 244, 0.5)',
    borderRadius: 25,
    textAlign: 'center',
    paddingTop: 15,
  },
  tabContainer: {
    backgroundColor: 'white',
    borderRadius: 25,
    margin: '0 auto',
    paddingTop: 15,
    width: '90%',
    marginBottom: '5%',
  },
};

export class App extends React.Component {
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
    axios
      .get('/api/random')
      .then(data => {
        this.setState({ song: data.data[0] });
      })
      .then(data => this.getLyrics())
      .catch(err => console.log(err));
  }

  submitSong(title, artist) {
    axios
      .post('/api/addSong', {
        title: title,
        artist: artist
      })
      .then(data => {});
  }

  getLyrics() {
    // first get song id
    axios
      .get('api/getLyrics', {
        params: {
          title: this.state.song.title,
          artist: this.state.song.artist
        }
      })
      .then(res => {
        if (res.data.lyrics_body === '') {
          this.setState({
            lyrics:
              "Oops unfortunately we're not authorized to show these lyrics."
          });
        } else {
          // clean up lyrics
          const words = res.data.lyrics_body.split('*******');
          this.setState({ lyrics: words[0] });
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div style={style.gridContainer}>
        <div />
        <div style={style.mainDisplay}>
          <h1>Karaoke Song Selector</h1>
          <div className="card" style={style.tabContainer}>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#getSong"
                  role="tab"
                  aria-controls="getSong"
                  aria-selected="true"
                >
                  Get A Song
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#addSong"
                  role="tab"
                  aria-controls="addSong"
                  aria-selected="false"
                >
                  Add A Song
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="getSong"
                role="tabpanel"
                aria-labelledby="getSong-tab"
              >
                <GetSong
                  title={this.state.song.title}
                  artist={this.state.song.artist}
                  lyrics={this.state.lyrics}
                  getSong={this.getSong}
                  getLyrics={this.getLyrics}
                />
              </div>
              <div
                className="tab-pane fade"
                id="addSong"
                role="tabpanel"
                aria-labelledby="addSong-tab"
              >
                <SongForm submitSong={this.submitSong} />
              </div>
            </div>
          </div>
        </div>
        <div />
      </div>
    );
  }
};

