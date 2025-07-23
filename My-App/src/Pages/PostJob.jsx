import React from 'react'

const PostJob = () => {
  return (
    <div>
      
    
    </div>
  )
}

export default PostJob








const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.company.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = categoryFilter === 'All' || job.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });
