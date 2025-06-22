import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaSearch, FaQuestionCircle, FaEnvelope, FaPhone,FaUser,FaCog } from 'react-icons/fa';
import { MdOutlineForum, MdOutlineLiveHelp } from 'react-icons/md';
import './Help.css';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('general');
  const navigate = useNavigate();

  // Sample help articles
  const helpArticles = {


    general: [
      { 
        question: 'How do I report an issue?', 
        answer: 'Navigate to the "Report" section in the main menu and fill out the form with details about the issue.' 
      },
      { 
        question: 'How can I track my report status?', 
        answer: 'Go to "My Reports" in your dashboard to see the current status of all your submitted reports.' 
      }
    ],
    account: [
      { 
        question: 'How do I change my password?', 
        answer: 'Visit your account settings and select "Change Password". You will need to verify your current password first.' 
      },
      { 
        question: 'Can I delete my account?', 
        answer: 'Yes, account deletion is available in the settings under "Account Management".' 
      }
    ],
    technical: [
      { 
        question: 'The app keeps crashing, what should I do?', 
        answer: 'Try clearing your browser cache or updating to the latest version of the app. If the issue persists, contact our support team.' 
      },
      { 
        question: 'How do I enable notifications?', 
        answer: 'Check your browser/app permissions and ensure notifications are enabled for our website in your device settings.' 
      }
    ]
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // In a real app, you would implement search functionality
      alert(`Searching for: ${searchQuery}`);
    }
  };

  return (
    <div className="help-page">
      <header className="help-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>
        <h1><MdOutlineLiveHelp /> Help Center</h1>
      </header>

      <div className="help-container">
        <form className="help-search" onSubmit={handleSearch}>
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search help articles..."
            />
          </div>
          <button type="submit" className="search-button">Search</button>
        </form>

        <div className="help-categories">
          <button
            className={`category-btn ${activeCategory === 'general' ? 'active' : ''}`}
            onClick={() => setActiveCategory('general')}
          >
            <FaQuestionCircle /> General
          </button>
          <button
            className={`category-btn ${activeCategory === 'account' ? 'active' : ''}`}
            onClick={() => setActiveCategory('account')}
          >
            <FaUser /> Account
          </button>
          <button
            className={`category-btn ${activeCategory === 'technical' ? 'active' : ''}`}
            onClick={() => setActiveCategory('technical')}
          >
            <FaCog /> Technical
          </button>
        </div>

        <div className="help-articles">
          <h2>Frequently Asked Questions</h2>
          {helpArticles[activeCategory].map((article, index) => (
            <div key={index} className="article-card">
              <h3>{article.question}</h3>
              <p>{article.answer}</p>
            </div>
          ))}
        </div>

        <div className="contact-support">
          <h2>Still need help?</h2>
          <div className="contact-options">
            <button className="contact-btn">
              <MdOutlineForum /> Community Forum
            </button>
            <button className="contact-btn"
            onClick={()=>navigate('/contact')}>
              <FaEnvelope /> Email Support
            </button>
            <button className="contact-btn">
              <FaPhone /> Call Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;