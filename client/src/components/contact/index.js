import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Contact() {
    return (
        <>
            <section className='page-section'>
                <Container>
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Contact Me</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                    </div>
                    <Row>
                    <Col lg={8} className="mx-auto">
                    <Form>
                    <Form.Group className="form-group floating-label-form-group mb-0 pb-2">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' placeholder='Name'/>
                    </Form.Group>
                    <Form.Group className="form-group floating-label-form-group mb-0 pb-2">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' placeholder='Email Address'/>
                    </Form.Group>
                    <Form.Group className="form-group floating-label-form-group mb-0 pb-2">
                        <Form.Label>Phone Number</Form.Label>
                        <Form.Control type='tel' placeholder='Phone Number'/>
                    </Form.Group>
                    <Form.Group className="form-group floating-label-form-group mb-0 pb-2">
                        <Form.Label>Message</Form.Label>
                        <Form.Control type='text' as='textarea' rows={5} placeholder='Message'/>
                    </Form.Group>
                    </Form>
                    <Button className='mt-4'variant="outline-info">Submit</Button>
                    </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Contact;