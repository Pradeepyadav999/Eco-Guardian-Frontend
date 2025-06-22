import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBell, FaArrowLeft, FaCheck, FaTrash, FaFilter } from 'react-icons/fa';
import { IoMdNotificationsOff } from 'react-icons/io';
import './Notification.css';

const Notification = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState('all'); // 'all', 'unread', 'read'

  // Sample notifications data
  useEffect(() => {
    const sampleNotifications = [
      {
        id: 1,
        title: 'Report Status Update',
        message: 'Your pothole report on Main Street has been resolved',
        timestamp: '2023-06-15T10:30:00',
        isRead: false,
        type: 'status'
      },
      {
        id: 2,
        title: 'New Feature',
        message: 'Check out the new community dashboard feature',
        timestamp: '2023-06-14T15:45:00',
        isRead: true,
        type: 'announcement'
      },
      {
        id: 3,
        title: 'Reminder',
        message: 'Your scheduled cleanup event starts in 2 days',
        timestamp: '2023-06-13T09:15:00',
        isRead: false,
        type: 'reminder'
      },
      {
        id: 4,
        title: 'Community Alert',
        message: 'New pollution report in your neighborhood',
        timestamp: '2023-06-12T14:20:00',
        isRead: true,
        type: 'alert'
      }
    ];
    setNotifications(sampleNotifications);
  }, []);

  const markAsRead = (id) => {
    setNotifications(notifications.map(notification => 
      notification.id === id ? { ...notification, isRead: true } : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(notifications.map(notification => ({
      ...notification,
      isRead: true
    })));
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter(notification => notification.id !== id));
  };

  const filteredNotifications = notifications.filter(notification => {
    if (filter === 'unread') return !notification.isRead;
    if (filter === 'read') return notification.isRead;
    return true;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="notification-page">
      <header className="notification-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <FaArrowLeft />
        </button>
        <h1><FaBell /> Notifications</h1>
        <div className="notification-actions">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'unread' ? 'active' : ''}`}
            onClick={() => setFilter('unread')}
          >
            Unread
          </button>
          <button 
            className={`filter-btn ${filter === 'read' ? 'active' : ''}`}
            onClick={() => setFilter('read')}
          >
            Read
          </button>
          <button className="mark-all-btn" onClick={markAllAsRead}>
            <FaCheck /> Mark all as read
          </button>
        </div>
      </header>

      <div className="notification-list">
        {filteredNotifications.length > 0 ? (
          filteredNotifications.map(notification => (
            <div 
              key={notification.id} 
              className={`notification-item ${notification.isRead ? 'read' : 'unread'}`}
            >
              <div className="notification-content">
                <h3>{notification.title}</h3>
                <p>{notification.message}</p>
                <div className="notification-meta">
                  <span className="notification-type">{notification.type}</span>
                  <span className="notification-time">{formatDate(notification.timestamp)}</span>
                </div>
              </div>
              <div className="notification-actions">
                {!notification.isRead && (
                  <button 
                    className="action-btn mark-read-btn"
                    onClick={() => markAsRead(notification.id)}
                  >
                    <FaCheck /> Mark as read
                  </button>
                )}
                <button 
                  className="action-btn delete-btn"
                  onClick={() => deleteNotification(notification.id)}
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="empty-state">
            <IoMdNotificationsOff size={48} />
            <p>No notifications found</p>
            {filter !== 'all' && (
              <button 
                className="reset-filter-btn"
                onClick={() => setFilter('all')}
              >
                Show all notifications
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Notification;