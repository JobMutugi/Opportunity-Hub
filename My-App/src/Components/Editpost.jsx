import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Editpost = () => { 
  const { id } = useParams(); 
  const navigate = useNavigate(); 

  const [job, setJob] = useState({
    title: '',
    company: '',
    description: '',
    category: 'Development',
    applied: false
  });

  useEffect(() => {
    const fetchJob = () => {
      const mockJobs = [
        {
          id: 1,
          title: 'Frontend Developer',
          company: 'Tech Corp',
          description: 'Build UIs with React',
          category: 'Development',
          applied: false
        },
        {
          id: 2,
          title: 'UX Designer',
          company: 'Creative Labs',
          description: 'Design user interfaces',
          category: 'Design',
          applied: true
        }
      ];
      
      const foundJob = mockJobs.find(job => job.id === Number(id));
      if (foundJob) {
        setJob(foundJob);
      }
    };

    fetchJob();
  }, [id]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJob({
      ...job,       
      [name]: value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Updated job:', job); 
    
    navigate('/'); 
  };

  return (
    <div className="edit-post-container">
      <h2>Edit Job Post</h2>
      
      <form onSubmit={handleSubmit} className="edit-form">
        <div className="form-group">
          <label>Job Title:</label>
          <input
            type="text"
            name="title"
            value={job.title}
            onChange={handleChange}
            required
            placeholder="Enter job title"
          />
        </div>

        <div className="form-group">
          <label>Company:</label>
          <input
            type="text"
            name="company"
            value={job.company}
            onChange={handleChange}
            required
            placeholder="Enter company name"
          />
        </div>

        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={job.description}
            onChange={handleChange}
            required
            rows={5}
            placeholder="Enter job description"
          />
        </div>

        <div className="form-group">
          <label>Category:</label>
          <select
            name="category"
            value={job.category}
            onChange={handleChange}
            required
          >
            <option value="Development">Development</option>
            <option value="Design">Design</option>
            <option value="Management">Management</option>
          </select>
        </div>

        <div className="form-actions">
          <button type="submit" className="save-btn">
            Save Changes
          </button>
          <button 
            type="button" 
            onClick={() => navigate('/')} 
            className="cancel-btn"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Editpost;