import React, { useEffect, useState } from "react";
import EventsPageCard from "../components/EventsPageCard/EventsPageCard.js";
import Header from "../components/Header/Header.jsx";
import Contact from "../sections/Contact.jsx";
import Sidebar from "../components/Sidebar/Sidebar.jsx";
import axios from "axios";  // Import axios to make the API call

const EventsPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [categories, setCategories] = useState([]); // State to store the categories and events
  const [loading, setLoading] = useState(true);  // State to manage loading state

  // Fetch data from the server
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/events"); // Adjust API endpoint accordingly
        setCategories(response.data);  // Set the fetched data to the categories state
        setLoading(false);  // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching events:", error);
        setLoading(false);  // Set loading to false even if there’s an error
      }
    };

    fetchEvents();
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
          <div key={categoryIndex} className="category-section">
            <h2 style={{ color: "#ffeb3b", fontSize:"50px" }}>{category.categoryType}</h2> {/* Category heading */}

            <div className="events-container">
              {/* Iterate over events in each category */}
              {category.events.map((event, eventIndex) => (
              <EventsPageCard
                key={event._id} // Using event's unique ID
                image={event.image}
                title={event.name}
                description={event.description}
                index={eventIndex} // Passing the index to control left/right placement if necessary
                category={category.categoryType} // Pass category type
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
