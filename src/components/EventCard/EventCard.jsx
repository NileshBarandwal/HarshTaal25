import React from 'react';
import './EventCard.css';

const EventCard = ({ title, description }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{description}</p>
    <button className="card-btn">Register Now</button>
  </div>
);

export default EventCard;