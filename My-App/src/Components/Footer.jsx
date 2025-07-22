import React from 'react'

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#f1f1f1', 
      padding: '10px', 
      textAlign: 'center',
      marginTop: '20px'
    }}>
      <p>&copy; {new Date().getFullYear()} Opportunity Hub. All rights reserved.</p>
    </footer>
  );
}

export default Footer
