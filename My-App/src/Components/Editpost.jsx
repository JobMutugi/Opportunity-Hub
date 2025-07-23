// import { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';

// const Editpost = () => { 
//   const { id } = useParams(); 
//   const navigate = useNavigate(); 

//   const [job, setJob] = useState({
//     title: '',
//     company: '',
//     description: '',
//     category: 'Development',
//     applied: false
//   });

//   useEffect(() => {
//    fetch(`http://localhost:3000/jobs/${job.id}`)
      
//       const foundJob = mockJobs.find(job => job.id === Number(id));
//       if (foundJob) {
//         setJob(foundJob);
//       }
//     };

//     fetchJob();
//   }, [id]); 

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setJob({
//        job,       
//       [name]: value 
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     console.log('Updated job:', job); 
    
//     navigate('/'); 
//   };

//   return (
//     <div className="edit-post-container">
//       <h2>Edit Job Post</h2>
      
//       <form onSubmit={handleSubmit} className="edit-form">
//         <div className="form-group">
//           <label>Job Title:</label>
//           <input
//             type="text"
//             name="title"
//             value={job.title}
//             onChange={handleChange}
//             required
//             placeholder="Enter job title"
//           />
//         </div>

//         <div className="form-group">
//           <label>Company:</label>
//           <input
//             type="text"
//             name="company"
//             value={job.company}
//             onChange={handleChange}
//             required
//             placeholder="Enter company name"
//           />
//         </div>

//         <div className="form-group">
//           <label>Description:</label>
//           <textarea
//             name="description"
//             value={job.description}
//             onChange={handleChange}
//             required
//             rows={5}
//             placeholder="Enter job description"
//           />
//         </div>

//         <div className="form-group">
//           <label>Category:</label>
//           <select
//             name="category"
//             value={job.category}
//             onChange={handleChange}
//             required
//           >
//             <option value="Development">Development</option>
//             <option value="Design">Design</option>
//             <option value="Management">Management</option>
//           </select>
//         </div>

//         <div className="form-actions">
//           <button type="submit" className="save-btn">
//             Save Changes
//           </button>
//           <button 
//             type="button" 
//             onClick={() => navigate('/')} 
//             className="cancel-btn"
//           >
//             Cancel
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Editpost;













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

fetch(`http://localhost:3000/jobs/${job.id}`, {
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
    <div className="content">
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Job Title:</label><br />
        <input value={title} onChange={(e) => setTitle(e.target.value)} required /><br />

    <label>Enter Company Name:</label><br />
    <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} required /><br />

    <label>Job Description:</label><br />
    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} /><br />

    <label>Category:</label><br />
    <input value={category} onChange={(e) => setCategory(e.target.value)} required /><br />

    <label>Applied:</label><br />
    <input type="text" value={applied} onChange={(e) => setApplied(e.target.value)} required /><br /><br />

    <button type="submit">Update Post</button>
  </form>
</div>
  );
};

export default EditJob;