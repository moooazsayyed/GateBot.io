import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const [role, setRole] = useState(0); // Initialize role as 0 (user)
  const [wing, setWing] = useState("");
  const [flatNo, setFlatNo] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [securityQuestion, setSecurityQuestion] = useState(""); // Define the state for security question
  const [message, setMessage] = useState("");
  const history = useHistory();

  async function getFormData(e) {
    e.preventDefault();

    if (role === 1 && !secretKey) { // Check if role is admin and secretKey is empty
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
      role: role, // Use the role value directly
      wing: role === 0 ? wing : null, // Conditionally include wing and flatNo based on role
      flatNo: role === 0 ? flatNo : null,
      secretKey: role === 1 ? secretKey : null, // Include secretKey only if role is admin
      securityQuestion: securityQuestion, // Include the security question in the form data
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
          <h4>Choose your security question?</h4>
          <select value={securityQuestion} onChange={(e) => setSecurityQuestion(e.target.value)}>
            <option value="">Select a security question</option>
            <option value="What is your mother's maiden name?">What is your mother's maiden name?</option>
            <option value="What is the name of your first pet?">What is the name of your first pet?</option>
            <option value="In what city were you born?">In what city were you born?</option>
            <option value="What is your favorite movie?">What is your favorite movie?</option>
          </select>

          <input type="text" placeholder="Recovery Answer" onChange={(e) => setAnswer(e.target.value)} />
          <div>
            <label>
              <input type="radio" value={0} checked={role === 0} onChange={() => setRole(0)} />
              User
            </label>
            <label>
              <input type="radio" value={1} checked={role === 1} onChange={() => setRole(1)} />
              Admin
            </label>
          </div>
          {role === 0 && ( // Show wing and flatNo fields for users
            <>
              <input type="text" placeholder="Wing" onChange={(e) => setWing(e.target.value)} />
              <input type="number" placeholder="Flat No" onChange={(e) => setFlatNo(e.target.value)} />
            </>
          )}
          {role === 1 && ( // Show secretKey field for admins
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