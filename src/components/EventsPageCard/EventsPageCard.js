import "./EventsPageCard.css";
import { useNavigate } from "react-router-dom";

const EventsPageCard = ({ title, description, image, index, category,time,date }) => {
  const navigate = useNavigate();

  const handleRegButton = () => {
    // Pass eventCategoryType and eventName to the registration page
    navigate("/registration", {
      state: {
        eventCategoryType: category,
        eventName: title,
      },
    });
  };

  return (
    <div className={`event-card ${index % 2 === 0 ? "left" : "right"}`}>
      <div className="event-info">
        <h3>{title}</h3>
        <p>{description}</p>
        <h4>{time} - {date}</h4>
        <button
          style={{
            marginTop: "10px",
            padding: "10px 15px",
            backgroundColor: "#fff",
            color: "#333",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontFamily: "Bangers",
          }}
          onClick={handleRegButton}
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