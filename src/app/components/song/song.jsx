import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Song extends Component {

    constructor(props) {
      super(props);
    }

    render(props) {
      const { song, onClick } = this.props
      return (
        <div>
          <button onClick={onClick}>
            {[ song.artist, song.title ].join(' - ')}
          </button>
        </div>
      );
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch);
}

function mapStateToProps(state) {
    return { currentUser: state.currentUser };
}

export default connect(mapStateToProps, mapDispatchToProps)(Song);
