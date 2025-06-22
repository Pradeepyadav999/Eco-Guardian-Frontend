import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      localStorage.setItem('user', JSON.stringify({ _id: 'eco123', role: 'user' }));
      navigate('/user/dashboard');
    } else {
      alert('Please enter both username and password');
    }
  };

  return (
    <div className="login-page">
      <div className="login-right">
        <div className="login-form-container">
          <h2>Login to Eco-Guardian</h2>
          <form onSubmit={handleLogin}>
            <label>Username :</label>
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <label>Password :</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="forgot-link">
              <a href="/forgot/password">Forgot Password?</a>
            </div>

            <button type="submit">Login</button>
          </form>
          <p className="support-text">
            For support reach out to us: <a href="/support">Here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;


