// Home.js
import React from 'react';
import { Container, Row, Col, Button, Card, Nav } from 'react-bootstrap';

import './Home.css';

const Home = () => {
  return (
    <Container fluid className="home-container">
      <Row className="home-hero-section">
        <Col>
          <h1 className="home-hero-heading">Create Your Stunning Portfolio in Minutes</h1>
          <p className="home-hero-text">Choose from beautiful templates and personalize your professional portfolio effortlessly.</p>
          <Button variant="primary" className="mr-2">Get Started Now</Button>
          <Button variant="secondary">See Templates</Button>
        </Col>
      </Row>
      {/* Other sections */}
    </Container>
  );
};

export default Home;
