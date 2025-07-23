import React from 'react';

const JobCard = ({ job, onEdit, onDelete}) => {

  return (
    <div style={{ border: '1px solid black', margin: '20px', padding: '10px' }}>
      <h3>{job.title}</h3>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Description:</strong> {job.description}</p>
      <p><strong>Category:</strong> {job.category}</p>
      <p><strong>Status:</strong> {job.applied ? "Applied" : "Not Applied"}</p>

     <button onClick={() => onEdit(job)}>Edit</button>
     <button onClick={() => onDelete(job.id)}>Delete</button>
     </div>
  );
};

export default JobCard;

