import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="container text-center">
      <h1 className="home-title">Welcome to Portfolio Dev</h1>
      <p className="home-subtitle">Your one-stop solution for professional portfolio templates</p>
      <div className="features">
        <h2>Key Features</h2>
        <ul>
          <li>Choose from a variety of modern and stylish portfolio templates.</li>
          <li>Customize your portfolio effortlessly to reflect your personal brand.</li>
          <li>Simple and intuitive interface for quick portfolio creation.</li>
          <li>Responsive design ensures your portfolio looks great on all devices.</li>
          <li>Share your portfolio easily with built-in social media integration.</li>
        </ul>
      </div>
      <a href="/templates" className="btn btn-primary btn-lg mt-4">Explore Templates</a>
    </div>
  );
};

export default Home;
