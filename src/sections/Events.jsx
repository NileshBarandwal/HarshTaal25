import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import EventCard from '../components/EventCard/EventCard';
import '../styles/Events.css';

const Events = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  // Fetch data from API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/events'); // Fetch data from the API
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        // Get unique categories by categoryType
        const uniqueCategories = data.map((category) => ({
          id: category._id,
          categoryType: category.categoryType, // category name
        }));

        setCategories(uniqueCategories);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  // Navigate to the events page
  const handleCategoryClick = (categoryType) => {
    navigate(`/events?category=${categoryType}`); // Redirect to the specific category events page
  };

  return (
    <section id="events" className="events">
      <h2>Categories</h2>
      <div className="event-cards">
        {categories.map((category) => (
          <EventCard
            key={category.id}
            title={category.categoryType} // Category title
            description={`Explore events in the ${category.categoryType} category.`} // A description for the category
          >
            <button 
              onClick={() => handleCategoryClick(category.categoryType)}
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
