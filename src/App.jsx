import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import Footer from './components/Footer';
import ProtectedRoute from './components/ProtectedRoute';

import Home from './pages/home';
import PrivacyPolicy from './pages/privacyPolicy'
import Disclaimer from './pages/disclaimer';
import ContactUs from './pages/contactUs';
import ReportIssue from './pages/reportIssue';
import TrackComplaint from './pages/trackComplaint';

import Login from './pages/login';
import Signup from './pages/signUp';

import AdminDashboard from './pages/adminDashboard';

import AdminLogin from './pages/adminLogin';
import LanguageSelector from './pages/languageSelector';
import Feedback from './pages/feedback';
import Help from './pages/help';
import UserProfile from './pages/userProfile';
import Notification from './pages/notification';
import ContactWorker from './pages/ContactWorker';
import ForgotPassword from './pages/forgotPassword';
import Support from './pages/support';

import EducationalTips from './pages/educationalTips';
import Reduce from './pages/reduce';
import Ruse from './pages/reuse';
import Recycle from './pages/recycle';
import Refuse from './pages/refuse';
import Rot from './pages/rot';




import UserDashboard from './pages/userDashboard';

import Logout from './pages/logOut';
function App() {

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
    document.head.appendChild(link);
  }, []);

  // we write above code in .html  file in easy way showm below
  // <link
  //   rel="stylesheet"
  //   href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
  // />

  return (
    <Router>
      {/* <Navbar/> */}
      {/* TO see signOut button  */}
      {/* <Navbar isLoggedIn={true} userRole="user" onLogout={() => alert("Logged out!")} />  */}

      {/* To see signUp button */}
      <Navbar isLoggedIn={false} onLogout={() => {}} />
    
      <div className="container">
        <Routes>


          <Route path="" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/report" element={<ReportIssue />} />
          {/* use it when we wanr protection means without login user cannot report ReportIssue         
            <Route path="/report" element={<ProtectedRoute><ReportIssue /></ProtectedRoute>} /> */}
          <Route path="/track" element={<TrackComplaint />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />


          <Route path="/forgot/password" element={<ForgotPassword />} />
          <Route path="/support" element={<Support />} />



          <Route path="/admin/login" element={<AdminLogin />} />


          <Route path="/signup" element={<Signup />} />

          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/language" element={<LanguageSelector />} />


          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/notification" element={<Notification />} />


          <Route path="/feedback" element={<Feedback />} />
          <Route path="/help" element={<Help />} />


          <Route path="/contact/worker" element={<ContactWorker />} />

          <Route path="/educational/tips" element={<EducationalTips />} />
          <Route path="/reuse" element={<Ruse />} />
          <Route path="/reduce" element={<Reduce />} />
          <Route path="/refuse" element={<Refuse />} />
          <Route path="/recycle" element={<Recycle />} />
          <Route path="/rot" element={<Rot />} />




        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
