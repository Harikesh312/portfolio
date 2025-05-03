import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  const skills = [
    { name: "HTML & CSS", level: "70%" },
    { name: "React JS & Redux", level: "60%" },
    { name: "JavaScript", level: "65%" },
    { name: "Tailwind Css", level: "50%" },
    { name: "Java and C", level: "55%" },
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
            responsive, and user-friendly websites. As a B.Tech CSE student, I
            combine academic knowledge with hands-on project experience to craft
            clean, modern interfaces.
          </p>
          <p>
            My passion for frontend development shows in the creativity and
            attention to detail I bring to every project I build.
          </p>
          <div className="skills">
            {skills.map((skill, index) => {
              return (
                <div key={index} className="skill-bar">
                  <label>{skill.name}</label>
                  <div className="progress-bar">
                    <div
                      className="progress"
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="about-stats">
        <div>
          <h3>
            <span className="gradient-text">4+</span>
          </h3>
          <p>MONTHS OF EXPERIENCE</p>
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
