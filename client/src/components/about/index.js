import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function About() {
    return (
        <>
            <section className='page-section bg-about mb-0'>     
            <Container fluid>
                <h2 id='about' className="page-section-heading text-center text-uppercase text-color">About</h2>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                </div>
                <Row>
                    <Col>
                        <img alt='Ben Linton' src='./assets/Profile-Pic.jpg' className="about-img"></img>
                    </Col>
                    <Col>
                        <p className='about-text'>I was raised all over the Wasatch Front, but I discovered programming
                        and the world of computers when I lived in Korea. I taught myself how to install Linux
                        onto a Chromebook, and my passion was ignited. With my life forever changed, I decided to pursue a career where I could continuously learn more about what I love. </p>
                    </Col>
                </Row>
            </Container>
            </section>  

        </>
    )
}

export default About;