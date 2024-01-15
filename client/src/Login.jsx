import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './app.css'; // Import the CSS file

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data === "Success") {
          navigate('/tabela');
        }
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="container"> {/* Use the .container class from app.css */}
      <div className="form-container"> {/* Use the .form-container class from app.css */}
        <h2><center> Login</center></h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group mb-3"> {/* Use the .form-group class from app.css */}
            <label htmlFor="email" className="form-label"> {/* Use the .form-label class from app.css */}
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group mb-3"> {/* Use the .form-group class from app.css */}
            <label htmlFor="password" className="form-label"> {/* Use the .form-label class from app.css */}
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary w-100 rounded-0"> {/* Use the .btn-primary class from app.css */}
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
