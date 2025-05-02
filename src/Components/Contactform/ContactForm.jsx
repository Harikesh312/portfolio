import React from "react";
import "./contactForm.css"; 

const Contact = () => {

  return (
    <section id="contact" className="about-section">
    <div className="contact-container">
        <h2
  className="lettalk"
  style={{
    background: "linear-gradient(to right,rgb(236, 16, 210),rgb(255, 234, 1))",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "2rem", 
    fontWeight: "bold" 
  }}
>
  Let's Connect
</h2>
      <form className="contact-form">
        <input  type="text" name="name" placeholder="Your Name" required />
        <input  type="email" name="email" placeholder="Your Email" required />
        <textarea  name="message" placeholder="Your Message" required />
        <button type="submit" className="button">Send</button>
      </form>
    </div>
    </section>
  );
};

export default Contact;
