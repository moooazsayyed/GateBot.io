import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Register() {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [wing, setWing] = useState("");
  const [flatNumber, setFlatNumber] = useState("");
  const history = useHistory();

  async function getFormData(e) {
    e.preventDefault();
    
    // Form data object in the specified format
    const formData = {
      email: email,
      password1: password1,
      password2: password2,
      wing: wing,
      flatNumber: flatNumber,
    };

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json", // Corrected content type
        },
        body: JSON.stringify(formData), // Fixed typo FormData to formData
      });

      if (!response.ok) {
        throw new Error('Failed to register user');
      }

      // Redirect the user after successful registration
      history.push('/');
    } catch (error) {
      console.error("Error registering user:", error);
    }
  }

  return (
    <div className="register-page">
      <div className="form">
        <form className="register-form" onSubmit={getFormData}>
          <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e) => setPassword1(e.target.value)} />
          <input type="password" placeholder="Confirm Password" onChange={(e) => setPassword2(e.target.value)} />
          <select onChange={(e) => setWing(e.target.value)}>
            <option value="">Select Wing</option>
            <option value="A">Wing A</option>
            <option value="B">Wing B</option>
            {/* Add more wings if needed */}
          </select>
          <input type="text" placeholder="Flat Number" onChange={(e) => setFlatNumber(e.target.value)} />
          <button type="submit">Register</button>
          <p className="message">Already registered?{' '}
            <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;