import React from 'react';
import '../../styles/index.css'; 


//COMPOSENTS
import Header from '../../components/Header/index'
import BackgroundImage from '../../components/BackgroundImage/index'
import Gallery from '../../components/Gallery/index'
import Footer from '../../components/Footer/index'

function Home () {
    return (
        <div>
            <Header />
            <BackgroundImage />
            <Gallery />
            <Footer />
        </div>
    )
}

export default Home
