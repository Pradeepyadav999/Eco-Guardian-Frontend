// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import './Signup.css';

// const Signup = () => {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     contact: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { name, email, contact, password, confirmPassword } = form;

//     if (!name || !email || !contact || !password || !confirmPassword) {
//       alert('Please fill in all fields');
//     } else if (password !== confirmPassword) {
//       alert('Passwords do not match');
//     } else if (!/^\d{10}$/.test(contact)) {
//       alert('Enter a valid 10-digit contact number');
//     } else {
//       localStorage.setItem('user', JSON.stringify({ _id: 'eco456', role: 'user' }));
//       navigate('/report');
//     }
//   };

//   return (
//     <div className="signup-page">
//       <div className="signup-box">
//         <h2>Create Your Account</h2>
//         <form onSubmit={handleSubmit}>
//           <label>Full Name</label>
//           <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter full name" />

//           <label>Email</label>
//           <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter email" />

//           <label>Contact Number</label>
//           <input type="tel" name="contact" value={form.contact} onChange={handleChange} placeholder="Enter 10-digit number" />

//           <label>Password</label>
//           <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Enter password" />

//           <label>Confirm Password</label>
//           <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="Confirm password" />

//           <button type="submit">Sign Up</button>
//         </form>
//         <p className="redirect-login">
//           Already have an account? <Link to="/login">Login here</Link>
//         </p>
//       </div>
//     </div>
//   );
// };


// export default Signup;


import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css';

const Signup = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    contact: '',
    password: '',
    confirmPassword: '',
    adminCode: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, contact, password, confirmPassword, adminCode } = form;

    // Common validations
    if (!name || !email || !contact || !password || !confirmPassword) {
      return alert('Please fill in all fields');
    }
    if (password !== confirmPassword) {
      return alert('Passwords do not match');
    }
    if (!/^\d{10}$/.test(contact)) {
      return alert('Enter a valid 10-digit contact number');
    }

    // Admin-specific validation
    if (isAdmin && adminCode !== 'ECO-ADMIN-2024') {
      return alert('Invalid admin authorization code');
    }

    // Save user data
    const userData = {
      _id: 'eco' + Math.floor(Math.random() * 1000),
      role: isAdmin ? 'admin' : 'user',
      name,
      email
    };

    localStorage.setItem('user', JSON.stringify(userData));
    navigate(isAdmin ? '/admin-dashboard' : '/report');
  };

  return (
    <div className="signup-page">
      <div className="signup-box">
        <div className="form-toggle">
          <button 
            className={!isAdmin ? 'active' : ''}
            onClick={() => setIsAdmin(false)}
          >
            Citizen Signup
          </button>
          <button 
            className={isAdmin ? 'active' : ''}
            onClick={() => setIsAdmin(true)}
          >
            Admin Signup
          </button>
        </div>

        <h2>{isAdmin ? 'Create Admin Account' : 'Create Citizen Account'}</h2>
        
        <form onSubmit={handleSubmit}>
          {isAdmin && (
            <>
              <label>Admin Authorization Code</label>
              <input 
                type="password" 
                name="adminCode" 
                value={form.adminCode} 
                onChange={handleChange} 
                placeholder="Enter admin code" 
                required
              />
            </>
          )}

          <label>Full Name</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Enter full name" required />

          <label>Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter email" required />

          <label>Contact Number</label>
          <input type="tel" name="contact" value={form.contact} onChange={handleChange} placeholder="Enter 10-digit number" required />

          <label>Password</label>
          <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Enter password" required />

          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" value={form.confirmPassword} onChange={handleChange} placeholder="Confirm password" required />

          <button type="submit" className="submit-btn">
            Sign Up
          </button>
        </form>

        <p className="redirect-login">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;