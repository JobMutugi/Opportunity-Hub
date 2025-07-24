
import React, { useEffect, useState } from 'react';
import EmployerJobCard from './EmployerJobCard';
import { useNavigate } from 'react-router-dom';

const EmployersHub = () => {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://opportunity-hub-iw4d.onrender.com/jobs')
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error("Error fetching jobs:", err));
  }, []);

    function handleEdit(job) {
      navigate(`/editjob/${job.id}`, {state: job})
    }


     function handleDelete (id) {
            fetch(`https://opportunity-hub-iw4d.onrender.com/jobs/${id}`, {
              method:'DELETE'
            })
            .then((res) => {
              if (res.ok) {
              setJobs((prevJobs) => prevJobs.filter(job => job.id !== id))
            }
          })
          .catch((err) => console.error('Error deleting goal!', err))
     }



  return (
    <div className="content" style={{
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between', 
  gap: '20px',
}}>
      
      {jobs.length === 0 ? (
        <p>Loading job listings...</p>
      ) : (
        jobs.map((job) => (
          <EmployerJobCard onEdit={handleEdit} onDelete={handleDelete} key={job.id} job={job} />
        ))
      )}
    </div>
  );
};

export default EmployersHub;

