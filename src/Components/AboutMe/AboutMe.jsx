import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  const skills = [
    { name: "HTML & CSS", levelText: "Advanced" },
    { name: "JavaScript", levelText: "Intermediate" },
    { name: "React JS & Redux", levelText: "Intermediate" },
    { name: "Tailwind CSS", levelText: "Intermediate" },
    { name: "Java & C", levelText: "Beginner" },
    { name: "SQL & DBMS", levelText: "Beginner" },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src="images/character-img.jpg" alt="Profile" />
        </div>
        <div className="about-content">
          <h2 className="about-title">
            About <span>me</span>
          </h2>
          <p>
            I’m a Frontend Developer with a strong focus on building fast,
            responsive, and user-friendly websites. As a B.Tech CSE student I
            combine academic knowledge with hands-on project experience to craft
            clean, modern interfaces.
          </p>
          <p>
            My passion for frontend development shows in the creativity and
            attention to detail I bring to every project I build.
          </p>
          <div className="skills-grid">
            {skills.map((skill, idx) => (
              <div className="skill-card" key={idx}>
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.levelText}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-stats">
        <div>
          <h3>
            <span className="gradient-text">4+</span>
          </h3>
          <p>MONTHS OF PRACTICE</p>
        </div>
        <hr />
        <div>
          <h3>
            <span className="gradient-text">6+</span>
          </h3>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div>
          <h3>
            <span className="gradient-text">3+</span>
          </h3>
          <p>HACKATHONS PARTICIPATED</p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
