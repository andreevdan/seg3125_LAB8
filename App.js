import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
    </div>
    
  );
};

export default App;
