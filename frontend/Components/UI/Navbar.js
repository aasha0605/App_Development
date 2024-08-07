// src/Components/UI/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContext';
import '../../Assets/CSS/Navbar.css';
import logo from '../../Assets/Images/logo.png'; // Import the logo image

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" /> {/* Add logo image */}
        </Link>
      </div>
      <ul className="navbar-nav">
        
        {isAuthenticated ? (
          <>
           <li className="nav-item">
          <Link to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/new-arrivals">New Arrivals</Link>
        </li>
        <li className="nav-item">
          <Link to="/swapping">Dress Swapping</Link>
        </li>
        <li className="nav-item">
              <Link to="/wishlist">Wishlist</Link>
            </li>
            <li className="nav-item">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
              <Link to="/cart">Cart</Link>
            </li>
            <li className="nav-item">
          <Link to="/about-us">About Us</Link>
        </li>
            <li className="nav-item" onClick={handleLogout}>
              <Link to="/">Logout</Link>
            </li>
            
          </>
        ) : (
          <>
             <li className="nav-item">
              <Link to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
        
      </ul>
    </nav>
  );
};

export default Navbar;
