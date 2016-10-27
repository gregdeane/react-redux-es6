import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-faded">
      <ul className="nav navbar-nav">
        <li className="nav-item">
          <IndexLink to="/" className="nav-link" activeClassName="active">Home</IndexLink>
        </li>
        <li className="nav-item">
          <Link to="/courses" className="nav-link" activeClassName="active">Courses</Link>
        </li>
        <li className="nav-item">
          <Link to="/about" className="nav-link" activeClassName="active">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
