import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Home';
import Request from './Request';
import Navbar from './Navbar';
import Results from './Results';
import Vote from './Vote';
import About from './About';


const App = () => {
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='/request' element={<Request/>} />
            <Route path='/result' element={<Results/>} />
            <Route path='/vote' element={<Vote/>} />
            <Route path='/about' element={<About/>} />
          </Routes>
        </div>
      </BrowserRouter>
    
  );
};

export default App;
