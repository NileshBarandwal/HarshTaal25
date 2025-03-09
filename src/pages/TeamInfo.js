import React, { useEffect, useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import '../styles/TeamInfo.css';
import Contact from '../sections/Contact.jsx';


const TeamSection = () => {
  const [teams, setTeams] = useState({});

  useEffect(() => {
    fetch("/output.json") // Ensure the JSON file is in the public folder
      .then((response) => response.json())
      .then((data) => setTeams(data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  return (
    <div>
      {Object.keys(teams).map((team) => (
        <div className="team-section" key={team}>
          <h2>{`${team}`}</h2>
          <div className="team-grid">
            {teams[team].map((member, index) => (
              <div className="team-card" key={index}>
                <img src={member.image} alt={member.name} />
                {/* {console.log(member.image)} */}
                <div className="card-body">
                  <h3 className="card-title">{member.name}</h3>
                </div>
                <div className="hover-overlay">
                  <h3 className="card-title">{member.name}</h3>
                  {member.position !== "NA" && <p className="card-desc">{member.position}</p>}
                  <div className="social-icons">
                    {member.instagram !== "NA" && (
                      <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                      </a>
                    )}
                    {member.linkedin !== "NA" && (
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      <Contact />
    </div>
  );
};

export default TeamSection;