// Cart.js
import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

import './Cart.css';

const Cart = ({ cartItems, removeFromCart }) => {
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    linkedin: '',
    github: '',
    careerObjective: '',
    educationQualifications: '',
    technicalProfile: '',
    projects: '',
    achievements: '',
    strengths: '',
    weaknesses: '',
    hobbies: '',
    personalDetails: ''
  });

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    handleCloseModal();
  };

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-heading">Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <p>{item.name} - ${item.price}</p>
              <button className="btn-remove" onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <Button variant="success" onClick={handleShowModal} className="btn-checkout">Checkout</Button>
        </div>
      )}

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Checkout Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {/* Insert your form fields here */}
          </Form>
        </Modal.Body>
      </Modal>

      {formSubmitted && (
        <div className="payment-section">
          <h3>Total Amount to be Paid: ${totalAmount}</h3>
          <Button variant="success" className="btn-proceed">Proceed to Pay</Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
