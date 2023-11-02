import '../../styles/index.css'; 
import logoNB from '../../assets/images/logo/logo_nb.png'


function Footer () {
    return (
        <div className='footer'>
            {<img className="logonb" src={logoNB} alt="logo" />}
            <p className='right'>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer