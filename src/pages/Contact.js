import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

const Contact = () => {
  const [inProp, setInProp] = useState(false);
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
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="text-white">Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label className="text-white">Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label className="text-white">Your message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
