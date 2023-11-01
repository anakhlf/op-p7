import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import App from './pages/Home/App'
import Survey from './pages/Survey'
import Header from './components/Header'

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Header />
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/survey" element={<Survey />} />
          </Routes>
      </Router>
  </React.StrictMode>,
document.getElementById('root')
)