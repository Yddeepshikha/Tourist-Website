import React from 'react';
import { Link } from 'react-router-dom';
import './AuthPages.css';

function Login() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <p>Log in to access your saved trips and bookings.</p>
        
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Email Address" className="auth-input" required />
          <input type="password" placeholder="Password" className="auth-input" required />
          
          <button type="submit" className="auth-btn">Log In</button>
        </form>
        
        <div className="auth-link">
          Don't have an account? <Link to="/register">Register here</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
