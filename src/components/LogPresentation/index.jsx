import '../../styles/index.css'; 
import React from 'react';
import listings from '../../assets/listings.json';
import '../../styles/index.css'; 
import Caroussel from '../../components/Caroussel/index'
import LogDescription from '../../components/LogDescription/index'
import { useParams } from 'react-router-dom';

function LogPresentation() {
    let { id } = useParams();
    const listing = listings.find(listing => listing.id === id);
    console.log(id);

 return (
    <section className="log-description">
        {listing && (
        <>
          <Caroussel listing={listing} />
          <LogDescription listing={listing} />
        </>
      )}
    </section>
 )
}

export default LogPresentation;

    