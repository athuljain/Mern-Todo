import React, { useContext, useState } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { myContext } from '../Context';
import axios from 'axios';  // Add this line
import { Link, useNavigate } from 'react-router-dom';
// import "../Styles/Register.css"


export default function Register() {
  const { user, setUser } = useContext(myContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const nav=useNavigate()


  const handleRegistration = async (e) => {
    e.preventDefault();
    
    if (!name || !email || !password || !confirmPassword) {
        return alert("Please fill in all fields");
      }
      if (password !== confirmPassword) {
        return alert("Passwords do not match");
      }

    try {
      // Create a new user object
      const newUser = {
        name,
        email,
        password,
        confirmPassword
      };


      // Make an API request to register the user
      const response = await axios.post('http://localhost:5000/user/register', newUser);


      // Handle the response from the server
      console.log(response.data); // Assuming the server responds with a message
      alert("user Register success!!!!!")

      nav("/")

      // You can also handle success in other ways, e.g., redirect the user to a login page.


      // Clear the form fields
      setName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      // Handle registration failure
      console.error('Registration failed:', error.response.data);
      // You can update the state or show an error message to the user
      alert("Registration Failed")
    }
  };


  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase">
                    Logo
                  </h2>
                  <div className="mb-3">
                    <Form onSubmit={handleRegistration}>
                      <Form.Group className="mb-3" controlId="Name">
                        <Form.Label className="text-center">Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </Form.Group>


                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </Form.Group>


                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
  <Form.Label>Confirm Password</Form.Label>
  <Form.Control
    type="password"
    placeholder="Confirm Password"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
  />
</Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Create Account
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0 text-center">
                        Already have an account??{' '}
                        <Link to={'/'}  className="text-primary fw-bold">
                          Sign In
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
