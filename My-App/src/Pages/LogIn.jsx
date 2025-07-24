import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LogIn.css'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('jobseeker');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const loginData = {
      email,
      password
    };

    const endpoint = role === 'jobseeker' ? 'jobseekers' : 'recruiters';

    fetch(`http://localhost:3000/${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
      .then((res) => {
        if (res.ok) {
          if (role === 'jobseeker') {
            navigate('/home');
          } else {
            navigate('/postjob');
          }
        } else {
          alert("Failed to log in");
        }
      })
      .catch((err) => {
        console.error("Error saving login:", err);
      });
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login to Opportunity Hub</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="login-input"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="login-input"
        />
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="login-select"
        >
          <option value="jobseeker">Job Seeker</option>
          <option value="recruiter">Recruiter</option>
        </select>
        <button type="submit" className="login-button">Login</button>
      </form>
    </div>
  );
};

export default Login;
