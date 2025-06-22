import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {


  const navigate = useNavigate();
  return (
    <div className="home">

      {/* Login Buttons Section */}
      <section className="login-buttons-section">
        <h2>Login to Eco Guardian</h2>
        <p>Access your dashboard and track complaints in real-time.</p>
        <div className="login-buttons">
          <a href="/login" className="login-button citizen">👤 Citizen Login</a>
          <a href="/admin/login" className="login-button admin">🏢 Admin Login</a>
        </div>
      </section>

      <header className="hero-section">
        <h1>Welcome to Eco-Guardian</h1>
        <p>Report municipal issues like garbage, pipeline leaks, and potholes. Help keep your city clean and efficient.</p>
        <a href="/report" className="report-button">Report an Issue</a>
      </header>



      <section className="features-section">
        <h2>What You Can Do</h2>
        <div className="features-grid">
          <div className="feature-box">
            <img src="https://source.unsplash.com/300x200/?camera,garbage" alt="Upload" />
            <h3>📸 Upload Photos</h3>
            <p>Capture and submit images of issues like garbage or leaks.</p>
          </div>
          <div className="feature-box" onClick={() => navigate('/track')}>
            <img src="https://source.unsplash.com/300x200/?tracking,map" alt="Track" />
            <h3>📍 Track Complaints</h3>
            <p>Monitor the progress and resolution status of your reports.</p>
          </div>
          <div className="feature-box" onClick={() => navigate('/contact/worker')}>
            <img src="https://source.unsplash.com/300x200/?worker,phone" alt="Contact" />
            <h3>📞 Contact Workers</h3>
            <p>Connect directly with assigned authorities and workers.</p>
          </div>
        </div>
      </section>

      <section className="educational-tips">
        <div className="container">
          <h2>♻️ Educational Tips</h2>
          <div className="tips-grid">
            <div className="tip-card" onClick={()=>navigate('/reduce')}>
              <h4 >Reduce</h4>
              <p>Buy only what you need to minimize waste and conserve resources.</p>
            </div>
            <div className="tip-card" onClick={()=>navigate('/reuse')}>
              <h4 >Reuse</h4>
              <p>Opt for reusable items instead of single-use products.</p>
            </div>
            <div className="tip-card" onClick={()=>navigate('/recycle')}>
              <h4 >Recycle</h4>
              <p>Sort your waste and recycle materials like paper, plastic, and glass.</p>
            </div>
            <div className="tip-card" onClick={()=>navigate('/refuse')}>
              <h4 >Refuse</h4>
              <p>Say no to unnecessary packaging and plastic bags.</p>
            </div>
            <div className="tip-card" onClick={()=>navigate('/rot')}>
              <h4 >Rot</h4>
              <p>Compost food and garden waste to enrich soil naturally.</p>
            </div>

            <div className="tip-card" onClick={()=>navigate('/educational/tips')}>
              <h4 >More</h4>
              <p>For more information </p>
            </div>
          </div>
        </div>
      </section>


      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step-box">
            <h3>1. Report</h3>
            <p>Click a photo and submit the issue using our easy form.</p>
          </div>
          <div className="step-box">
            <h3>2. Track</h3>
            <p>View live updates on your complaint’s progress and status.</p>
          </div>
          <div className="step-box">
            <h3>3. Resolve</h3>
            <p>Our team collaborates with Nagar Palika to resolve it swiftly.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
