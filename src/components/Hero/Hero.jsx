import { useState, useEffect, useMemo } from 'react';
import './Hero.css';

const Hero = ({heroRef}) => {
  // Wrap targetDate in useMemo to avoid recreation on every render
  const targetDate = useMemo(() => new Date('2025-02-04T00:00:00'), []);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        // If the target date has passed, set all values to 0
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    // Update the timer every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, [targetDate]); // Add targetDate as a dependency

  return (
    <section className="hero" ref={heroRef}>
      <h1>HarShtAl</h1>
      <h2>
        <span>{String(timeLeft.days).padStart(2, '0')}</span> :
        <span>{String(timeLeft.hours).padStart(2, '0')}</span> :
        <span>{String(timeLeft.minutes).padStart(2, '0')}</span> :
        <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
      </h2>
      <button className="hero-button">
        <a href="#events">
          Join Us In
        </a>
      </button>
    </section>
  );
};

export default Hero;