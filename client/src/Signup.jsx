import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './app.css'; // Import the CSS file

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/register', { name, email, password })
      .then(result => {
        console.log(result);
        navigate('/login');
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="container"> {/* Use the .container class from app.css */}
      <div className="form-container"> {/* Use the .form-container class from app.css */}
        <h2><center>Register</center></h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3"> {/* Use the .form-group class from app.css */}
            <label htmlFor="name"> {/* No need for .form-label class as it's not explicitly styled */}
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              name="name"
              className="form-control rounded-0"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group mb-3"> {/* Use the .form-group class from app.css */}
            <label htmlFor="email"> {/* No need for .form-label class as it's not explicitly styled */}
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0" 
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mb-3"> {/* Use the .form-group class from app.css */}
            <label htmlFor="password"> {/* No need for .form-label class as it's not explicitly styled */}
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0" 
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 rounded-0">
            Register
          </button>
        </form>
        <p>Already Have an Account</p>
        <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;
