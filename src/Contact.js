
import React from "react";
import "./App.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="form-info">
      <h2 className="contact-title">Get In Touch</h2>
      <p className="contact-subtitle">
        Have a question or want to work together? Fill out the form below 
      </p>

      <form className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>

        <div className="form-row">
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone" />
        </div>

        <textarea placeholder="Your Message..." rows="5" required></textarea>

        <button type="submit" className="send-btn">Send Message</button>
      </form>
      </div>
      <div className="img-form">
     <div className="img"></div>
      </div>
    </section>
  );
}

export default Contact;
