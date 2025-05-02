import "./Hero.css";
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Hero() {

  return (
    <div id="home" className="hero">
      <img
        src="images/character-img.jpg"
        alt=""
      />
      <h1><span>I'm Harikesh Kumar,</span>Frontend developer based in India.</h1>
      <p>
        I am a frontend developer from India, India with 3 months of
        experience in multiple companies like Microsoft, Tesla and Apple.
      </p>
      
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50}ś href="#contact">Connect With Me</AnchorLink>
        </div>
 
        <div className="hero-button hero-resume">
          <a href="https://drive.google.com/file/d/10I2rEnm5O25WtewB7HHZQMCoSr5dJoEH/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
             My Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
