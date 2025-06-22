import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaPhone, FaLock, FaEdit, FaSave, FaArrowLeft } from 'react-icons/fa';
import './UserProfile.css';

const UserProfile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '1234567890',
    password: '',
    confirmPassword: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  // Load user data (in a real app, this would come from your backend)
  useEffect(() => {
    // Simulate loading user data
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.password !== user.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    
    // In a real app, you would update the backend here
    localStorage.setItem('user', JSON.stringify(user));
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  return (
    <div className="profile-page">
      <button className="back-button" onClick={() => navigate(-1)}>
        <FaArrowLeft /> Back
      </button>

      <div className="profile-container">
        <h1><FaUser /> User Profile</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="profile-section">
            <h2>Personal Information</h2>
            
            <div className="form-group">
              <label><FaUser /> Full Name</label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                  required
                />
              ) : (
                <p>{user.name}</p>
              )}
            </div>

            <div className="form-group">
              <label><FaEnvelope /> Email</label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  required
                />
              ) : (
                <p>{user.email}</p>
              )}
            </div>

            <div className="form-group">
              <label><FaPhone /> Contact Number</label>
              {isEditing ? (
                <input
                  type="tel"
                  name="phone"
                  value={user.phone}
                  onChange={handleChange}
                  pattern="[0-9]{10}"
                  required
                />
              ) : (
                <p>{user.phone}</p>
              )}
            </div>
          </div>

          {isEditing && (
            <div className="password-section">
              <h2>Change Password</h2>
              
              <div className="form-group">
                <label><FaLock /> New Password</label>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  minLength="8"
                />
              </div>

              <div className="form-group">
                <label><FaLock /> Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={user.confirmPassword}
                  onChange={handleChange}
                  minLength="8"
                />
              </div>
            </div>
          )}

          <div className="profile-actions">
            {isEditing ? (
              <>
                <button type="submit" className="save-btn">
                  <FaSave /> Save Changes
                </button>
                <button 
                  type="button" 
                  className="cancel-btn"
                  onClick={() => setIsEditing(false)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <button 
                type="button" 
                className="edit-btn"
                onClick={() => setIsEditing(true)}
              >
                <FaEdit /> Edit Profile
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;