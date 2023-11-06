import listings from '../../assets/listings.json';
import '../../styles/index.css'; 

function Cart ({title, cover}) {
    return (
        <article className="cart">
            <img src={cover} alt={`Couverture de ${title}`} className='image-logement' />
            <p className='logement-title' >{title}</p>
        </article>
    )
}

export default Cart