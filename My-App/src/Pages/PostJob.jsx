import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Components/PostJob.css';
import EmployersHub from '../Components/EmployersHub';

const PostJob = () => {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    const newJob = { title, company, description, category };

    fetch('http://localhost:3000/jobs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newJob),
    }).then((res) => {
      if (res.ok) {
        navigate('/');  
      } else {
        alert('Something went wrong!');
      }
    });
  }
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.company.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = categoryFilter === 'All' || job.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
    <div className="postjob-container">
      <h2 className="postjob-title">Add Job Listing</h2>
      <form onSubmit={handleSubmit} className="postjob-form">
        <label className="postjob-label">Job Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="postjob-input"
        />

        <label className="postjob-label">Company Name:</label>
        <input
          type="text"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="postjob-input"
        />

        <label className="postjob-label">Job Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="postjob-textarea"
        />

        <label className="postjob-label">Category:</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="postjob-input"
        />

        <button type="submit" className="postjob-button">Add Job</button>
      </form>
    </div>
    <div><EmployersHub /></div>
    </>
  );
};

export default PostJob







