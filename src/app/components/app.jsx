import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {fetchUser, logoutUser} from 'actions/firebase_actions';
import Header from 'components/header';

class App extends Component {
  constructor(props) {
    super(props);

    props.fetchUser();
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    this.props.logoutUser().then(data => {
      // reload props from reducer
      this.props.fetchUser();
    });
  }

  render() {
    return (
      <div>
        <Header
          logOut={this.logOut}
          currentUser={this.props.currentUser}
        />

        <div className="container">{this.props.children}</div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchUser, logoutUser}, dispatch);
}

function mapStateToProps(state) {
  return {currentUser: state.currentUser};
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
