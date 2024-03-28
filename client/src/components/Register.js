import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  async function getFormData(e) {
    e.preventDefault();
    
    const formData = {
      name: name,
      email: email,
      password: password,
      phone: phone,
      address: address,
      answer: answer,
    };

    try {
      const response = await fetch('http://localhost:8005/api/gatebot/auth/register', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to register user');
      }

      setMessage("User registered successfully!");
      setTimeout(() => {
        setMessage("");
        history.push('/');
      }, 3000);
    } catch (error) {
      console.error("Error registering user:", error);
      setMessage("Failed to register user. Please try again.");
    }
  }

  return (
    <div className="register-page">
      <div className="form">
        {message && <div className="message">{message}</div>}
        <form className="register-form" onSubmit={getFormData}>
          <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          <input type="text" placeholder="Phone" onChange={(e) => setPhone(e.target.value)} />
          <input type="text" placeholder="Address" onChange={(e) => setAddress(e.target.value)} />
          <input type="text" placeholder="Answer" onChange={(e) => setAnswer(e.target.value)} />
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
