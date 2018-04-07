import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Song from './song/song.jsx';

class Index extends Component {

  render() {
    const {songs} = this.props || [];
    return (
      <div>
        <h1>POTW</h1>
        <ul>
          {this.getSongs(songs)}
        </ul>
      </div>
    );
  }

  getSongs(songs) {
    return songs.map((song, index) =>
      <li>
        <Song key={index} song={song} />
      </li>
    )
  }
}

const playSong = songID => ({ type: "PLAY_SONG", songID })

export default connect(
  state => ({ songs: state.songs }),
  dispatch => bindActionCreators({
    playSong: playSong
  }, dispatch)
)(Index)
