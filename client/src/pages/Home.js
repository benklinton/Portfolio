import React from 'react';
import Navigation from '../components/navbar';
import Header from '../components/header';
import About from '../components/about';
import Projects from '../components/projects';
import Contact from '../components/contact';
import Footer from '../components/footer';

function Home() {
    return(
        <>
        <Navigation/>
        <Header/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default Home;