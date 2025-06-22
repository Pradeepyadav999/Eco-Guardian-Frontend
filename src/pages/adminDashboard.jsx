import React, { useEffect, useState } from 'react';
import './AdminDashboard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const sampleComplaints = [
  { id: 1, user: 'Rahul', ward: 'Ward 3', category: 'Garbage', status: 'Pending', description: 'Garbage not collected.', isSpam: false },
  { id: 2, user: 'Anita', ward: 'Ward 1', category: 'Road', status: 'In Progress', description: 'Potholes on the road.', isSpam: false },
  { id: 3, user: 'Vikram', ward: 'Ward 2', category: 'Water', status: 'Resolved', description: 'Water supply issue.', isSpam: true },
];

const AdminDashboard = () => {
  const [complaints, setComplaints] = useState([]);
  const [activePage, setActivePage] = useState("Dashboard");
  const [filterWard, setFilterWard] = useState('All');
  const [filterCategory, setFilterCategory] = useState('All');

  useEffect(() => {
    setComplaints(sampleComplaints);
  }, []);

  const handleStatusChange = (id, newStatus) => {
    setComplaints(prev =>
      prev.map(c => c.id === id ? { ...c, status: newStatus } : c)
    );
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this complaint?")) {
      setComplaints(prev => prev.filter(c => c.id !== id));
    }
  };

  const handleResolve = (id) => {
    setComplaints(prev =>
      prev.map(c => c.id === id ? { ...c, status: 'Resolved' } : c)
    );
  };

  const total = complaints.length;
  const pending = complaints.filter(c => c.status === 'Pending').length;
  const resolved = complaints.filter(c => c.status === 'Resolved').length;

  const filteredComplaints = complaints.filter(c => {
    return (filterWard === 'All' || c.ward === filterWard) &&
           (filterCategory === 'All' || c.category === filterCategory);
  });

  const wards = [...new Set(complaints.map(c => c.ward))];
  const categories = [...new Set(complaints.map(c => c.category))];

  return (
    <div className="d-flex min-vh-100">
      <aside className="bg-success text-white p-4" style={{ width: '250px' }}>
        <h1 className="mb-5">🌿 Eco Guardian</h1>
        <nav className="nav flex-column">
          {["Dashboard", "Complaints", "Users", "Logout"].map((item) => (
            <button
              key={item}
              className={`btn text-start nav-link text-white ${activePage === item ? 'active-link' : ''}`}
              onClick={() => setActivePage(item)}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-grow-1 p-4 bg-light">
        <h2 className="mb-4">{activePage}</h2>

        {activePage === "Dashboard" && (
          <>
            <div className="row g-4 mb-4">
              <div className="col-md-4">
                <div className="card shadow">
                  <div className="card-body d-flex align-items-center">
                    <i className="bi bi-exclamation-circle-fill text-primary fs-3 me-3"></i>
                    <div>
                      <p className="mb-1 text-muted">Total Complaints</p>
                      <h5 className="mb-0">{total}</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow">
                  <div className="card-body d-flex align-items-center">
                    <i className="bi bi-hourglass-split text-warning fs-3 me-3"></i>
                    <div>
                      <p className="mb-1 text-muted">Pending</p>
                      <h5 className="mb-0">{pending}</h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow">
                  <div className="card-body d-flex align-items-center">
                    <i className="bi bi-check-circle-fill text-success fs-3 me-3"></i>
                    <div>
                      <p className="mb-1 text-muted">Resolved</p>
                      <h5 className="mb-0">{resolved}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {(activePage === "Dashboard" || activePage === "Complaints") && (
          <>
            <div className="filters mb-4 d-flex align-items-center">
              <label className="me-2">Filter by Ward:</label>
              <select value={filterWard} onChange={e => setFilterWard(e.target.value)} className="form-select me-4 w-auto">
                <option value="All">All</option>
                {wards.map(w => <option key={w} value={w}>{w}</option>)}
              </select>

              <label className="me-2">Filter by Category:</label>
              <select value={filterCategory} onChange={e => setFilterCategory(e.target.value)} className="form-select w-auto">
                <option value="All">All</option>
                {categories.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div className="card shadow">
              <div className="card-body">
                <h5 className="card-title mb-3">Complaints</h5>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead className="table-light">
                      <tr>
                        <th>ID</th>
                        <th>User</th>
                        <th>Ward</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredComplaints.length === 0 ? (
                        <tr>
                          <td colSpan="7" className="text-center">No complaints found.</td>
                        </tr>
                      ) : (
                        filteredComplaints.map((c) => (
                          <tr key={c.id} className={c.isSpam ? 'table-danger' : ''}>
                            <td>{c.id}</td>
                            <td>{c.user}</td>
                            <td>{c.ward}</td>
                            <td>{c.category}</td>
                            <td>{c.description}</td>
                            <td>
                              <select
                                className="form-select form-select-sm"
                                value={c.status}
                                onChange={(e) => handleStatusChange(c.id, e.target.value)}
                              >
                                <option>Pending</option>
                                <option>In Progress</option>
                                <option>Resolved</option>
                              </select>
                            </td>
                            <td>
                              <button className="btn btn-sm btn-primary me-2">View</button>
                              {c.status !== 'Resolved' && (
                                <button className="btn btn-sm btn-success me-2" onClick={() => handleResolve(c.id)}>Resolve</button>
                              )}
                              <button className="btn btn-sm btn-danger" onClick={() => handleDelete(c.id)}>
                                {c.isSpam ? 'Delete' : 'Remove'}
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </>
        )}

        {activePage === "Users" && (
          <div className="alert alert-info">User Management Page (Coming Soon)</div>
        )}
        {activePage === "Logout" && (
          <div className="alert alert-danger">Logging out... (Demo only)</div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;




// import React from 'react';
// import './AdminDashboard.css';

// const AdminDashboard = () => {
//   return (
//     <div className="admin-dashboard">
//       <header className="admin-header">
//         <h1>Eco Guardian - Admin Dashboard</h1>
//       </header>

//       <section className="admin-summary">
//         <div className="summary-box">
//           <h2>🔔 Pending Complaints</h2>
//           <p>12</p>
//         </div>
//         <div className="summary-box">
//           <h2>✅ Resolved Complaints</h2>
//           <p>48</p>
//         </div>
//         <div className="summary-box">
//           <h2>📈 Total Complaints</h2>
//           <p>60</p>
//         </div>
//       </section>

//       <section className="admin-actions">
//         <h2>Quick Actions</h2>
//         <div className="actions-grid">
//           <button className="action-btn">📝 View All Complaints</button>
//           <button className="action-btn">🚀 Update Complaint Status</button>
//           <button className="action-btn">💬 View Feedback</button>
//           <button className="action-btn">📚 Post Awareness Tip</button>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AdminDashboard;
