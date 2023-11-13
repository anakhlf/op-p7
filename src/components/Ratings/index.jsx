import React from 'react';
import fullStar from '../../assets/images/icons/full-star.png'; 
import emptyStar from '../../assets/images/icons/empty-star.png'; 
import '../../styles/index.css'; 

const MAX_RATING = 5;

function Ratings({ rating }) {
  const fullStars = Array.from({ length: rating }, (_, index) => (
    <img key={index} src={fullStar} alt="Étoile pleine" className="star" />
  ));
  
  const emptyStars = Array.from({ length: MAX_RATING - rating }, (_, index) => (
    <img key={index} src={emptyStar} alt="Étoile vide" className="star" />
  ));

  return (
    <div className="log-rating">
      {fullStars}
      {emptyStars}
    </div>
  );
}

export default Ratings;