import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Song from './song/song.jsx';
import { playSong, loadPlaylist } from 'actions/songs';

class Index extends Component {

  componentDidMount() {
    this.props.loadPlaylist([
      { id:1, artist: "Duke Hugh", title: "Your Number", youtubeID: "ydmCCSWiEu4" },
      { id:2, artist: "Todd Terje", title: "Delorean Dynamite", youtubeID: "LUOIvT9hzD8" }
    ])
  }
  render() {
    const {songs} = this.props || [];
    return (
      <div>
        <h1>POTW</h1>
        {songs.map(song =>
          <Song
            key={song.id}
            song={song}
            onClick={this.playSong(song.id)}
          />
        )}
      </div>
    );
  }

  playSong(id) {
    return () => {
      this.props.playSong(id)
    }
  }
}

export default connect(
  state => ({ songs: state.songs }),
  dispatch => bindActionCreators({ playSong, loadPlaylist }, dispatch)
)(Index)
