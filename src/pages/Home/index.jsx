import React from 'react';
import '../../styles/index.css'; 


//COMPOSENTS
import Header from '../../components/Header/index'
import BackgroundImage from '../../components/BackgroundImage/index'
import Gallery from '../../components/Gallery/index'
import Footer from '../../components/Footer/index'
import Imagebackground from '../../assets/images/background_header.png'

function Home () {
    return (
        <div>
            <Header />
            <BackgroundImage 
            imageUrl={Imagebackground} 
            altText="Paysage"
            text="Chez vous, partout et ailleurs"
            />
            <Gallery />
            <Footer />
        </div>
    )
}

export default Home
