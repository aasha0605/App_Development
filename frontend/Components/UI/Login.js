// src/Components/UI/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../Contexts/AuthContext'; // Import useAuth
import '../../Assets/CSS/Sky.css';
import '../../Assets/CSS/Login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); // Destructure login from useAuth

  const handleSubmit = (e) => {
    e.preventDefault();

    if (typeof onLogin === 'function') {
      onLogin(email, password);
    } else {
      console.error('onLogin is not a function');
    }

    login(); // Log the user in after successful login
    navigate('/home'); // Redirect to home page
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;
