import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav=useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/user/login', { email, password });
      console.log("Response data:", response.data); // Log response data for debugging
      if (response.status === 200) {
        // Login successful
        alert("Login success!");
        nav('/todo')
        
      } else {
        // Handle other status codes if needed
        alert("Login failed. Check your credentials and try again.");
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert("Login failed. Check your network connection and try again.");
    }
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <div className='card mt-5'>
            <div className='card-body'>
              <h3 className='card-title text-center'>Login</h3>
              <form onSubmit={handleLogin}>
                <div className='mb-3'>
                  <label htmlFor='email' className='form-label'>Email</label>
                  <input type='email' className='form-control' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='mb-3'>
                  <label htmlFor='password' className='form-label'>Password</label>
                  <input type='password' className='form-control' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type='submit' className='btn btn-primary w-100'>Login</button>
              </form>
              <div className='text-center mt-3'>
                <p className='mb-0'>Don't have an account? <Link to='/register'>Sign up</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
