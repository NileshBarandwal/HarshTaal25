import React from 'react';
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import '../styles/TeamInfo.css';

const TeamInfo = () => {
  const teams = {
    web: [
      { name: "John Doe", instagram: "https://instagram.com/johndoe", linkedin: "https://linkedin.com/in/johndoe", image: "https://placehold.co/400" },
      { name: "Jane Doe", instagram: "https://instagram.com/janedoe", linkedin: "https://linkedin.com/in/janedoe", image: "https://placehold.co/400" },
      { name: "John Doe", instagram: "https://instagram.com/johndoe", linkedin: "https://linkedin.com/in/johndoe", image: "https://placehold.co/400" },
      { name: "John Doe", instagram: "https://instagram.com/johndoe", linkedin: "https://linkedin.com/in/johndoe", image: "https://placehold.co/400" },
      { name: "John Doe", instagram: "https://instagram.com/johndoe", linkedin: "https://linkedin.com/in/johndoe", image: "https://placehold.co/400" },
    ],
    design: [
      { name: "Mark Smith", instagram: "https://instagram.com/marksmith", linkedin: "https://linkedin.com/in/marksmith", image: "https://placehold.co/400" },
      { name: "John Doe", instagram: "https://instagram.com/johndoe", linkedin: "https://linkedin.com/in/johndoe", image: "https://placehold.co/400" },
      { name: "John Doe", instagram: "https://instagram.com/johndoe", linkedin: "https://linkedin.com/in/johndoe", image: "https://placehold.co/400" },
      { name: "John Doe", instagram: "https://instagram.com/johndoe", linkedin: "https://linkedin.com/in/johndoe", image: "https://placehold.co/400" },
      { name: "John Doe", instagram: "https://instagram.com/johndoe", linkedin: "https://linkedin.com/in/johndoe", image: "https://placehold.co/400" },
    ],
    marketing: [
      { name: "Emily Davis", instagram: "https://instagram.com/emilydavis", linkedin: "https://linkedin.com/in/emilydavis", image: "https://placehold.co/400" },
      { name: "John Doe", instagram: "https://instagram.com/johndoe", linkedin: "https://linkedin.com/in/johndoe", image: "https://placehold.co/400" },
      { name: "John Doe", instagram: "https://instagram.com/johndoe", linkedin: "https://linkedin.com/in/johndoe", image: "https://placehold.co/400" },
      { name: "John Doe", instagram: "https://instagram.com/johndoe", linkedin: "https://linkedin.com/in/johndoe", image: "https://placehold.co/400" },
      { name: "John Doe", instagram: "https://instagram.com/johndoe", linkedin: "https://linkedin.com/in/johndoe", image: "https://placehold.co/400" },
      { name: "John Doe", instagram: "https://instagram.com/johndoe", linkedin: "https://linkedin.com/in/johndoe", image: "https://placehold.co/400" },
      { name: "John Doe", instagram: "https://instagram.com/johndoe", linkedin: "https://linkedin.com/in/johndoe", image: "https://placehold.co/400" },
      { name: "John Doe", instagram: "https://instagram.com/johndoe", linkedin: "https://linkedin.com/in/johndoe", image: "https://placehold.co/400" },
    ],
    single: [
      { name: "Solo Member", instagram: "https://instagram.com/solomember", linkedin: "https://linkedin.com/in/solomember", image: "https://placehold.co/400" },
    ],
  };

  return (
    <div>
      {Object.keys(teams).map((team) => (
        <div className="team-section" key={team}>
          <h2>{`${team.charAt(0).toUpperCase() + team.slice(1)} Team`}</h2>
          <div className="team-grid">
            {teams[team].map((member, index) => (
              <div className="team-card" key={index}>
                <img src={member.image} alt={member.name} />
                <div className="card-body">
                  <h3 className="card-title">{member.name}</h3>
                </div>
                <div className="hover-overlay">
                  <h3 className="card-title">{member.name}</h3>
                  <p className="card-desc">A brief description about {member.name}.</p>
                  <div className="social-icons">
                    <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                      <FaInstagram />
                    </a>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );  
};

export default TeamInfo;