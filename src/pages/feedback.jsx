import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaStar, FaPaperPlane } from 'react-icons/fa';
import './Feedback.css';

const Feedback = () => {
  const [rating, setRating] = useState(0);
  const [feedbackText, setFeedbackText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Feedback submitted:', { rating, feedbackText });
      setIsSubmitting(false);
      alert('Thank you for your feedback!');
      navigate(-1); // Go back to previous page
    }, 1500);
  };

  return (
    <div className="feedback-page">
      <header className="feedback-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>
        <h1>Share Your Feedback</h1>
      </header>

      <div className="feedback-container">
        <form onSubmit={handleSubmit}>
          <div className="rating-section">
            <h2>How would you rate your experience?</h2>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <FaStar 
                  key={star}
                  className={`star ${star <= rating ? 'active' : ''}`}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
          </div>

          <div className="feedback-section">
            <h2>Your Comments</h2>
            <textarea
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              placeholder="What did you like or how can we improve?"
              required
            />
          </div>

          <button 
            type="submit" 
            className="submit-button"
            disabled={isSubmitting || rating === 0}
          >
            {isSubmitting ? 'Submitting...' : (
              <>
                <FaPaperPlane /> Submit Feedback
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;