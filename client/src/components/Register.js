import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const [role, setRole] = useState("user");
  const [wing, setWing] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  async function getFormData(e) {
    e.preventDefault();

    if (role === "admin" && !secretKey) {
      setMessage("Please enter a secret key");
      return;
    }

    const formData = {
      name: name,
      email: email,
      password: password,
      phone: phone,
      address: address,
      answer: answer,
      role: role === "admin" ? 1 : 0, // Set role to 1 for admin, 0 for user
      wing: role === "user" ? wing : null,
      secretKey: role === "admin" ? secretKey : null,
    };

    try {
      const response = await fetch('http://localhost:8005/api/gatebot/auth/register', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.message === "Email already exists, please use a different email") {
          setMessage(data.message);
        } else {
          setMessage('Failed to register user');
        }
      } else {
        setMessage("User registered successfully!");
        setTimeout(() => {
          setMessage("");
          history.push('/');
        }, 3000);
      }
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
          <input type="text" placeholder="Recovery Answer" onChange={(e) => setAnswer(e.target.value)} />
          <div>
            <label>
              <input type="radio" value="user" checked={role === "user"} onChange={() => setRole("user")} />
              User
            </label>
            <label>
              <input type="radio" value="admin" checked={role === "admin"} onChange={() => setRole("admin")} />
              Admin
            </label>
          </div>
          {role === "user" && (
            <input type="text" placeholder="Wing" onChange={(e) => setWing(e.target.value)} />
          )}
          {role === "admin" && (
            <input type="text" placeholder="Secret Key" onChange={(e) => setSecretKey(e.target.value)} />
          )}
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
