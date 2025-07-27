import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios.post('/api/auth/login', { username, password })
      .then(res => {
        localStorage.setItem('token', res.data.token);
        alert('Login successful');
      })
      .catch(err => alert('Login failed'));
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <input type="text" placeholder="Username" className="form-control mb-2"
             value={username} onChange={e => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" className="form-control mb-2"
             value={password} onChange={e => setPassword(e.target.value)} />
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;