import React from 'react';
import './Navbar.css'; // import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><a href='/' className="navbar-link">Home</a></li>
        <li><a href='/request' className="navbar-link">Request</a></li>
        <li><a href='/vote' className="navbar-link">Vote</a></li>
        <li><a href='/result' className="navbar-link">Results</a></li>
      </ul>
    </nav>
  );
};


export default Navbar;