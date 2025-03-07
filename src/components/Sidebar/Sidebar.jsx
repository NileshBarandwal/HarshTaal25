import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <div id="sidebar" className={`sidebar ${isOpen ? 'open' : ''}`}>
    <button className="close-btn" onClick={toggleSidebar}>&times;</button>
    <a href="#about" onClick={toggleSidebar}>About</a>
    <a href="#events" onClick={toggleSidebar}>Events</a>
    <a href="#sponsors" onClick={toggleSidebar}>Sponsors</a>
    <a href="#team" onClick={toggleSidebar}>Team</a>
    <a href="#contact" onClick={toggleSidebar}>Contact</a>
  </div>
);

export default Sidebar;