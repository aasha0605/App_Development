// src/Components/UI/Registration.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContext'; // Import useAuth
import '../../Assets/CSS/Sky.css';
import '../../Assets/CSS/Registration.css';

const Registration = ({ onRegister }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [mobile_no, setMobile_no] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // Destructure login from useAuth

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstname || !lastname || !mobile_no || !email || !password) {
      alert('Please fill in all fields');
      return;
    }

    if (typeof onRegister === 'function') {
      onRegister(firstname, lastname, mobile_no, email, password);
    } else {
      console.error('onRegister is not a function');
    }

    login(); // Log the user in after registration
    navigate('/home');
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Firstname"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
        <input
          type="text"
          placeholder="Mobile No"
          value={mobile_no}
          onChange={(e) => setMobile_no(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login here</Link>
      </p>
    </div>
  );
};

export default Registration;
