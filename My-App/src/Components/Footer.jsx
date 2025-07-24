import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: '#007bff',
      color: '#fff',
      padding: '16px 10px',
      textAlign: 'center',
      marginTop: '40px',
      fontWeight: '500',
      fontSize: '0.95rem'
    }}>
      <p>&copy; {new Date().getFullYear()} <strong>Opportunity Hub</strong>. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
