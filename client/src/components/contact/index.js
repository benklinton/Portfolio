import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import emailjs from 'emailjs-com';

class Contact extends React.Component {

    state = {
        name: '',
        email: '',
        subject: '',
        message: ''

    }

    onNameChange(e) {
        this.setState({ name: e.target.value })
    }
    onEmailChange(e) {
        this.setState({ email: e.target.value })
    }
    onSubjectChange(e) {
        this.setState({ subject: e.target.value })
    }
    onMsgChange(e) {
        this.setState({ message: e.target.value })
    }

    submitEmail(e) {
        e.preventDefault();
        console.log(this.state);
        console.log(e.target)

        emailjs.sendForm('service_yg018q6', 'template_ko4519n', this.state, 'user_D7iPC5YD66U3MPpgP0irm')
       .then((result) => {
           console.log(result.text);
       }, (error) => {
           console.log(error.text);
       })

    }

    resetForm() {
        this.setState({ name: '', email: '', subject: '', message: '' });
    }

    render() {
        return (
            <>
                <section className='page-section bg-about'>
                    <Container>
                        <h2 id='contact' className="page-section-heading text-center text-uppercase text-color mb-0">Contact Me</h2>
                        <div className="divider-custom">
                            <div className="divider-custom-line"></div>
                        </div>
                        <Row>
                            <Col lg={8} className="mx-auto">
                                <Form onSubmit={this.submitEmail.bind(this)}>
                                    <Form.Group className="form-group floating-label-form-group mb-0 pb-2">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type='text' placeholder='Name'
                                            required value={this.state.name} onChange={this.onNameChange.bind(this)} />
                                    </Form.Group>
                                    <Form.Group className="form-group floating-label-form-group mb-0 pb-2">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type='email' placeholder='Email Address'
                                            required value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                                    </Form.Group>
                                    <Form.Group className="form-group floating-label-form-group mb-0 pb-2">
                                        <Form.Label>Subject</Form.Label>
                                        <Form.Control type='text' placeholder='Subject'
                                            required value={this.state.subject} onChange={this.onSubjectChange.bind(this)} />
                                    </Form.Group>
                                    <Form.Group className="form-group floating-label-form-group mb-0 pb-2">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control type='text' as='textarea' rows={5} placeholder='Message'
                                            required value={this.state.message} onChange={this.onMsgChange.bind(this)} />
                                    </Form.Group>
                                    <Button className='mt-4' type='submit' variant="outline-info">Submit</Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
        )
    }
}
export default Contact;