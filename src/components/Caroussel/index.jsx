import '../../styles/index.css'; 
import React, { useState } from 'react';
import listings from '../../assets/listings.json';
import ArrowLeft from '../../assets/images/icons/arrow_left.png';
import ArrowRight from '../../assets/images/icons/arrow_right.png';
import { useParams } from 'react-router-dom';

function Caroussel() {
    const { id } = useParams();
    const [currentIndex, setCurrentIndex] = useState(0);
    
    
    const currentListing = listings.find(listing => listing.id === id);
   
    const images = currentListing ? currentListing.pictures : [];
    const totalImages = images.length;

    const goToPrevious = () => {
        const isFirstImage = currentIndex === 0;
        const newIndex = isFirstImage ? totalImages - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastImage = currentIndex === totalImages - 1;
        const newIndex = isLastImage ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <div className="caroussel">
            <img src={ArrowLeft} className='arrow-left' onClick={goToPrevious} alt="Précédent" />
            {images.length > 0 && (
                <div className="image-container">
                    <img src={images[currentIndex]} className="log-pictures" alt={`Image ${currentIndex + 1}`} />
                    <div className="counter">{`${currentIndex + 1}/${totalImages}`}</div>
                </div>
            )}
            <img src={ArrowRight} className='arrow-right' onClick={goToNext} alt="Suivant" />
        </div>
    );
}

export default Caroussel;