import '../../styles/index.css'; 
import logoNB from '../../assets/images/logo/logo_nb.png'


function Footer () {
    return (
        <footer className='footer'>
            {<img className="logo-nb" src={logoNB} alt="logo" />}
            <p className='right'>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer