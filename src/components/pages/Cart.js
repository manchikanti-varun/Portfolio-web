import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ cartItems, removeFromCart }) => {
  const [resumeSubmitted, setResumeSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    careerObjectives: '',
    educationQualifications: '',
    technicalProfile: '',
    projects: '',
    achievements: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setResumeSubmitted(true);
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container">
      <h2>Cart</h2>
      <div className="row">
        <div className="col-md-6">
          <h4>Items in Cart</h4>
          {cartItems.length === 0 ? (
            <p>No items in cart</p>
          ) : (
            <ul className="list-group mb-3">
              {cartItems.map((item) => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                  {item.name}
                  <span>₹{item.price}</span>
                  <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.id)}>Remove</button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="col-md-6">
          {cartItems.length > 0 && (
            <div>
              <h4>Resume Information</h4>
              {resumeSubmitted ? (
                <div>
                  <p>Thank You! Your resume information has been submitted successfully.</p>
                  <h5>Total Amount: ₹{totalAmount}</h5>
                  <button className="btn btn-success">Pay</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="resume-form">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="linkedin" className="form-label">LinkedIn</label>
                    <input
                      type="url"
                      className="form-control"
                      id="linkedin"
                      name="linkedin"
                      placeholder="Enter your LinkedIn profile URL"
                      value={formData.linkedin}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="github" className="form-label">GitHub</label>
                    <input
                      type="url"
                      className="form-control"
                      id="github"
                      name="github"
                      placeholder="Enter your GitHub profile URL"
                      value={formData.github}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="careerObjectives" className="form-label">Career Objectives</label>
                    <textarea
                      className="form-control"
                      id="careerObjectives"
                      name="careerObjectives"
                      placeholder="Enter your career objectives"
                      value={formData.careerObjectives}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="educationQualifications" className="form-label">Education Qualifications</label>
                    <textarea
                      className="form-control"
                      id="educationQualifications"
                      name="educationQualifications"
                      placeholder="Enter your education qualifications"
                      value={formData.educationQualifications}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="technicalProfile" className="form-label">Technical Profile</label>
                    <textarea
                      className="form-control"
                      id="technicalProfile"
                      name="technicalProfile"
                      placeholder="Enter your technical profile"
                      value={formData.technicalProfile}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="projects" className="form-label">Projects</label>
                    <textarea
                      className="form-control"
                      id="projects"
                      name="projects"
                      placeholder="Enter your projects"
                      value={formData.projects}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="achievements" className="form-label">Achievements</label>
                    <textarea
                      className="form-control"
                      id="achievements"
                      name="achievements"
                      placeholder="Enter your achievements"
                      value={formData.achievements}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
