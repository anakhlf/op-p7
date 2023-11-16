import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo/logo.png'
import '../../styles/index.css'; 

 
function Header() {
    const location = useLocation();

    return (
        <nav className='nav'>
            <img src={logo} alt="logo Kasa" className='logo-kasa' />
            <div className='div__links'>
                <Link to="/" className={`nav__link ${location.pathname === '/' ? 'active' : ''} active-link-home `}>Accueil</Link>
                <Link to="/Apropos" className={`nav__link ${location.pathname === '/Apropos' ? 'active' : ''} active-link-about`}>A propos</Link>
            </div>
        </nav>
    );
}

export default Header;

