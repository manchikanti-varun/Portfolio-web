// About.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

import './About.css';

const About = () => {
  return (
    <Container className="about-container">
      <h1 className="about-heading">About Us</h1>
      <Row>
        <Col md={12}>
          <Card className="about-card">
            <Card.Body>
              <Card.Title className="about-card-title">Our Mission</Card.Title>
              <Card.Text className="about-card-text">
                Our mission is to help professionals create stunning portfolios quickly and easily.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="my-4">
        <Col md={6}>
          <Card className="about-card">
            <Card.Body>
              <Card.Title className="about-card-title">Our History</Card.Title>
              <Card.Text className="about-card-text">
                Founded in 2023, our company has helped thousands of professionals present their work beautifully.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="about-card">
            <Card.Body>
              <Card.Title className="about-card-title">Our Team</Card.Title>
              <Card.Text className="about-card-text">
                Our team is composed of experienced designers and developers dedicated to providing the best service.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
