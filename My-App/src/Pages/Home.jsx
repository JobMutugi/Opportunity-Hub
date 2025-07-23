import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import EditJob from './Editpost';
import { useNavigate } from 'react-router-dom';
// import Editpost from '/Editpost'



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




const Home = ({}) => {
  const navigate = useNavigate()
const handleEdit = (job) => {
navigate(`/editjob/${job.id}`, { state: job});

}


  return (
    <div className="job-list">
      <h1>Job Listings</h1>
      {jobs.map((job) => (
        <div key={job.id} className="job-card">
          <h3>{job.title}</h3>
          <p>{job.company}</p>

         <button onClick={() => {<EditPost></EditPost>}}>Edit</button>
          
          
        </div>
      ))}
    </div>
  );
};

export default Home;