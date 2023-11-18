import React from 'react';
import './styles/index.css'; 


//COMPOSENTS
import Home from './pages/Home/index';

//ROUTES
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Logement from './pages/Logement/Logement'
import Apropos from './pages/A-propos/Apropos'
import Error from './pages/Error/Error'

function App() {
  return (
    <div className='App'>
     <Router>
          <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Apropos" element={<Apropos />} />
                <Route path="/Logement/:id" element={<Logement />} />
                <Route path="*" element={<Error />} />
          </Routes>
    </Router>
    </div>
  );
}

export default App;

//path id
//arrondis bas de carte
//rediger id dans le cas ou id n'existe pas dans logement
//racourcir distance 404 error