import React from 'react';
import Navigation from '../components/navbar';
import Header from '../components/header';
import About from '../components/about';
import Footer from '../components/footer';

function Home() {
    return(
        <>
        <Navigation/>
        <Header/>
        <About/>
        <Footer/>
        </>
    )
}

export default Home;