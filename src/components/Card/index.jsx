import '../../styles/index.css'; 
import { Link } from 'react-router-dom'

function Card ({id, title, cover}) {
    return (
        <Link to={`/logement/${id}`} className="card">
            <article className="card">
                <img src={cover} alt={`Couverture de ${title}`} className='image-logement' />
                <div className='overlay'></div>
                <p className='logement-title' >{title}</p>
            </article>
        </Link>
    )
}

export default Card