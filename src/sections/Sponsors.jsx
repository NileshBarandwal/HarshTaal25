import { useEffect, useRef } from 'react';
import SponsorItem from '../components/SponsorItem/SponsorItem';
import '../styles/sponsors.css';

const Sponsors = () => {
  const sponsors = [
    { id: 1, name: 'Sponsor 1', description: 'Supporting innovation and creativity' },
    { id: 2, name: 'Sponsor 2', description: 'Leading the way in technology' },
  ];

  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    let scrollAmount = 0;
    
    const scroll = () => {
      scrollAmount += 1;
      if (scrollAmount >= container.scrollWidth / 2) scrollAmount = 0;
      container.style.transform = `translateX(-${scrollAmount}px)`;
      requestAnimationFrame(scroll);
    };

    const animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section id="sponsors" className="sponsors">
      <h2>Our Sponsors</h2>
      <div className="sponsor-container" ref={containerRef}>
        {[...sponsors, ...sponsors].map((sponsor, i) => (
          <SponsorItem key={`${sponsor.id}-${i}`} {...sponsor} />
        ))}
      </div>
    </section>
  );
};

export default Sponsors;