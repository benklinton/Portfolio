import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

function Projects() {
    return (
        <section className='page-section portfolio'>
            <Container>
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                </div>
                <Row>
                    <CardDeck>
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
                    </CardDeck>
                </Row>
            </Container>
        </section>
    )
}

export default Projects;