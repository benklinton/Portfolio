import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function Navigation() {
    return (
        <Nav className="navbar navbar-expand-lg navbar-dark bg-custom static-top">
        <Container>
          <Navbar.Brand>
            <img alt='Logo' src='./assets/Logo.png'></img>
          </Navbar.Brand>
          <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </Button>
          <Navbar.Collapse id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <Nav.Item>
                <Nav.Link href="#about">About
                    </Nav.Link>
              </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#projects">Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="./assets/Resume.pdf" target="_blank">Resume</Nav.Link>
                </Nav.Item>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Nav>
    )
}

export default Navigation;