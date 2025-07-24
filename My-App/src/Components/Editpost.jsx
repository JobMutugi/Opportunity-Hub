import './PostJob.css'

// src/pages/EditJob.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const EditJob = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const job = location.state; // goal was passed from Home.jsx

  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [applied, setApplied] = useState('');

  useEffect(() => {
    if (job) {
      setTitle(job.title);
      setCompany(job.company);
      setDescription(job.description);
      setCategory(job.category);
      setApplied(job.applied);
    }
  }, [job]);

  const handleSubmit = (e) => {
    e.preventDefault();

const updatedJob = {
  ...job,
  title,
  company,
  description,
  category,
  applied,
};

fetch(`https://opportunity-hub-iw4d.onrender.com/jobs/${job.id}`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(updatedJob),
})
  .then((res) => {
    if (res.ok) {
      navigate('/'); // Go back to home after update
    } else {
      alert('Update failed');
    }
  })
  .catch((err) => console.error("Error updating Job:", err));
  };

  if (!job) return <p>Job data not found</p>;

  return (
    <div className="postjob-container">
      <h2 className="postjob-title">Edit Post</h2>
      <form onSubmit={handleSubmit} className="postjob-form">
        <label className="postjob-label">Job Title:</label><br />
        <input className="postjob-input" value={title} onChange={(e) => setTitle(e.target.value)} required /><br />

    <label className="postjob-label">Enter Company Name:</label><br />
    <input className="postjob-input" type="text" value={company} onChange={(e) => setCompany(e.target.value)} required /><br />

    <label className="postjob-label">Job Description:</label><br />
    <input className="postjob-input" type="text" value={description} onChange={(e) => setDescription(e.target.value)} /><br />

    <label className="postjob-label">Category:</label><br />
    <input className="postjob-input" value={category} onChange={(e) => setCategory(e.target.value)} required /><br />

    <label className="postjob-label">Applied:</label><br />
    <input className="postjob-input" type="text" value={applied} onChange={(e) => setApplied(e.target.value)} required /><br /><br />

    <button type="submit" className="postjob-button">Update Post</button>
  </form>
</div>
  );
};

export default EditJob;