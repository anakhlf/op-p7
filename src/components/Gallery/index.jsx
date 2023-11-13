import '../../styles/index.css'; 
import listings from '../../assets/listings.json';


//Components
import ListingGallery from '../ListingGallery';

function Gallery () {
    return (
    <div className='gallery'>
        <ListingGallery listings={listings} />
    </div>
    )
}

export default Gallery;