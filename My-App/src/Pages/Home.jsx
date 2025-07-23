import React, { useEffect, useState } from 'react';
import JobCard from '../Components/JobCard';
import { useNavigate } from 'react-router-dom';

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
    navigate(`/editjob/${job.id}`, {state: job})
  }

  function handleDelete(id) {
    fetch(`http://localhost:3000/jobs/${id}`, {
      method: 'DELETE'
    })
    .then((res) => {
      if (res.ok) {
        setJobs((prevJobs) => prevJobs.filter(job => job.id !== id))
      }
    })
    .catch((err) => console.error('Error deleting job!', err))
  }

  return (
    <div className="content">
      <h2>Available Opportunities</h2>
      
      
      <div className="filters-container" style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          placeholder="Search by title or company..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        />
        
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ccc' }}
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        
        <button 
          onClick={() => {
            setSearchTerm('');
            setCategoryFilter('All');
          }}
          style={{
            padding: '8px 16px',
            backgroundColor: '#f0f0f0',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Clear Filters
        </button>
      </div>

      {filteredJobs.length === 0 ? (
        <p>No job listings found matching your criteria...</p>
      ) : (
        filteredJobs.map((job) => (
          <JobCard onEdit={handleEdit} onDelete={handleDelete} key={job.id} job={job} />
        ))
      )}
    </div>
  );
};

export default Home;

