import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { playSong, loadPlaylist } from 'actions/songs';
import Playlist from 'components/Playlist';

class Index extends Component {

  componentDidMount() {
    this.playSong = this.playSong.bind(this)
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
        <Playlist songs={songs} playSong={this.playSong} />
      </div>
    );
  }

  playSong(id) {
    return this.props.playSong(id)
  }
}

export default connect(
  state => ({ songs: state.songs }),
  dispatch => bindActionCreators({ playSong, loadPlaylist }, dispatch)
)(Index)
