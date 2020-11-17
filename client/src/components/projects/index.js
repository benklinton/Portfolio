import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

function Projects() {
    return (
        <>
            <Container fluid className="projects-section">
            <h2 className=' text-center projects-header'>Projects</h2>
            <hr className='rounded'></hr>
                <Row>
                    {/* <CardDeck>
                        <Card>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="https://via.placeholder.com/200x200" alt="chip shop logo"></img>
                                        </div>
                                        <div class="flip-card-back">
                                            <h1>Chip Shop</h1>
                                            <p>Architect & Engineer</p>
                                            <p>We love that guy</p>
                                        </div>
                                    </div>
                                </div>
                   </Card>
                   <Card>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="https://via.placeholder.com/200x200" alt="project"></img>
                                        </div>
                                        <div class="flip-card-back">
                                            <h1>John Doe</h1>
                                            <p>Architect & Engineer</p>
                                            <p>We love that guy</p>
                                        </div>
                                    </div>
                                </div>
                   </Card>
                   <Card>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="https://via.placeholder.com/200x200" alt="project"></img>
                                        </div>
                                        <div class="flip-card-back">
                                            <h1>John Doe</h1>
                                            <p>Architect & Engineer</p>
                                            <p>We love that guy</p>
                                        </div>
                                    </div>
                                </div>
                   </Card>
               </CardDeck> */}
           </Row>

        </Container>
        </>
    )
}

export default Projects;