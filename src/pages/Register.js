import React from 'react';
import { Link } from 'react-router-dom';
import './AuthPages.css';

function Register() {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Create Account</h2>
        <p>Join NomadNest to start planning your next journey.</p>
        
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Full Name" className="auth-input" required />
          <input type="email" placeholder="Email Address" className="auth-input" required />
          <input type="password" placeholder="Password" className="auth-input" required />
          <input type="password" placeholder="Confirm Password" className="auth-input" required />
          
          <button type="submit" className="auth-btn">Sign Up</button>
        </form>
        
        <div className="auth-link">
          Already have an account? <Link to="/login">Log in here</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;
