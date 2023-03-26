import React ,{ useState, useEffect }from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Home';
import Request from './Request';
import Navbar from './Navbar';
import Results from './Results';
import Vote from './Vote';
import About from './About';
import FR from './FR';
import Resultsfr from './Resultsfr';
import Aboutfr from './Aboutfr';
import Votefr from './Votefr';


const App = () => {
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);
  return (
      <BrowserRouter>
        <div className="App">
          <Navbar setLanguage={setLanguage}/>
          <Routes>
          <Route exact path="/"
            element = {language === 'en' ? <Home /> : <FR />}/>

            <Route path='/request' element={<Request/>} />
            <Route path='/result' element={language === 'en' ? <Results /> : <Resultsfr />} />
            <Route path='/vote' element={language === 'en' ? <Vote /> : <Votefr />} />
            <Route path='/about' element={language === 'en' ? <About /> : <Aboutfr />} />
            <Route path='/FR' element={<FR/>} />
            
          </Routes>
        </div>
      </BrowserRouter>
    
  );
};

export default App;
