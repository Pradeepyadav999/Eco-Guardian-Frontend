import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-container">
      <a href="#contact-section" className="contact-button">Contact Us</a>
      
      <div className="contact-card" id="contact-section">
        <h2 className="contact-title">Eco-Guardian</h2>

        <p><strong>Email Id</strong></p>
        <p>support@eco-guardian.com<br />support@eco-guardian.com</p>

        <p><strong>Contact Number (Toll Free)</strong></p>
        <p>+91 98765 43210</p>

        <div className="contact-updated">Last updated on 16/03/2019</div>
      </div>
    </div>
  );
};

export default ContactUs;
