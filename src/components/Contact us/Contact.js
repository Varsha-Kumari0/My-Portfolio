import React, { useState } from "react";
import "./Contact.css";
import "../Hero/Hero.css";
import "../Skills/Skills.css";

const Contact = () => {
  const initialFormData = {
    email: "",
    name: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here, e.g., send data to a server or display a success message
    console.log("Form submitted:", formData);
    setFormData({ ...initialFormData });
  };

  return (
    <>
      <div className="container" id="contact">
        <div className="inner-container2">
          <div className="head">
            <h1 className="heading">Contact</h1>
          </div>
          <div className="contact-form">
            <h2>Email me</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                textarea="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <label htmlFor="subject">Subject:</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />

              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="8"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

              <button className="sendButton" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
