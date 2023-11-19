import '../../styles/index.css'; 
import { Link } from 'react-router-dom'

function ErrorMessage() {
    return (
        <div className='div__error'>
            <h1 className='error-title'>404</h1>
            <p className='error-oops'>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="error-link">
                <p className='error-return'>Retourner sur la page d’accueil</p>
            </Link>
        </div>
    )
}

export default ErrorMessage;