import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-col">
          <img src={logo} alt="Nomad Nest Logo" className="footer-logo" />

          <p>
            Your trusted travel companion for discovering attractions, hotels,
            blogs and maps.
          </p>

          <div className="social-links">
            <span>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <i className="ri-youtube-fill"></i>
              </a>
            </span>

            <span>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <i className="ri-facebook-circle-line"></i>
              </a>
            </span>

            <span>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <i className="ri-instagram-line"></i>
              </a>
            </span>

            <span>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <i className="ri-twitter-line"></i>
              </a>
            </span>
          </div>
        </div>

        <div className="footer-col">
          <h3>Company</h3>

          <ul>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/tours">Tours</a>
            </li>
            <li>
              <a href="/faq">FAQ</a>
            </li>
            <li>
              <a href="/terms">Terms & Conditions</a>
            </li>
            <li>
              <a href="/privacy">Privacy Policy</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Contact</h3>

          <ul>
            <li>
              <i className="ri-mail-line"></i> support@nomadnest.com
            </li>

            <li>
              <i className="ri-phone-line"></i> +91 9876543210
            </li>

            <li>
              <i className="ri-map-pin-line"></i> Jalandhar, Punjab, India
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 Nomad Nest. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
