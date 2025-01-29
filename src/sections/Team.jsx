import React from "react";
import "../styles/Team.css";
import { useNavigate } from "react-router-dom";

const Team = () => {
  const navigate = useNavigate();

  const handleTeamNavg = () => {
    navigate("/team");
  };

  return (
    <section id="team" className="team">
      <h2>Meet the Team</h2>
      <div className="meet-team-text">
        Cultural Committee Welcome to the Cultural Committee of IIT Dharwad, where creativity meets passion! Our team is
        dedicated to organizing vibrant events, from dance and music performances to theater and festivals, fostering
        unity through culture. We provide a platform for students to showcase their talents and celebrate artistic
        expression. With energy, innovation, and enthusiasm, we bring the campus to life, ensuring every event is an
        unforgettable experience. Join us in keeping the cultural spirit alive! Culture Unites, Art Inspires!
      </div>
      <button className="yellow-btn" onClick={handleTeamNavg}>
        Our Team
      </button>
    </section>
  );
};

export default Team;
