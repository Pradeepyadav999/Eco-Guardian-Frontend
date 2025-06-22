import React, { useState } from 'react';
import './TrackComplaint.css';

const mockComplaint = {
  id: 'CMP192574',
  type: 'Garbage Issue',
  status: 'In Progress',
  location: 'Near Sector 7 Park',
  description: 'Garbage not collected for 3 days.',
  submittedAt: '2025-05-05',
  updatedAt: '2025-05-07'
};

const TrackComplaint = () => {
  const [complaintId, setComplaintId] = useState('');
  const [complaint, setComplaint] = useState(null);
  const [error, setError] = useState('');

  const handleTrack = (e) => {
    e.preventDefault();
    if (complaintId === mockComplaint.id) {
      setComplaint(mockComplaint);
      setError('');
    } else {
      setComplaint(null);
      setError('Complaint ID not found. Please check and try again.');
    }
  };

  return (
    <div className="track-container">
      <h2>Track Your Complaint</h2>
      <form onSubmit={handleTrack} className="track-form">
        <input
          type="text"
          placeholder="Enter your Complaint ID"
          value={complaintId}
          onChange={(e) => setComplaintId(e.target.value)}
        />
        <button type="submit">Track</button>
      </form>

      {error && <p className="error">{error}</p>}

      {complaint && (
        <div className="complaint-details">
          <h3>Complaint Details</h3>
          <p><strong>ID:</strong> {complaint.id}</p>
          <p><strong>Type:</strong> {complaint.type}</p>
          <p><strong>Status:</strong> {complaint.status}</p>
          <p><strong>Location:</strong> {complaint.location}</p>
          <p><strong>Description:</strong> {complaint.description}</p>
          <p><strong>Submitted On:</strong> {complaint.submittedAt}</p>
          <p><strong>Last Updated:</strong> {complaint.updatedAt}</p>
        </div>
      )}
    </div>
  );
};

export default TrackComplaint;