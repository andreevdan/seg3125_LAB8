import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
import Results from './Results';
import Vote from './Vote';

const App = () => {
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>} />
            <Route path='/result' element={<Results/>} />
            <Route path='/vote' element={<Vote/>} />
          </Routes>
        </div>
      </BrowserRouter>
    
  );
};

export default App;