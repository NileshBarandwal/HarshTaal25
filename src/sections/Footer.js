import React from "react";
import "../styles/Footer.css";
import "remixicon/fonts/remixicon.css";

const Footer = () => (
  <footer className="footer">
    <div className="footer-container">
      <div className="footer-content">
        <div className="logos">
          <img src="/images/iitdh_logo.png" alt="Cultural Club" className="club-logo" />
          <img src="/images/HarSHtAl_Logo.png" alt="Harshtaal" className="harshtaal-logo" />
        </div>
        <h3>Indian Institute of Technology Dharwad</h3>
        <div className="social-links">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-instagram-line"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="ri-linkedin-box-line"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;