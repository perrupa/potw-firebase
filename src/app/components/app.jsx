import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchUser, logoutUser} from '../actions/firebase_actions';
import UserMenu from '../components/UserMenu';

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
        <header
          className="navbar navbar-static-top navbar-inverse"
          id="top"
          role="banner">
          <div className="container">
            <div className="navbar-header">
              <button
                className="navbar-toggle collapsed"
                type="button"
                data-toggle="collapse"
                data-target=".bs-navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <Link to="/" className="navbar-brand">
                Firebase & Redux boilerplate
              </Link>
            </div>
            <nav
              className="collapse navbar-collapse bs-navbar-collapse"
              role="navigation">
              <ul className="nav navbar-nav">
                <li>
                  <Link to="/"> Home</Link>
                </li>
                ,
              </ul>
              <UserMenu user={this.props.currentUser} logOut={this.logOut} />
            </nav>
          </div>
          <link
            href="https://fonts.googleapis.com/css?family=Lora:700"
            rel="stylesheet"
          />
        </header>

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
