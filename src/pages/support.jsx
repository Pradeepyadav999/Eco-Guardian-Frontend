import React, { useState } from 'react';
import { FaHeadset, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaClock } from 'react-icons/fa';
import { MdOutlineForum, MdOutlineContactSupport } from 'react-icons/md';
import './Support.css';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Support request submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Hide success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="support-page">
      <div className="support-header">
        <h1><MdOutlineContactSupport /> Support Center</h1>
        <p>We're here to help you with any questions or issues you may have.</p>
      </div>

      <div className="support-container">
        <div className="contact-methods">
          <div className="contact-card">
            <div className="contact-icon">
              <FaHeadset />
            </div>
            <h3>Live Chat</h3>
            <p>Chat with our support team in real-time</p>
            <button className="support-button">Start Chat</button>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <FaPhone />
            </div>
            <h3>Phone Support</h3>
            <p>+1 (800) 123-4567</p>
            <p><FaClock /> Mon-Fri, 9am-5pm EST</p>
            <button className="support-button">Call Now</button>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <FaEnvelope />
            </div>
            <h3>Email Us</h3>
            <p>support@ecoguardian.com</p>
            <p>Typically responds within 24 hours</p>
            <button className="support-button">Send Email</button>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <MdOutlineForum />
            </div>
            <h3>Community Forum</h3>
            <p>Get help from other users</p>
            <button className="support-button">Visit Forum</button>
          </div>
        </div>

        <div className="support-form-container">
          <h2><FaPaperPlane /> Contact Support</h2>
          <p>Fill out the form below and our team will get back to you as soon as possible.</p>
          
          {submitSuccess && (
            <div className="success-message">
              Your support request has been submitted successfully!
            </div>
          )}

          <form onSubmit={handleSubmit} className="support-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              />
            </div>

            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        <div className="office-location">
          <h2><FaMapMarkerAlt /> Our Office</h2>
          <div className="map-container">
            {/* In a real app, you would embed a Google Map or similar here */}
            <div className="map-placeholder">
              <p>Map would be displayed here</p>
            </div>
          </div>
          <div className="address">
            <p><strong>EcoGuardian Support Center</strong></p>
            <p>123 Green Street</p>
            <p>Eco City, EC 12345</p>
            <p>United States</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;