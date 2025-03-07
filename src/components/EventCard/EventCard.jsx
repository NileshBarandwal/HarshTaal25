import React from "react";
import "./EventCard.css";
import { useNavigate } from 'react-router-dom';

const EventCard = ({ title, description }) => {

  const navigate = useNavigate();

  const handleEventsNavg = () => {
    navigate(`/events#${title}`);

    setTimeout(() => {
      const element = document.getElementById(title);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100); 
  };

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={handleEventsNavg} className="white-btn">
        Know More
      </button>
    </div>
  );
};

export default EventCard;
