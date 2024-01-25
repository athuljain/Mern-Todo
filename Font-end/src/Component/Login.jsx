
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';


function Login() {

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/user/login', { email, password });

      console.log(response.data); // Assuming the server responds with a message

      // Handle successful login, e.g., redirect the user
      alert("Login success!");
    } catch (error) {
      console.error('Login failed:', error.response.data);
      alert("Login failed. Check your credentials and try again.");
    }
  };





  return (
    <MDBContainer fluid className='p-4 background-radial-gradient overflow-hidden'>


      <MDBRow>


        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>


          <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: 'hsl(218, 81%, 95%)'}}>
            Create Your <br />
            <span style={{color: 'hsl(218, 81%, 75%)'}}>To-Do's Here</span>
          </h1>


          <p className='px-3' style={{color: 'hsl(218, 81%, 85%)'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>


        </MDBCol>


        <MDBCol md='6' className='position-relative'>
          <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
          <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

          <MDBCard className='my-5 bg-glass'>
            <MDBCardBody className='p-5'>
              <MDBInput wrapperClass='mb-4' label='Email' id='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
              <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />

              <MDBBtn className='w-100 mb-4' size='md' onClick={handleLogin}>
                Login
              </MDBBtn>

              <div className="text-center">
                <p className="mb-0 text-center">
                  Don't have an account?{' '}
                  <Link to={'/register'} className="text-primary fw-bold">
                    Sign up
                  </Link>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login