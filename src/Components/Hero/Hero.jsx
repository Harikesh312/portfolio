import "./Hero.css";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Hero() {
  return (
    <div id="home" className="hero">
      <img src="images/character-img.jpg" alt="" />
      <h1>
        <span>I'm Harikesh Kumar,</span>a Passionate Frontend Developer.{" "}
      </h1>
      <p>
        I’m a frontend developer from India with 4 months of experience building
        user-friendly websites.
      </p>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect With Me
          </AnchorLink>
        </div>

        <div className="hero-button hero-resume">
          <a
            href="https://drive.google.com/file/d/10I2rEnm5O25WtewB7HHZQMCoSr5dJoEH/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
