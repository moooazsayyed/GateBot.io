import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

function Main() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false); // State to track if user is admin
  const [secretKey, setSecretKey] = useState("");
  const [loginError, setLoginError] = useState(""); // State to store login error message
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();
  
    const formData = {
      email: email,
      password: password,
      isAdmin: isAdmin, // Include isAdmin flag in the form data
      secretKey: isAdmin ? secretKey : null, // Include secretKey only if isAdmin is true
    };
  
    try {
      const response = await fetch('http://localhost:8005/api/gatebot/auth/login', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json(); // Parse JSON response
  
      if (!response.ok) {
        throw new Error(data.error || 'Failed to login');
      }
  
      // Assuming the token is returned in data.data.token and isAdmin status is also returned
      const { token, isAdmin } = data.data;
  
      // Store the token in localStorage
      localStorage.setItem('token', token);
  
      // Redirect to home page or admin page based on isAdmin flag
      if (isAdmin) {
        history.push('/admin'); // Redirect to admin page
      } else {
        history.push('/home'); // Redirect to home page for regular users
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setLoginError(error.message); // Update login error message
    }
  }
  
  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={handleLogin}>
          <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <label>
            <input type="checkbox" checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} />
            Admin
          </label>
          {isAdmin && (
            <input type="text" placeholder="Secret Key" value={secretKey} onChange={(e) => setSecretKey(e.target.value)} />
          )}
          <button type="submit">Login</button>
          {loginError && <p className="login-error">{loginError}</p>}
          <p className="message">
            Not registered? <Link to="/register">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Main;