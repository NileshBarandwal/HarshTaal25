import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EventCard from '../components/EventCard/EventCard';
import '../styles/Events.css';
import categoriesData from '../events.json';

const Events = () => {
  const navigate = useNavigate();
  const [categories,setCategories] = useState([]);

  useEffect(() => {
    setCategories(categoriesData.categories); // Set categories from JSON
  }, []);

  const handleCategoryNavClick = (categoryType) => {
    navigate(`/`); // Redirect to the specific category events page
    console.log(categoryType);
    console.log('hi');
  };

  return (
    <section id="events" className="events">
      <h2>EVENTS</h2>
      <div className="event-cards">
        {categories.map((category, index) => (
          <EventCard
            key={index}
            title={category.categoryName} // Display category name
            // description={`Explore events in the ${category.categoryName} category.`} // Category description
          >
            <button 
              className="white-btn"
            >
              Know More
            </button>
          </EventCard>
        ))}
      </div>
    </section>
  );
};

export default Events;
