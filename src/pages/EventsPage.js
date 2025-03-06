import React, { useEffect, useState } from "react";
import EventsPageCard from "../components/EventsPageCard/EventsPageCard.js";
import Header from "../components/Header/Header.jsx";
import Contact from "../sections/Contact.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import categoriesData from '../events.json';

const EventsPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [categories, setCategories] = useState([]); // State to store the categories and events
  const [loading, setLoading] = useState(true);  // State to manage loading state

  // Fetch data from the server
  useEffect(() => {
    setCategories(categoriesData.categories); // Set categories from JSON
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;  // Show loading indicator while data is being fetched
  }

  return (
    <div>
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(false)} />
      <div style={{ padding: "20px", color: "#fff" }}>
        {/* Iterate over categories */}
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="category-section" id={category.categoryName}>
            <h2 style={{ 
                color: "#ffeb3b", 
                fontSize: "3.2rem", 
                // Adjust margin if needed
                borderBottom: "5px solid #AA0909",  // Creates an underline effect
                display: "inline-block",  // Ensures underline only covers the text width
            }}>
              {category.categoryName}
            </h2>
            <div className="events-container">
                {/* Iterate over events in each category */}
                {category.events.map((event, eventIndex) => (
                <EventsPageCard
                  key={event._id} // Using event's unique ID
                  image={event.image}
                  title={event.eventName}
                  description={event.description}
                  index={eventIndex} // Passing the index to control left/right placement if necessary
                  category={category.categoryType} // Pass category type
                  time={event.time}
                  date={event.date}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <Contact />
    </div>
  );
};

export default EventsPage;
