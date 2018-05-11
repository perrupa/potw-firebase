import React from 'react';
import {Link} from 'react-router';
import UserMenu from 'components/UserMenu';

const Header = ({currentUser, logOut}) => (
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
        <UserMenu user={currentUser} logOut={logOut}/>
      </nav>
    </div>
    <link
      href="https://fonts.googleapis.com/css?family=Lora:700"
      rel="stylesheet"
    />
  </header>
)

export default Header
