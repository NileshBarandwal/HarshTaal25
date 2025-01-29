import React from 'react';
import '../styles/Team.css';
import { useNavigate } from 'react-router-dom';

const Team = () => {
  const navigate = useNavigate();

  const handleTeamNavg = () => {
    navigate('/team');
  };

  return(
    <section id="team" className="team">
      <h2>Meet the Team</h2>
      <button className="yellow-btn" onClick={handleTeamNavg}>Our Team</button>
    </section>
  )
};

export default Team;