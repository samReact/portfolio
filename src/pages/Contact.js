import { useState } from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
  Spinner,
} from 'react-bootstrap';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [validated, setValidated] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  const handleSubmit = (e) => {
    const form1 = e.currentTarget;
    if (form1.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      setValidated(true);
    } else if (form1.checkValidity() === true) {
      console.log(form);
      e.preventDefault();
      setLoading(true);
      setMessageSent(true);
    }
  };
  return (
    <div style={{ height: '100vh', backgroundColor: '#000' }}>
      <Container
        style={{
          left: 0,
          right: 0,
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <Row className="justify-content-center">
          <Col lg={6}>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label className="text-white">Name</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    aria-describedby="name"
                    value={form.name}
                    onChange={handleChange}
                    maxLength="15"
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your name.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label className="text-white">Email address</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    aria-describedby="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your email.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="message">
                <Form.Label className="text-white">Your message</Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="text"
                    aria-describedby="message"
                    as="textarea"
                    rows={3}
                    maxLength="200"
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter a message.
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              {loading ? (
                <Button variant="primary" disabled>
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />{' '}
                  Sending...
                </Button>
              ) : (
                <Button variant="primary" type="submit" disabled>
                  Submit
                </Button>
              )}
            </Form>
            {messageSent && (
              <p className="text-white">Your message has been sent !</p>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
