import React from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

function Login() {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <Row className="w-100">
        <Col xs={12} md={6} lg={4} className="mx-auto">
          <Card className="shadow-sm">
            <Card.Body>
              <h2 className="text-center mb-4">Welcome to S3 Restaurant</h2>
              <p className="text-center text-muted mb-4">Please login to continue</p>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mt-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Button variant="success" type="submit" className="mt-4 w-100">
                  Login
                </Button>
              </Form>
            </Card.Body>
            <Card.Footer className="text-center">
              <small className="text-muted">
                © 2024 : S3 Restaurant. All rights reserved.
              </small>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
