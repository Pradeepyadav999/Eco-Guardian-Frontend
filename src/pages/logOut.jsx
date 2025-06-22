import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaCheckCircle } from 'react-icons/fa';
import './Logout.css';

const Logout = ({ onLogout }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate logout process
    const timer = setTimeout(() => {
      // Call the logout function passed from parent
      if (onLogout) {
        onLogout();
      }
      // Redirect to home after logout
      navigate('/');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate, onLogout]);

  return (
    <div className="logout-page">
      <div className="logout-container">
        <div className="logout-icon">
          <FaSignOutAlt />
        </div>
        <h1>Logging Out...</h1>
        <p>You are being securely signed out of your account</p>
        
        <div className="progress-bar">
          <div className="progress-fill"></div>
        </div>
        
        <div className="success-message">
          <FaCheckCircle /> Successfully logged out
        </div>
      </div>
    </div>
  );
};

export default Logout;