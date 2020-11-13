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
                        <h1 className="font-weight-heavy"> Ben Linton </h1>
                        <p className="lead">Full Stack Web Developer</p>
                    </div>
                </div>
                <Snowfall color="whitesmoke"/>
            </Container>
        </header>
    )
}

export default Header;