import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function About() {
    return (
        <>
        <Container fluid className="about-section">
            <h2 className=' text-center about-header'>About</h2>
            <hr className='rounded'></hr>
            <Row>
                <Col>
                <img alt='Ben Linton' src='https://via.placeholder.com/200x200' className="img"></img>
                </Col>
                <Col>
                <p className='about-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Justo nec ultrices dui sapien eget mi. Nullam eget felis eget nunc lobortis mattis aliquam faucibus. Aliquet lectus proin nibh nisl condimentum id venenatis. Vitae et leo duis ut diam quam nulla porttitor. Aliquet sagittis id consectetur purus ut. Amet luctus venenatis lectus magna fringilla. Cras adipiscing enim eu turpis egestas pretium. Consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat. Congue eu consequat ac felis. Nulla facilisi nullam vehicula ipsum a. Et malesuada fames ac turpis egestas integer eget aliquet nibh. Ornare lectus sit amet est placerat in egestas erat imperdiet. Id aliquet risus feugiat in ante.</p>
                </Col>
            </Row>
        </Container>

        </>
    )
}

export default About;