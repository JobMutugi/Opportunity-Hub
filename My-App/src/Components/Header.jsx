import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{
      backgroundColor: '#f8f9fa',
      padding: '1rem',
      borderBottom: '1px solid #ddd'
    }}>
      <nav style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        listStyle: 'none'
      }}>
        <li>
          <NavLink 
            to="/" 
            style={({ isActive }) => ({
              textDecoration: 'none',
              color: isActive ? '#007bff' : '#333',
              fontWeight: isActive ? 'bold' : 'normal'
            })}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/postjob"
            style={({ isActive }) => ({
              textDecoration: 'none',
              color: isActive ? '#007bff' : '#333',
              fontWeight: isActive ? 'bold' : 'normal'
            })}
          >
            Employer Hub
          </NavLink>
        </li>
      </nav>
    </header>
  );
};

export default Header;