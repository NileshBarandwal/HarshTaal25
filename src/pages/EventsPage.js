import EventsPageCard from "../components/EventsPageCard/EventsPageCard";
import { useState } from "react";
import Header from '../components/Header/Header';
import Contact from "../sections/Contact";
import Sidebar from '../components/Sidebar/Sidebar';

const eventsInfo = [
  {
    image: "https://placehold.co/200", // Replace with your image URL
    title: "Event Name 1",
    description:
      "Sight map half-moon-glasses now with fenrir patronus. Of memory green banquet full-moon pie. Dog robes troll rock-cake beans lupin keeper crush."
  },
  {
    image: "https://placehold.co/200", // Replace with your image URL
    title: "Event Name 2",
    description:
      "Dog robes troll rock-cake beans lupin keeper crush. Of memory green banquet full-moon pie. Sight map half-moon-glasses now with fenrir patronus."
  },
  {
    image: "https://placehold.co/200", // Replace with your image URL
    title: "Event Name 1",
    description:
      "Sight map half-moon-glasses now with fenrir patronus. Of memory green banquet full-moon pie. Dog robes troll rock-cake beans lupin keeper crush."
  },
  {
    image: "https://placehold.co/200", // Replace with your image URL
    title: "Event Name 2",
    description:
      "Dog robes troll rock-cake beans lupin keeper crush. Of memory green banquet full-moon pie. Sight map half-moon-glasses now with fenrir patronus."
  }
  // Add more event objects here
];

const EventsPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div>
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(false)} />
      <div style={{ padding: "20px",  color: "#fff" }}>
        <div className="events-container">
          {eventsInfo.map((event, index) => (
            <EventsPageCard
              key={index}
              image={event.image}
              title={event.title}
              description={event.description}
              index={index} // Passing the index to control left/right placement
            />
          ))}
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default EventsPage;