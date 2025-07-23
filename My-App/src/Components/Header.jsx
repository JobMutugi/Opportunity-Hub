import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{
      backgroundColor: '#007bff',
      padding: '1rem',
      borderBottom: '1px solid #0056b3',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
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
              color: isActive ? '#fff' : '#e0e0e0',
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
              color: isActive ? '#fff' : '#e0e0e0',
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
