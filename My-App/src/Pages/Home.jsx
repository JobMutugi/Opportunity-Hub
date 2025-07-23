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

