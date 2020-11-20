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
                <h2 id='about' className="page-section-heading text-center text-uppercase text-white">About</h2>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                </div>
                <Row>
                    <Col>
                        <img alt='Ben Linton' src='./assets/Profile-Pic.jpg' className="img"></img>
                    </Col>
                    <Col>
                        <p className='about-text'>Born in California but raised all over the Wasatch Front I discoverd programming
                        and the world of computers in general when I lived in Korea and learned how to install Linux
                        onto a Chromebook. With my life forever changed I decided to presue the career field. </p>
                    </Col>
                </Row>
            </Container>
            </section>  

        </>
    )
}

export default About;