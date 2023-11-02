import React from 'react';
import './styles/index.css'; 


//COMPOSENTS
import Home from './pages/Home/index';

//ROUTES
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Logement from './pages/Logement/Logement'
import Apropos from './/pages/A-propos/Apropos'


function App() {
  return (
    <div className='App'>
     <Router>
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Apropos" element={<Apropos />} />
                <Route path="/Logement" element={<Logement />} />
          </Routes>
    </Router>
    </div>
  );
}

export default App;