import React from 'react';
import EventCard from '../components/EventCard/EventCard';
import '../styles/Events.css';

const Events = () => {
  const events = [
    { id: 1, title: 'Event 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 2, title: 'Event 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { id: 3, title: 'Event 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  ];

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
    </section>
  );
};

export default Events;