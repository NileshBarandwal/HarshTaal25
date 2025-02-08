import { useState, useEffect, useRef } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './sections/About';
import Events from './sections/Events';
import Sponsors from './sections/Sponsors';
import Team from './sections/Team';
import Contact from './sections/Contact';
import Sidebar from './components/Sidebar/Sidebar';
import Form from './sections/Form.jsx'
import './styles/globals.css';
import './App.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Header background color handler
  const [heroHeight, setHeroHeight] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    // Set the hero section height on load
    if (heroRef.current) {
      setHeroHeight(heroRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (heroRef.current) {
        setHeroHeight(heroRef.current.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);





  // Smooth scroll handler
  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      const target = document.querySelector(e.target.hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", handleScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.removeEventListener("click", handleScroll);
      });
    };
  }, []);


  return (
    <div className="App">
      <Header heroHeight = {heroHeight} toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setIsSidebarOpen(false)} />
      <Hero heroRef = {heroRef} />
      <About />
      <Events />
      <Sponsors />
      <Team />
      <Contact />
      <Form />
    </div>
  );
}

export default App;
