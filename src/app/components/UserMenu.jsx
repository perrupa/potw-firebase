
renderUserMenu(currentUser) {
  // if current user exists and user id exists than make user navigation
  if (currentUser && currentUser.uid) {
    return (
      <li className="dropdown">
        <a
          href="#" className="dropdown-toggle" data-toggle="dropdown" role="button"
          aria-haspopup="true" aria-expanded="false"
        >
          {currentUser.email} <span className="caret" /></a>
        <ul className="dropdown-menu">
          <li><Link to="/profile">Profile</Link></li>
          <li role="separator" className="divider" />
          <li><Link to="/logout" onClick={this.logOut}>Logout</Link></li>
        </ul>
      </li>
    );
  } else {
    return [
      <li key={1}><Link to="/login">Login</Link></li>,
      <li key={2}><Link to="/register">Register</Link></li>,
    ];
  }
}
