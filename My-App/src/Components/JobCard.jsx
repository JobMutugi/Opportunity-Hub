import React, { useState } from 'react';

const JobCard = ({ job }) => {
  const [applied, setApplied] = useState(false);

  const toggleApplied = () => {
    setApplied(prev => !prev);
  };

  return (
    <div style={{
      border: '1px solid #ccc',
      margin: '20px',
      padding: '16px',
      borderRadius: '8px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
      backgroundColor: '#f9f9f9',
      maxWidth: '400px',
      
    }}>
      <h3>{job.title}</h3>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Description:</strong> {job.description}</p>
      <p><strong>Category:</strong> {job.category}</p>
      <p><strong>Status:</strong> {applied ? "Applied" : "Not Applied"}</p>

      <button
        onClick={toggleApplied}
        style={{
          backgroundColor: applied ? '#ccc' : '#28a745',
          color: applied ? '#000' : '#fff',
          marginRight: '10px',
          padding: '6px 12px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        {applied ? 'Applied' : 'Apply'}
      </button>
    </div>
  );
};

export default JobCard;
