import React from 'react';
import './HomePage.css';
import image from '../Assets/Images/image3.jpg';

const HomePage = () => (
  <div className="homepage">
    <div className="homepage-left">
      <img src={image} alt="Fashion" className="homepage-image" />
    </div>
    <div className="homepage-right">
      <div className="homepage-content">
        <h1>'WEAR IT' CLOTHING</h1>
        <p>Your go-to platform for sustainable fashion.</p>
        <p className="slogan">"Style with Purpose, Fashion with Integrity"</p>
      </div>
    </div>
  </div>
);

export default HomePage;
