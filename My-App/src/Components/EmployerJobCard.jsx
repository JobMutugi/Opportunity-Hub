import React from 'react';

const JobCard = ({ job, onEdit, onDelete }) => {
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
      <h3 style={{ color: '#333', marginBottom: '10px' }}>{job.title}</h3>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Description:</strong> {job.description}</p>
      <p><strong>Category:</strong> {job.category}</p>

      <div style={{ marginTop: '12px' }}>
        <button
          onClick={() => onEdit(job)}
          style={{
            marginRight: '10px',
            backgroundColor: '#007bff',
            color: '#fff',
            padding: '6px 12px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(job.id)}
          style={{
            backgroundColor: '#dc3545',
            color: '#fff',
            padding: '6px 12px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default JobCard;
