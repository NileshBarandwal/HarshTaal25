import React from 'react';
import './Header.css';

const Header = ({ toggleSidebar }) => (
  <header>
    <div className="logo-container">
      <img className="logo" src="../../../images/iitdh_logo.png" alt="Logo 1" />
      <img className="logo2" src="../../../images/HarSHtAl_Logo.png" alt="Logo 2" />
    </div>
    {/* <h1>HarShtAl</h1> */}
    <nav>
      <ul>
        <li><a href="/#about">About</a></li>
        <li><a href="/#events">Events</a></li>
        <li><a href="/#sponsors">Sponsors</a></li>
        <li><a href="/#team">Team</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <span className="menu-icon" onClick={toggleSidebar}>&#9776;</span>
    </nav>
  </header>
);

export default Header;