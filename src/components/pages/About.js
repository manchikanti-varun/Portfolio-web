import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-5 text-custom">About Us</h1>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-custom">
            <div className="card-body">
              <h5 className="card-title card-title-custom">Our Mission</h5>
              <p className="card-text card-text-custom">
                Our mission is to help professionals create stunning portfolios quickly and easily.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-4">
        <div className="col-md-6">
          <div className="card card-custom">
            <div className="card-body">
              <h5 className="card-title card-title-custom">Our History</h5>
              <p className="card-text card-text-custom">
                Founded in 2023, our company has helped thousands of professionals present their work beautifully.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card card-custom">
            <div className="card-body">
              <h5 className="card-title card-title-custom">Our Team</h5>
              <p className="card-text card-text-custom">
                Our team is composed of experienced designers and developers dedicated to providing the best service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
