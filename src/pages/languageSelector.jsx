import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCheck, FaGlobe } from 'react-icons/fa';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  // Available languages with their display names and locale codes
  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
    { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
    { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
    { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
    { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
    { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
    { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
    { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
    { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' }
  ];

  // Load saved preferences on component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setSelectedLanguage(savedLanguage);
    setDarkMode(savedMode);
    document.body.className = savedMode ? 'dark-mode' : 'light-mode';
  }, []);

  // Handle language selection
  const handleLanguageSelect = (langCode) => {
    setSelectedLanguage(langCode);
    localStorage.setItem('language', langCode);
    // In a real app, you would update the translations context here
  };

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode.toString());
    document.body.className = newMode ? 'dark-mode' : 'light-mode';
  };

  // Apply selected language and go back
  const applyLanguage = () => {
    navigate(-1); // Go back to previous page
    // In a real app, you would trigger a UI refresh here
  };

  return (
    <div className={`language-selector-page ${darkMode ? 'dark' : 'light'}`}>
      <header className="language-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>
        <h1><FaGlobe /> Select Language</h1>
        <button className="theme-toggle" onClick={toggleDarkMode}>
          {darkMode ? '☀️' : '🌙'}
        </button>
      </header>

      <div className="language-list">
        {languages.map((language) => (
          <div 
            key={language.code}
            className={`language-item ${selectedLanguage === language.code ? 'selected' : ''}`}
            onClick={() => handleLanguageSelect(language.code)}
          >
            <div className="language-info">
              <span className="language-name">{language.name}</span>
              <span className="language-native">{language.nativeName}</span>
            </div>
            {selectedLanguage === language.code && <FaCheck className="check-icon" />}
          </div>
        ))}
      </div>

      <button className="apply-button" onClick={applyLanguage}>
        Apply Language
      </button>
    </div>
  );
};

export default LanguageSelector;