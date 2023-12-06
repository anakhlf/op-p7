import '../../styles/index.css'; 
import listings from '../../assets/listings.json';


//Components
import ListingGallery from '../ListingGallery';

function Gallery () {
    return (
    <section className='section__gallery'>
        <div className='gallery'>
            <ListingGallery listings={listings} />
        </div>
    </section>
    )
}

export default Gallery;