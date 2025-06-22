import React from 'react';
import './Footer.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section about">
          <h3>Eco-Guardian</h3>
          <p>Your Smart Civic Companion for reporting municipal issues and improving city cleanliness.</p>
        </div>

        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p><FaMapMarkerAlt /> Nagar Palika Office, City Center</p>
          <p><FaPhone /> +91 98765 43210</p>
          <p><FaEnvelope /> support@eco-guardian.com</p>
        </div>

        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/report">Report</a></li>
            <li><a href="/track">Track Complaint</a></li>
            <li><a href="/contacts">Contacts</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Eco-Guardian | All rights reserved</p>
      </div>

      <div className="footer-secondary-links">
        <a href="/privacy">Privacy</a> |
        <a href="/disclaimer"> Disclaimer</a> |
        <a href="/contact"> Contact Us</a> |
        <a href="/help"> Help</a> |
        <a href="/accessibility"> Accessibility Statement</a> |
        <a href="/sitemap"> Site Map</a> |
        <a href="/policies"> Website Policies</a> |
        <a href="/faq"> FAQ's General</a> |
        <a href="/census"> MP Census 2011</a> |
        <a href="/satat"> Satat Portal</a> |
        <a href="/sugam"> Sugam Portal</a>
      </div>
    </footer>
  );
};

export default Footer;