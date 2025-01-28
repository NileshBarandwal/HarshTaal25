import { useState, useEffect } from 'react';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import About from './sections/About.jsx';
import Events from './sections/Events.jsx';
import Sponsors from './sections/Sponsors.jsx';
import Team from './sections/Team.jsx';
import Contact from './sections/Contact.jsx';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import './styles/globals.css';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Smooth scroll handler
  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      const target = document.querySelector(e.target.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleScroll);
      });
    };
  }, []);

  return (
    <div className="App">
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(false)} />
      <Hero />
      <About />
      <Events />
      <Sponsors />
      <Team />
      <Contact />
    </div>
  );
}

export default App;