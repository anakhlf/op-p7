import React from 'react';

//COMPOSENTS
import Header from '../../components/Header/index'
import BackgroundImage from '../../components/BackgroundImage/index'
import Imagebackground from '../../assets/images/background_apropos.png'
import Footer from '../../components/Footer/index'
import ValuesBlock from '../../components/Values/index'

function Apropos() {
    return (
      <div>
        <Header />
        <BackgroundImage imageUrl={Imagebackground} altText="Paysage" text=""/>
        <ValuesBlock />
        <Footer />
      </div>
    );
  }
  
  export default Apropos;