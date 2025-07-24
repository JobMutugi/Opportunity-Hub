import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LogIn.css';

const Login = () => {
  const [role, setRole] = useState('jobseeker');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/users')
      .then((res) => res.json())
      .then((users) => {
        const user = users.find(
          (u) => u.email === email && u.password === password && u.role === role
        );

        if (user) {
          // Navigate based on role
          if (role === 'jobseeker') {
            navigate('/jobseeker-dashboard');
          } else {
            navigate('/recruiter-dashboard');
          }
        } else {
          alert('Invalid credentials or role.');
        }
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="jobseeker">Job Seeker</option>
          <option value="recruiter">Recruiter</option>
        </select>

        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
