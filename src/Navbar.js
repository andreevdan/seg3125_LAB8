import React from 'react';
import './Navbar.css'; // import the CSS file
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li><a href="#" className="navbar-link">Home</a></li>
        <li><a href="#" className="navbar-link">Home</a></li>
        <li><a href="#" className="navbar-link">Vote</a></li>
        <li><a href="#" className="navbar-link">Results</a></li>
      </ul>
    </nav>
  );
};


export default Navbar;