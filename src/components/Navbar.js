import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const navigate = useNavigate();
  const linkStyle = { textDecoration: 'none', color: 'inherit' };

  return (
    <nav className="navbar">
      <div className="logo" style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>
        <img src={logo} alt="Nomad Nest Logo" />
      </div>

      <ul className="nav-links">
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/attractions" style={linkStyle}>Attractions</Link></li>
        <li><Link to="/hotels" style={linkStyle}>Hotels</Link></li>
        <li><Link to="/map" style={linkStyle}>Map</Link></li>
        <li><Link to="/blogs" style={linkStyle}>Blogs</Link></li>
        <li><Link to="/login" style={linkStyle}>Login</Link></li>
      </ul>

      <button className="register-btn" onClick={() => navigate('/register')}>Register</button>
    </nav>
  );
}

export default Navbar;
