import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function About() {
    return (
        <>
            <section className='page-section mb-0'>     
            <Container fluid>
                <h2 className="page-section-heading text-center text-uppercase text-white">About</h2>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                </div>
                <Row>
                    <Col>
                        <img alt='Ben Linton' src='https://via.placeholder.com/200x200' className="img"></img>
                    </Col>
                    <Col>
                        <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo nec ultrices dui sapien eget mi. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Aliquet lectus proin nibh nisl condimentum id venenatis. Vitae et leo duis ut diam quam nulla porttitor. Aliquet sagittis id consectetur purus ut. Amet luctus venenatis lectus magna fringilla. Cras adipiscing enim eu turpis egestas pretium. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Congue eu consequat ac felis. Nulla facilisi nullam vehicula ipsum a. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Ornare lectus sit amet est placerat in egestas erat imperdiet. Id aliquet risus feugiat in ante.</p>
                    </Col>
                </Row>
            </Container>
            </section>  

        </>
    )
}

export default About;