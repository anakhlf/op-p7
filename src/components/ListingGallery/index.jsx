import React from 'react';
import Cart from '../Cart/index';
import listings from '../../assets/listings.json';
import '../../styles/index.css'; 

function ListingGallery() {
    return (
      <div className="listing-gallery">
        {listings.map(listing => (
          <Cart key={listing.id} title={listing.title} cover={listing.cover} />
        ))}
      </div>
    );
  }
  
  export default ListingGallery;