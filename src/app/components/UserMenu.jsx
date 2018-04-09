import React, {Component} from 'react';
import {Link} from 'react-router';

const LoggedInUserMenu = ({user, logOut}) =>
  <ul className="nav navbar-nav navbar-right">
    <li className="dropdown">
      <a
        href="#"
        className="dropdown-toggle"
        data-toggle="dropdown"
        role="button"
        aria-haspopup="true"
        aria-expanded="false">
        {user.email} <span className="caret" />
      </a>
      <ul className="dropdown-menu">
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li role="separator" className="divider" />
        <li>
          <Link to="/logout" onClick={logOut}>Logout</Link>
        </li>
      </ul>
    </li>
  </ul>

const LoginMenu = () =>
  <ul className="nav navbar-nav navbar-right">
    <li key={1}>
      <Link to="/login">Login</Link>
    </li>
    <li key={2}>
      <Link to="/register">Register</Link>
    </li>
  </ul>

export default function UserMenu({user, logOut}) {
  if (user && user.uid) {
    // if current user exists and user id exists than make user navigation
    return <LoggedInUserMenu user={user} logOut={logOut} />
  }
  return <LoginMenu />
}
