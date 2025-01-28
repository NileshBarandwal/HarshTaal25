import './EventsPageCard.css';

const EventsPageCard = ({ title, description, image, index }) => {
  return (
    <div className={`event-card ${index % 2 === 0 ? 'left' : 'right'}`}>
      <div className="event-info">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="event-image">
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default EventsPageCard;