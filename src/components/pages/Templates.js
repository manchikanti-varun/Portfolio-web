// Templates.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Card, Button } from 'react-bootstrap';
import { templatesData } from '../data';

import './Templates.css';

const Templates = ({ cartItems, addToCart, removeFromCart }) => {
  const [sortBy, setSortBy] = useState('');
  const [filteredTemplates, setFilteredTemplates] = useState([...templatesData]);

  const handleSortChange = (e) => {
    const sortOption = e.target.value;
    setSortBy(sortOption);
    filterTemplates(sortOption);
  };

  const filterTemplates = (sortOption) => {
    let sortedTemplates = [...templatesData];
    switch (sortOption) {
      case 'priceAsc':
        sortedTemplates.sort((a, b) => a.price - b.price);
        break;
      case 'priceDesc':
        sortedTemplates.sort((a, b) => b.price - a.price);
        break;
      case 'ratingAsc':
        sortedTemplates.sort((a, b) => a.rating - b.rating);
        break;
      case 'ratingDesc':
        sortedTemplates.sort((a, b) => b.rating - a.rating);
        break;
      default:
        sortedTemplates = [...templatesData];
    }
    setFilteredTemplates(sortedTemplates);
  };

  const handleClearFilter = () => {
    setSortBy('');
    setFilteredTemplates([...templatesData]);
  };

  const isInCart = (templateId) => {
    return cartItems.some(item => item.id === templateId);
  };

  return (
    <Container className="templates-container">
      <Row>
        <Col md={3}>
          <h4>Filters</h4>
          <Form>
            <Form.Group controlId="sortBy">
              <Form.Label>Sort By</Form.Label>
              <Form.Control as="select" value={sortBy} onChange={handleSortChange}>
                <option value="">Select</option>
                <option value="priceAsc">Price (Ascending)</option>
                <option value="priceDesc">Price (Descending)</option>
                <option value="ratingAsc">Rating (Ascending)</option>
                <option value="ratingDesc">Rating (Descending)</option>
              </Form.Control>
            </Form.Group>
            <Button variant="secondary" onClick={handleClearFilter}>Clear Filter</Button>
          </Form>
        </Col>
        <Col md={9}>
          <Row>
            {filteredTemplates.map(template => (
              <Col key={template.id} md={4}>
                <Card className="template-card">
                  <Card.Body>
                    <Card.Title>{template.name}</Card.Title>
                    <Card.Text>Price: ${template.price}</Card.Text>
                    <Card.Text>Rating: {template.rating}</Card.Text>
                    {isInCart(template.id) ? (
                      <Button variant="danger" onClick={() => removeFromCart(template.id)}>Remove from Cart</Button>
                    ) : (
                      <Button variant="primary" onClick={() => addToCart(template)}>Add to Cart</Button>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Templates;
