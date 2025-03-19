import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Header.css";

const Header = ({ toggleSidebar, heroHeight }) => {
  const [headerBg, setHeaderBg] = useState(false);

  const navigate = useNavigate();

  const handleMainNav = () => {
    navigate('/');
  }

  // console.log(headerBg);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > heroHeight) {
        setHeaderBg(true); // Set background color when scrolling past hero section
      } else {
        setHeaderBg(false); // Remove background color when above hero section
      }
    };

    

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [heroHeight]);

  return (
    <header style={{
      backgroundColor: headerBg ? "rgba(0, 0, 0, 0.8)" : "transparent",
      transition: "background-color 0.3s ease",
    }}>
      <div
        className="logo-container"
        onClick={handleMainNav}
      >
        <img
          className="logo"
          src="../../../images/iitdh_logo.png"
          alt="Logo 1"
        />
        <img
          className="logo2"
          src="/images/Harshtal_logo_noblack.png"
          alt="Logo 2"
        />
      </div>
      {/* <h1>HarShtAl</h1> */}
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#events">Events</a>
          </li>
          {/* <li>
            <a href="#sponsors">Sponsors</a>
          </li> */}
          <li>
            <a href="/timeline">Schedule</a>
          </li>
          <li>
            <a href="/team">Team</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <span className="menu-icon" onClick={toggleSidebar}>
          &#9776;
        </span>
      </nav>
    </header>
  );
};

export default Header;
