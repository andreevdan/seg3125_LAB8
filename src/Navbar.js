import React from 'react';
import './Navbar.css'; // import the CSS file

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><a href='/' className="navbar-link" style={{marginRight: 80}}>Home</a></li>
        <li><a href='/about' className="navbar-link" style={{marginRight: 80}}>About</a></li>
        <li><a href='/vote' className="navbar-link" style={{marginRight: 80}}>Vote</a></li>
        <li><a href='/result' className="navbar-link">Results</a></li>
      </ul>
    </nav>
  );
};


export default Navbar;