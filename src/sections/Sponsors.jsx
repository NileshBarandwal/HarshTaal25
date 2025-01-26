import React, { useEffect, useRef } from 'react';
import '../styles/sponsors.css';

const Sponsors = () => {
  const sponsors = [
    { id: 1, logo: 'https://elfsight.com/wp-content/uploads/2020/07/squarespace@2x.png', alt: 'Sponsor 1' },
    { id: 2, logo: 'https://elfsight.com/wp-content/uploads/2020/07/html@2x.png', alt: 'Sponsor 2' },
    { id: 3, logo: 'https://elfsight.com/wp-content/uploads/2020/05/google-sites@2x.png', alt: 'Sponsor 3' },
    { id: 4, logo: 'https://elfsight.com/wp-content/uploads/2020/07/jquery@2x.png', alt: 'Sponsor 4' },
    { id: 5, logo: 'https://elfsight.com/wp-content/uploads/2020/07/iframe@2x.png', alt: 'Sponsor 5' },
    { id: 6, logo: 'https://elfsight.com/wp-content/uploads/2020/07/facebook@2x.png', alt: 'Sponsor 6' },
  ];

 
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let animationFrame;

    const scrollLogos = () => {
      if (container) {
        container.style.transform = `translateX(-${container.scrollLeft}px)`;
        container.scrollLeft += 1;

        // Reset the scroll position when it reaches the end
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }

      animationFrame = requestAnimationFrame(scrollLogos);
    };

    // Start the animation
    animationFrame = requestAnimationFrame(scrollLogos);

    // Cleanup on unmount
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section id="sponsors" className="sponsors">
      <h2>Our Sponsors</h2>
      <div className="sponsor-container" ref={containerRef}>
        {/* Duplicate the sponsors array to create a seamless loop */}
        {[...sponsors, ...sponsors].map((sponsor, index) => (
          <div key={`${sponsor.id}-${index}`} className="sponsor-item">
            <img src={sponsor.logo} alt={sponsor.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sponsors;