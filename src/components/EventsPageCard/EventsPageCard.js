import './EventsPageCard.css';

const EventsPageCard = ({ title, description, image, index }) => {
  return (
    <div className={`event-card ${index % 2 === 0 ? 'left' : 'right'}`}>
      <div className="event-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <button
        style={{
          marginTop: "10px",
          padding: "10px 15px",
          backgroundColor: "#ffeb3b",
          color: "#333",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          fontFamily: 'Bangers'
        }}
        onClick={() => alert(`Registering for ${title}`)}  // Trigger an action, e.g., alert for now
      >
        Register Now
      </button>
      </div>
      <div className="event-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default EventsPageCard;