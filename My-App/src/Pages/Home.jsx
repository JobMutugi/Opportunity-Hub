import React, { useEffect, useState } from 'react';
import JobCard from '../Components/JobCard';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Make sure this path matches

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3000/jobs')
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

  const categories = ['All', ...new Set(jobs.map(job => job.category))];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter === 'All' || job.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  function handleEdit(job) {
    navigate(`/editjob/${job.id}`, { state: job });
  }

  function handleDelete(id) {
    fetch(`http://localhost:3000/jobs/${id}`, {
      method: 'DELETE'
    })
    .then((res) => {
      if (res.ok) {
        setJobs((prevJobs) => prevJobs.filter(job => job.id !== id));
      }
    })
    .catch((err) => console.error('Error deleting job!', err));
  }

  return (
    <div className="home-container">
      <h2 style={{
    fontSize: '2.2rem',
    fontWeight: 700,
    color: '#007bff',
    textAlign: 'center',
    marginTop: '40px',
    marginBottom: '25px',
    position: 'relative'
  }} className="home-header">Available Opportunities</h2>

      <div className="filters-container">
        <input
          type="text"
          placeholder="Search by title or company..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <button onClick={() => {
          setSearchTerm('');
          setCategoryFilter('All');
        }}>
          Clear Filters
        </button>
      </div>

      <div className="jobs-wrapper">
        {jobs.length === 0 ? (
          <p>Loading job listings...</p>
        ) : (
          filteredJobs.length === 0 ? (
            <p>No job listings found matching your criteria...</p>
          ) : (
            filteredJobs.map((job) => (
              <JobCard
                onEdit={handleEdit}
                onDelete={handleDelete}
                key={job.id}
                job={job}
              />
            ))
          )
        )}
      </div>
    </div>
  );
};

export default Home;
