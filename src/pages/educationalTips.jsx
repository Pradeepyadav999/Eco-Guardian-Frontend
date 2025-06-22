import React, { useState } from 'react';
import { FaLeaf, FaRecycle, FaWater, FaTree, FaLightbulb, FaSearch } from 'react-icons/fa';
import { MdEco } from 'react-icons/md';
import './EducationalTips.css';

const EducationalTips = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Tip categories and data
  const categories = [
    { id: 'waste', name: 'Waste Management', icon: <FaRecycle /> },
    { id: 'water', name: 'Water Conservation', icon: <FaWater /> },
    { id: 'energy', name: 'Energy Saving', icon: <FaLightbulb /> },
    { id: 'greenery', name: 'Urban Greenery', icon: <FaTree /> }
  ];

  const tips = [
    {
      id: 1,
      title: 'Proper Waste Segregation',
      content: 'Always separate your waste into recyclables, compostables, and landfill items. This helps reduce contamination in recycling streams.',
      category: 'waste',
      level: 'beginner'
    },
    {
      id: 2,
      title: 'Fix Leaky Faucets',
      content: 'A single dripping faucet can waste over 3,000 gallons of water per year. Fix leaks promptly to conserve water.',
      category: 'water',
      level: 'beginner'
    },
    {
      id: 3,
      title: 'Smart Thermostat Usage',
      content: 'Set your thermostat 1-2 degrees higher in summer and lower in winter to save energy without sacrificing comfort.',
      category: 'energy',
      level: 'intermediate'
    },
    {
      id: 4,
      title: 'Community Composting',
      content: 'Join or start a community composting program to reduce organic waste and create nutrient-rich soil for local gardens.',
      category: 'waste',
      level: 'intermediate'
    },
    {
      id: 5,
      title: 'Rainwater Harvesting',
      content: 'Install a rain barrel to collect rainwater for watering plants, reducing your dependence on municipal water supplies.',
      category: 'water',
      level: 'advanced'
    },
    {
      id: 6,
      title: 'Native Plant Gardening',
      content: 'Plant native species in your garden as they require less water and maintenance while supporting local biodiversity.',
      category: 'greenery',
      level: 'intermediate'
    }
  ];

  const filteredTips = tips.filter(tip => {
    const matchesSearch = tip.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         tip.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || tip.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="educational-tips-page">
      <div className="tips-header">
        <h1><MdEco /> Eco-Friendly Tips & Education</h1>
        <p>Learn practical ways to reduce your environmental impact and contribute to a sustainable community</p>
      </div>

      <div className="tips-controls">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search tips..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="category-filters">
          <button
            className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            <FaLeaf /> All Tips
          </button>
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.icon} {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="tips-container">
        {filteredTips.length > 0 ? (
          filteredTips.map(tip => (
            <div key={tip.id} className={`tip-card ${tip.level}`}>
              <div className="tip-header">
                <h3>{tip.title}</h3>
                <span className={`difficulty ${tip.level}`}>
                  {tip.level.charAt(0).toUpperCase() + tip.level.slice(1)}
                </span>
              </div>
              <div className="tip-category">
                {categories.find(c => c.id === tip.category).icon} 
                {categories.find(c => c.id === tip.category).name}
              </div>
              <p className="tip-content">{tip.content}</p>
              <div className="tip-actions">
                <button className="save-btn">Save for Later</button>
                <button className="share-btn">Share</button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-results">
            <FaRecycle size={30} />
            <p>No tips found matching your search</p>
            <button 
              className="reset-btn"
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('all');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      <div className="newsletter-signup">
        <h3>Get More Eco Tips</h3>
        <p>Subscribe to our monthly newsletter for fresh sustainability tips</p>
        <div className="signup-form">
          <input type="email" placeholder="Your email address" />
          <button className="subscribe-btn">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default EducationalTips;