import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Snowfall from 'react-snowfall';

function Header() {
    return (
        <header className="masthead">
            
            <Container className=" h-100">
                <div className="row h-100 align-items-center">
                    <div className="col-12 text-center">
                        <h1 className="masthead-heading text-uppercase mb-0"> Ben Linton </h1>
                        <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    </div>
                        <p className="masthead-subheading font-weight-light mb-0">Full Stack Web Developer</p>
                    </div>
                </div>
                <Snowfall color="whitesmoke"/>
            </Container>
        </header>
    )
}

export default Header;