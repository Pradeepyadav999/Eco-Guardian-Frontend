 import React, { useState, useEffect } from 'react';
import { FaChartLine, FaBell, FaCog, FaUser, FaSearch, FaMoon, FaSun } from 'react-icons/fa';
import { BsCalendarCheck, BsTicketDetailed } from 'react-icons/bs';
import { MdOutlineFeedback, MdOutlineHelp } from 'react-icons/md';
import './UserDashboard.css';
import { useNavigate } from 'react-router-dom';

const UserDashboard = () => {

  const navigate=useNavigate();

  const [darkMode, setDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [notifications, setNotifications] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');

  // Sample data
  const reports = [
    { id: 1, type: 'Pothole', status: 'In Progress', date: '2023-05-15', location: 'Main Street' },
    { id: 2, type: 'Garbage', status: 'Completed', date: '2023-05-10', location: 'Central Park' },
    { id: 3, type: 'Street Light', status: 'Pending', date: '2023-05-18', location: 'Oak Avenue' }
  ];

  const stats = {
    totalReports: 24,
    resolved: 18,
    inProgress: 4,
    pending: 2
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    document.documentElement.className = newMode ? 'dark' : 'light';
    localStorage.setItem('darkMode', newMode.toString());
  };

  // Set initial theme
  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
    document.documentElement.className = savedMode ? 'dark' : 'light';
  }, []);




  return (
    <div className={`dashboard ${darkMode ? 'dark' : 'light'}`}>
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>EcoGuardian</h2>
          <p>User Dashboard</p>
        </div>

        <nav className="sidebar-nav">
          <button 
            className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            <FaChartLine className="nav-icon" />
            Overview
          </button>
          
          <button 
            className={`nav-item ${activeTab === 'reports' ? 'active' : ''}`}
            onClick={() => setActiveTab('reports')}
          >
            <BsTicketDetailed className="nav-icon" />
            My Reports
          </button>
          
          <button 
            className={`nav-item ${activeTab === 'schedule' ? 'active' : ''}`}
            onClick={() => setActiveTab('schedule')}
          >
            <BsCalendarCheck className="nav-icon" />
            Schedule
          </button>
          
          <div className="sidebar-footer">
            {/* jb hm click krenge to navigate nhi hoga */}
            {/* <button className="nav-item">
              <MdOutlineFeedback className="nav-icon" />
              Feedback
            </button> */}


            {/* abb nevigate hoga */}

            <button 
              className="nav-item" 
              onClick={() => navigate('/feedback')} // Changed to navigate to feedback page
            >
              <MdOutlineFeedback className="nav-icon" />
              Feedback
            </button>

            <button 
              className="nav-item"
              onClick={()=>navigate('/help')}>
              <MdOutlineHelp className="nav-icon" />
              Help
            </button>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Top Bar */}
        <header className="top-bar">
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input 
              type="text" 
              placeholder="Search reports, locations..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="top-bar-actions">
            <button className="notification-btn"
            onClick={()=>navigate('/notification')}>
              <FaBell />
              {notifications > 0 && <span className="notification-badge">{notifications}</span>}
            </button>
            
            <button className="theme-toggle" onClick={toggleDarkMode}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            
            <button className="user-profile"
            onClick={()=>navigate('/user/profile')}>
              <FaUser />
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="content-area">
          {activeTab === 'overview' && (
            <>
              <h1 className="page-title">Dashboard Overview</h1>
              
              {/* Stats Cards */}
              <div className="stats-grid">
                <div className="stat-card">
                  <h3>Total Reports</h3>
                  <p className="stat-value">{stats.totalReports}</p>
                </div>
                
                <div className="stat-card">
                  <h3>Resolved</h3>
                  <p className="stat-value resolved">{stats.resolved}</p>
                </div>
                
                <div className="stat-card">
                  <h3>In Progress</h3>
                  <p className="stat-value in-progress">{stats.inProgress}</p>
                </div>
                
                <div className="stat-card">
                  <h3>Pending</h3>
                  <p className="stat-value pending">{stats.pending}</p>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="recent-activity">
                <h2>Recent Reports</h2>
                <div className="activity-list">
                  {reports.map(report => (
                    <div key={report.id} className="activity-item">
                      <div className="activity-info">
                        <h4>{report.type}</h4>
                        <p>{report.location}</p>
                      </div>
                      <div className="activity-meta">
                        <span className={`status-badge ${report.status.toLowerCase().replace(' ', '-')}`}>
                          {report.status}
                        </span>
                        <p className="activity-date">{report.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}

          {activeTab === 'reports' && (
            <div className="reports-section">
              <h1 className="page-title">My Reports</h1>
              <div className="reports-list">
                {reports.map(report => (
                  <div key={report.id} className="report-card">
                    <div className="report-header">
                      <h3>{report.type}</h3>
                      <span className={`status-badge ${report.status.toLowerCase().replace(' ', '-')}`}>
                        {report.status}
                      </span>
                    </div>
                    <div className="report-body">
                      <p><strong>Location:</strong> {report.location}</p>
                      <p><strong>Date Reported:</strong> {report.date}</p>
                    </div>
                    <div className="report-actions">
                      <button className="btn view-btn">View Details</button>
                      <button className="btn track-btn">Track Status</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'schedule' && (
            <div className="schedule-section">
              <h1 className="page-title">Schedule</h1>
              <div className="calendar-placeholder">
                <p>Calendar integration would go here</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;