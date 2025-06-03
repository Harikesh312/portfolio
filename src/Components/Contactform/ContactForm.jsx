import React, { useRef } from "react";
import "./contactForm.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "f6604ded-bc3d-4125-8bc6-e9b32b0acda6");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success("Email sent successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      formRef.current.reset();
    }
  };

  return (
    <section id="contact" className="about-section">
      <div className="contact-container">
        <h2
          className="lettalk"
          style={{
            background:
              "linear-gradient(to right,rgb(236, 16, 210),rgb(255, 234, 1))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          Let's Connect
        </h2>
        <form ref={formRef} onSubmit={onSubmit} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit" className="button">
            Send
          </button>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Contact;
