import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

//COMPOSENTS
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import LogPresentation from '../../components/LogPresentation/index'
import listings from '../../assets/listings.json'

function Logement() {

  let { id } = useParams();

  const isValidId = listings.some(listing => listing.id === id);
  if (!isValidId) {
    return <Navigate to="/error" />;
  }

  return (
    <div>
      <Header />
      <LogPresentation id={id} />
      <Footer />
    </div>
  );
}
  
export default Logement;