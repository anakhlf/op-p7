import React from 'react';
import { useParams } from 'react-router-dom';

//COMPOSENTS
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import LogPresentation from '../../components/LogPresentation/index'

function Logement() {

  let { id } = useParams();

    return (
      <div>
        <Header />
        <LogPresentation id={id} />
        <Footer />
      </div>
    );
  }
  
  export default Logement;