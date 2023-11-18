import React from 'react';
import Card from '../Card/index';

import '../../styles/index.css'; 

function ListingGallery({ listings }) {
  if (!Array.isArray(listings)) {
    console.error('listings n\'est pas un tableau');
    return null;
  }
    return (
      <div className="listing-gallery">
      
        {listings.map(listing => (
          <Card key={listing.id} id={listing.id} title={listing.title} cover={listing.cover} />
        ))}
      </div>
    );
  }
  
  export default ListingGallery;

  //card 