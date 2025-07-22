import React from 'react';
import { Link } from 'react-router-dom';

 const jobs = [
  {
    id: 1,
    title: 'Frontend Developer',
    company: 'Tech Corp',
    description: 'Build UIs with React',
    category: 'Development'
  },
  {
    id: 2,
    title: 'UX Designer',
    company: 'Creative Labs',
    description: 'Design user interfaces',
    category: 'Design'
  }
];

const Home = () => {
  return (
    <div className="job-list">
      <h1>Job Listings</h1>
      {jobs.map((job) => (
        <div key={job.id} className="job-card">
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <Link to={`/editjob/${job.id}`} className="edit-link">
            Edit
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;