// src/Pages/LandingPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../Assets/CSS/LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to the Sustainable Fashion Platform</h1>
      <div className="landing-options">
        <Link to="/login" className="landing-link">Login</Link>
        <Link to="/register" className="landing-link">Register</Link>
        <Link to="/admin" className="landing-link">Admin</Link>
      </div>
    </div>
  );
};

export default LandingPage;
