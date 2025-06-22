// import React, { useState } from 'react';
// import './AdminLogin.css';

// // Add at the top
// import { useNavigate } from "react-router-dom";




// const AdminLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Mock login logic – replace with backend integration
//     if (email === 'admin@ecoguardian.com' && password === 'admin123') {
//       alert('Admin logged in successfully!');
//       // Redirect or load admin dashboard
//     } else {
//       setError('Invalid admin credentials');
//     }
//   };

//   return (
//     <div className="admin-login-page">
//       <div className="admin-login-box">
//         <h2>Admin Login - Eco Guardian</h2>
//         <form onSubmit={handleLogin}>
//           <label>Email</label>
//           <input
//             type="email"
//             placeholder="Enter admin email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <label>Password</label>
//           <input
//             type="password"
//             placeholder="Enter password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           {error && <p className="error-msg">{error}</p>}
//           <button type="submit">Login</button>
//           {/* // Inside component */}
//            const navigate = useNavigate();
//         </form>
//       </div>
//     </div>

//   );
// };

// // After successful login
// navigate("/admin-dashboard");

// export default AdminLogin;




// import React, { useState } from 'react';
// import './AdminLogin.css';
// import { useNavigate } from 'react-router-dom';

// const AdminLogin = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const navigate = useNavigate(); // ✅ moved to the top of the component

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Mock login logic – replace with backend integration
//     if (email === 'admin@ecoguardian.com' && password === 'admin123') {
//       alert('Admin logged in successfully!');
//       navigate('/admin-dashboard'); // ✅ navigate properly here
//     } else {
//       setError('Invalid admin credentials');
//     }
//   };

//   return (
//     <div className="admin-login-page">
//       <div className="admin-login-box">
//         <h2>Admin Login - Eco Guardian</h2>
//         <form onSubmit={handleLogin}>
//           <label>Email</label>
//           <input
//             type="email"
//             placeholder="Enter admin email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <label>Password</label>
//           <input
//             type="password"
//             placeholder="Enter password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//           {error && <p className="error-msg">{error}</p>}
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;


import React, { useState } from 'react';
import './AdminLogin.css';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [adminId, setAdminId] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Mock check — update as needed
    if (
      email === 'admin@ecoguardian.com' &&
      password === 'admin123' &&
      adminId === 'EG-001' &&
      username === 'admin'
    ) {
      alert('Admin logged in successfully!');
      navigate('/admin/dashboard');
    } else {
      setError('Invalid admin credentials');
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-box">
        <h2>Admin Login - Eco Guardian</h2>
        <form onSubmit={handleLogin}>
          <label>Admin ID</label>
          <input
            type="text"
            placeholder="Enter Admin ID"
            value={adminId}
            onChange={(e) => setAdminId(e.target.value)}
            required
          />

          <label>Username</label>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter admin email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="error-msg">{error}</p>}
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

