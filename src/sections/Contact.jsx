import React from "react";
import "../styles/Contact.css";
import "remixicon/fonts/remixicon.css";

const Contact = () => (
  <section id="contact" className="contact">
    <div class="container">
      <h2>Contact Us</h2>
      <div className="social-links">
        <a href="mailto:contact@harshtal.com">
          <i className="ri-mail-line logos"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="ri-instagram-line logos"></i>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="ri-facebook-circle-line logos"></i>
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
