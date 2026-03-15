import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <div className="contact-badge">Contact Us</div>

      <div className="contact-info">
        <p>
          <strong>Contact No:</strong> +91 98765 43210
        </p>
        <p>
          <strong>Email:</strong> support@nomadnest.com
        </p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Name" required />

        <input type="email" placeholder="Email" required />

        <input type="tel" placeholder="Phone" required />

        <textarea placeholder="Message" rows="5"></textarea>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
