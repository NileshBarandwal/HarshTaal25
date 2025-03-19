import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const Navbar = ({ heroHeight }) => {
  const [headerBg, setHeaderBg] = useState(false);
  const navigate = useNavigate();

  const handleMainNav = () => {
    navigate("/");
  };

  useEffect(() => {
    const handleScroll = () => {
      setHeaderBg(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [heroHeight]);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        headerBg ? "bg-dark navbar-dark" : "bg-transparent"
      }`}
      style={{ transition: "background-color 0.3s ease" }}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand"
          onClick={handleMainNav}
          style={{ cursor: "pointer" }}
        >
          <img
            src="../../../images/iitdh_logo.png"
            alt="Logo 1"
            height="40"
            className="me-2"
          />
          <img src="../../../images/HarSHtAl_Logo.png" alt="Logo 2" height="40" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#events">Events</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#sponsors">Sponsors</a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link" href="/team">Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;