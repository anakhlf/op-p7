import React from 'react';
import Cart from '../Cart/index';

import '../../styles/index.css'; 

function ListingGallery({ listings }) {
  if (!Array.isArray(listings)) {
    console.error('listings n\'est pas un tableau');
    return null;
  }
    return (
      <div className="listing-gallery">
        {listings.map(listing => (
          <Cart key={listing.id} id={listing.id} title={listing.title} cover={listing.cover} />
        ))}
      </div>
    );
  }
  
  export default ListingGallery;

  //card 