// AboutUs.js

import React from 'react';
import './About.css';
import HelpButton from './HelpButton';

const About = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <div className='help'><HelpButton/></div>
      <p>Hello! Welcome to our website! We are a group of four uOttawa students that decided to create a website that informs users about how various cars stack up against each other.</p>
      <p>We hope you enjoy our website, and if you have any concerns or questions, feel free to contact us at <a href="mailto:favouritecars@gmail.com">favouritecars@gmail.com</a></p>
      <h2>Our Mission</h2>
      <p>It is our mission to provide users with reliable information on how various aspects of cars are rated and perceived to make buying cars easier.</p>
      <h2>Our Team</h2>
      <ul>
        <li>Azan Mubashar</li>
        <li>Evan Zeglinski-Spinney</li>
        <li>Daniel Andreev</li>
        <li>Terrence Manly-Elliott</li>
      </ul>
    </div>
  );
};

export default About;
