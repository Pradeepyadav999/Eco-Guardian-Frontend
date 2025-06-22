import { Link } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUser, FaCogs } from "react-icons/fa";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  // Replace with your actual auth state
  const user = { _id: "", role: "" }; // Empty = logged out

  return (
    <>
      {/* Banner Section */}
      <div className="navbar-banner">
        <div className="banner-text">Eco-Guardian - Your Smart Civic Companion</div>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <Link to="/">Eco-Guardian</Link>
        </div>
        
        {/* Hamburger Menu */}
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </div>

        {/* Menu Items */}
        <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <li><Link to="/report">Report</Link></li>
          <li><Link to="/track">Track</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>

          {/* Auth Section */}
          {user._id ? (
            <div className="user-dropdown">
              <button onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <FaUser />
              </button>
              
              {isDropdownOpen && (
                <dialog open>
                  {user.role === "admin" && (
                    <Link 
                      to="/admin/dashboard" 
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <FaCogs /> Admin
                    </Link>
                  )}
                  <Link 
                    to="/logout" 
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <FaSignOutAlt /> Sign Out
                  </Link>
                </dialog>
              )}
            </div>
          ) : (
            <li>
              <Link to="/signup" className="login-link">
                <FaSignInAlt /> Sign Up
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;