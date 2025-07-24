import React from 'react';

const Delete = ({ jobId, onDelete }) => {
  const handleClick = () => {
    fetch(`https://opportunity-hub-iw4d.onrender.com/jobs/${jobId}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.ok) {
          onDelete(jobId);
        } else {
          console.error("Failed to delete job");
        }
      })
      .catch((err) => console.error("Error deleting job:", err));
  };

  return (
    <button style={styles.button} onClick={handleClick}>
      Delete
    </button>
  );
};

const styles = {
  button: {
    marginTop: '12px',
    padding: '6px 12px',
    backgroundColor: '#ff4d4f',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer'
  }
};

export default Delete;
