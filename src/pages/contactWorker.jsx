import React, { useState } from 'react';
import { FaSearch, FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowLeft } from 'react-icons/fa';
import { IoMdConstruct } from 'react-icons/io';
import './ContactWorker.css';

const WardWorkers = () => {
  const [selectedWard, setSelectedWard] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Sample ward and worker data
  const wardData = [
    {
      wardNumber: 1,
      name: 'Ward 1 - Downtown',
      workers: [
        {
          id: 101,
          name: 'Rajesh Kumar',
          role: 'Sanitation Supervisor',
          phone: '9876543210',
          email: 'rajesh.kumar@city.gov',
          area: 'Main Market Area',
          skills: ['Waste Management', 'Team Leadership']
        }
      ]
    },
    {
    wardNumber: 2,
    name: 'Ward 2 - Green Park',
    workers: [
      {
        id: 102,
        name: 'Anita Sharma',
        role: 'Waste Collection Lead',
        phone: '9876543211',
        email: 'anita.sharma@city.gov',
        area: 'Parkside Colony',
        skills: ['Recycling', 'Public Interaction']
      }
    ]
  },
  {
    wardNumber: 3,
    name: 'Ward 3 - Old Town',
    workers: [
      {
        id: 103,
        name: 'Sunil Mehra',
        role: 'Drainage Inspector',
        phone: '9876543212',
        email: 'sunil.mehra@city.gov',
        area: 'Clock Tower Area',
        skills: ['Drainage Inspection', 'Documentation']
      }
    ]
  },
  {
    wardNumber: 4,
    name: 'Ward 4 - Riverbank',
    workers: [
      {
        id: 104,
        name: 'Pooja Verma',
        role: 'Street Cleaner',
        phone: '9876543213',
        email: 'pooja.verma@city.gov',
        area: 'Riverfront Road',
        skills: ['Street Cleaning', 'Waste Segregation']
      }
    ]
  },
  {
    wardNumber: 5,
    name: 'Ward 5 - University Area',
    workers: [
      {
        id: 105,
        name: 'Arun Patel',
        role: 'Sanitation Worker',
        phone: '9876543214',
        email: 'arun.patel@city.gov',
        area: 'Campus Road',
        skills: ['General Cleaning', 'Recycling']
      }
    ]
  },
  {
    wardNumber: 6,
    name: 'Ward 6 - Industrial Zone',
    workers: [
      {
        id: 106,
        name: 'Kiran Singh',
        role: 'Hazard Waste Specialist',
        phone: '9876543215',
        email: 'kiran.singh@city.gov',
        area: 'Sector C',
        skills: ['Hazardous Waste', 'Safety Protocols']
      }
    ]
  },
  {
    wardNumber: 7,
    name: 'Ward 7 - Hill View',
    workers: [
      {
        id: 107,
        name: 'Manoj Das',
        role: 'Supervisor',
        phone: '9876543216',
        email: 'manoj.das@city.gov',
        area: 'Hilltop Street',
        skills: ['Inspection', 'Complaint Handling']
      }
    ]
  },
  {
    wardNumber: 8,
    name: 'Ward 8 - Lake Side',
    workers: [
      {
        id: 108,
        name: 'Neha Joshi',
        role: 'Environment Inspector',
        phone: '9876543217',
        email: 'neha.joshi@city.gov',
        area: 'Lake Circle',
        skills: ['Water Quality', 'Environmental Health']
      }
    ]
  },
  {
    wardNumber: 9,
    name: 'Ward 9 - East End',
    workers: [
      {
        id: 109,
        name: 'Amit Rathi',
        role: 'Waste Disposal Head',
        phone: '9876543218',
        email: 'amit.rathi@city.gov',
        area: 'East Block',
        skills: ['Garbage Collection', 'Vehicle Management']
      }
    ]
  },
  {
    wardNumber: 10,
    name: 'Ward 10 - Central Avenue',
    workers: [
      {
        id: 110,
        name: 'Suman Yadav',
        role: 'Cleanliness Officer',
        phone: '9876543219',
        email: 'suman.yadav@city.gov',
        area: 'Central Plaza',
        skills: ['Sanitation Planning', 'Public Coordination']
      }
    ]
  }
  ];

  const filteredWards = wardData.filter(ward =>
    ward.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ward.workers.some(worker => 
      worker.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      worker.role.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="ward-workers-page">
      {selectedWard ? (
        <div className="ward-detail-view">
          <button 
            className="back-button" 
            onClick={() => setSelectedWard(null)}
            aria-label="Back to all wards"
          >
            <FaArrowLeft /> Back to all wards
          </button>

          <h2>{selectedWard.name}</h2>
          <p className="worker-count">
            {selectedWard.workers.length} {selectedWard.workers.length === 1 ? 'worker' : 'workers'} available
          </p>

          <div className="workers-list">
            {selectedWard.workers.map(worker => (
              <div key={worker.id} className="worker-card">
                <div className="worker-avatar">
                  <FaUser size={24} />
                </div>
                <div className="worker-info">
                  <h3>{worker.name}</h3>
                  <p className="worker-role">{worker.role}</p>
                  <div className="worker-meta">
                    <span><FaMapMarkerAlt /> {worker.area}</span>
                  </div>
                  <div className="worker-skills">
                    {worker.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
                <div className="worker-contact">
                  <a 
                    href={`tel:${worker.phone}`} 
                    className="contact-btn phone"
                    aria-label={`Call ${worker.name}`}
                  >
                    <FaPhone /> Call
                  </a>
                  <a 
                    href={`mailto:${worker.email}`} 
                    className="contact-btn email"
                    aria-label={`Email ${worker.name}`}
                  >
                    <FaEnvelope /> Email
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="ward-list-view">
          <h1>Find Workers by Ward</h1>
          
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search by ward, worker name or role..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search workers"
            />
          </div>

          <div className="wards-container">
            {filteredWards.length > 0 ? (
              filteredWards.map(ward => (
                <div 
                  key={ward.wardNumber} 
                  className="ward-card"
                  onClick={() => setSelectedWard(ward)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedWard(ward)}
                >
                  <h3>{ward.name}</h3>
                  <p className="worker-count">
                    {ward.workers.length} {ward.workers.length === 1 ? 'worker' : 'workers'}
                  </p>
                  <div className="ward-skills">
                    {Array.from(new Set(ward.workers.flatMap(w => w.skills)))
                      .slice(0, 3)
                      .map((skill, index) => (
                        <span key={index} className="skill-tag">{skill}</span>
                      ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <p>No wards or workers found matching your search</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default WardWorkers;