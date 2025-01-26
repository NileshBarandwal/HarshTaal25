import React from 'react';
import './SponsorItem.css';

const SponsorItem = ({ name, description }) => (
  <div className="sponsor-item">
    <img src="https://via.placeholder.com/120" alt="Sponsor Logo" />
    <div className="sponsor-info">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  </div>
);

export default SponsorItem;