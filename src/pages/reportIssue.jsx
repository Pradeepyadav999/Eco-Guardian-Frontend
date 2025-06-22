import React, { useState } from 'react';
import './ReportIssue.css';

const ReportIssue = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    type: '',
    location: '',
    description: '',
    image: null
  });

  const [submitted, setSubmitted] = useState(false);
  const [complaintId, setComplaintId] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const generateComplaintId = () => {
    const prefix = "CMP";
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    return `${prefix}${randomNum}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = generateComplaintId();
    setComplaintId(id);
    setSubmitted(true);

    // Here you would send formData to your backend server.
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="report-container">
      <h2>Report an Issue</h2>

      {!submitted ? (
        <form onSubmit={handleSubmit} className="report-form">
          <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
          <input type="tel" name="contact" placeholder="Contact Number" required onChange={handleChange} />
          <select name="type" required onChange={handleChange}>
            <option value="">Select Issue Type</option>
            <option value="Garbage">Garbage</option>
            <option value="Pothole">Pothole</option>
            <option value="Pipeline Leakage">Pipeline Leakage</option>
            <option value="Other">Other</option>
          </select>
          <input type="text" name="location" placeholder="Location" required onChange={handleChange} />
          <textarea name="description" placeholder="Describe the issue..." required onChange={handleChange} />
          <input type="file" name="image" accept="image/*" required onChange={handleChange} />
          <button type="submit">Submit Report</button>
        </form>
      ) : (
        <div className="report-success">
          <h3>Thank you for reporting!</h3>
          <p>Your Complaint ID: <strong>{complaintId}</strong></p>
          <p>Please save this ID to track your complaint.</p>
        </div>
      )}
    </div>
  );
};

export default ReportIssue;