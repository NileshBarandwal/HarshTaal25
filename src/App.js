import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './sections/About';
import Events from './sections/Events';
import Sponsors from './sections/Sponsors';
import Team from './sections/Team';
import Contact from './sections/Contact';
import Sidebar from './components/Sidebar/Sidebar';
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