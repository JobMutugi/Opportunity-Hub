import React, { useEffect, useState } from 'react';
import JobCard from '../Components/JobCard';

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/jobs')
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

     const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.company.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = categoryFilter === 'All' || job.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="content">
      <h2>Available Opportunities</h2>
      {jobs.length === 0 ? (
        <p>Loading job listings...</p>
      ) : (
        jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))
      )}
    </div>
  );
};

export default Home;

