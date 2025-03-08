import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./EventsPageCard.css";
import Modal from "react-modal";


Modal.setAppElement("#root"); // Ensures accessibility

const EventsPageCard = ({ title, description, image, index, category, time, date }) => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);



  return (
    <div 
    className={`event-card ${index % 2 === 0 ? "left" : "right"}`} 
    >
      <div className="event-info">
        <h3>{title}</h3>
        {!isMobile && (
        <div className="event-description">
          <p>{description}</p>
        </div>
      )}
        <h4>{time} - {date}</h4>

        {isMobile && (
          <button className="view-details-btn" onClick={() => setModalIsOpen(true)}
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
          >
            View Details
          </button>
        )}

        {/* <button
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
          className="register-now-btn"
        >
          Register Now
        </button> */}
      </div>

      

      {/* <p>{description}</p> */}

      {/* Modal Popup (Only for Mobile Screens) */}
      {isMobile && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          className="custom-modal"
          overlayClassName="custom-overlay"
        >
          <div className="modal-content">
            <h2>{title}</h2>
            <p>{description}</p>
            <button className="close-btn" onClick={() => setModalIsOpen(false)}>
              Close
            </button>
          </div>
        </Modal>
        )}
    </div>
  );
};

export default EventsPageCard;