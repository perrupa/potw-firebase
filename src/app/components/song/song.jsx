import React, { Component } from 'react';
import { browserHistory, Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Song extends Component {

    constructor(props) {
      super(props);
    }

    render(props) {
      const { song } = this.props
      return (
        <div>
          {[ song.artist, song.title ].join(' - ')}
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
