import EventCard from '../components/EventCard/EventCard';
import '../styles/Events.css';
import { useNavigate } from 'react-router-dom';

const Events = () => {
  const events = [
    { id: 1, title: 'Event 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Event 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 3, title: 'Event 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

  const navigate = useNavigate();

  const handleEventsNavg = () => {
    navigate('/events');
  };  

  return (
    <section id="events" className="events">
      <h2>Upcoming Events</h2>
      <div className="event-cards">
        {events.map(event => (
          <EventCard
            key={event.id}
            title={event.title}
            description={event.description}
          />
        ))}
      </div>
      <button onClick={handleEventsNavg} className='white-btn'>Know More</button>
    </section>
  );
};
            
            
export default Events;