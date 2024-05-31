import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = ({ cartItemCount }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Logo</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Overview</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/templates">Templates</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">Cart ({cartItemCount})</Link>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/signin">Sign In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Log In</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
