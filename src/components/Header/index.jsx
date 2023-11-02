import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo/logo.png'
import '../../styles/index.css'; 

 
function Header() {
    return (
        <nav className='nav'>
            {<img src={logo} alt="logo Kasa" className='logo-kasa' />}
            <div className='div__links'>
                <Link to="/" className='nav__link'>Accueil</Link>
                <Link to="/Apropos" className='nav__link'>A propos</Link>
            </div>
        </nav>
    )
}

export default Header


