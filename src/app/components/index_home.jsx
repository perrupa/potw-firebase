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
    return songs.map( (song, index) => {
      return <Song key={index} song={song} />
    })
  }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      // actionCreatorsGoHere
    }, dispatch);
}

function mapStateToProps(state) {
    return { songs: state.songs };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
