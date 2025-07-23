
import React, { useEffect, useState } from 'react';
import JobCard from '../Components/JobCard';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    fetch('http://localhost:3000/jobs')
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

    function handleEdit(job) {
      navigate(`/editjob/${job.id}`, {state: job})
    }



  return (
    <div className="content">
      <h2>Available Opportunities</h2>
      {jobs.length === 0 ? (
        <p>Loading job listings...</p>
      ) : (
        jobs.map((job) => (
          <JobCard onEdit={handleEdit} key={job.id} job={job} />
        ))
      )}
    </div>
  );
};

export default Home;

