import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

function Projects() {
    return (
        <section className='page-section portfolio'>
            <Container>
                <h2 id='projects' className="page-section-heading text-center text-uppercase text-color mb-0">Projects</h2>
                <div class="divider-custom">
                    <div class="divider-custom-line"></div>
                </div>
                <Row className="row-margin">
                    <CardDeck>
                        <Card>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="./assets/Chip-Shop-Logo.png" alt="Chip Shop Logo" className="chip-shop"></img>
                                    </div>
                                    <div class="flip-card-back">
                                        <h1>Chip Shop</h1>
                                        <p>A simple one page website with info about the small business Chip Shop </p>
                                        <Button target="_blank" variant="outline-info" href="http://www.chipshoprepair.com" className='margin-button'>Website</Button>
                                        <Button target="_blank" variant="outline-info" href="https://github.com/benklinton/Chip-Shop" className='margin-button'>Github</Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="./assets/Soffe-Doodles-Logo.png" alt="Soffe-Doodles Logo"></img>
                                    </div>
                                    <div class="flip-card-back">
                                        <h1>Soffe Doodles</h1>
                                        <p>A multi page website for a local dog breeders business</p>
                                        <Button target="_blank" variant="outline-info" href="http://example.soffedoodles.net" className='margin-button'>Website</Button>
                                        <Button target="_blank" variant="outline-info" href="https://github.com/benklinton/Soffe-Doodles" className='margin-button'>Github</Button>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <Card>
                            <div class="flip-card">
                                <div class="flip-card-inner">
                                    <div class="flip-card-front">
                                        <img src="https://via.placeholder.com/200x200?text=Coming+Soon" alt="project"></img>
                                    </div>
                                    <div class="flip-card-back">
                                        <h1>SoopsArt</h1>
                                        <p>A business website for the display and sell of the works of Sophie Gifford </p>
                                        <p>Currently in Development</p>
                                        <Button target="_blank" variant="outline-info" href="https://github.com/benklinton/SoopsArt" className='margin-button'>Github</Button>
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