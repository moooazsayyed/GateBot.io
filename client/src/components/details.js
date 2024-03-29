import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserData = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
        if (!token) {
          console.error('Token not found in localStorage');
          return;
        }
        const response = await axios.get('http://localhost:8005/api/gatebot/auth/user', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUserData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from localStorage
    window.location.href = '/logout'; // Redirect to a logout endpoint or home page
  };

  return (
    <div style={styles.container}>
      {userData ? (
        <>
          <p style={styles.email}>User Email: {userData.email}</p>
          <button style={styles.button} onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p style={styles.loading}>Loading...</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: 'red',
    color: 'white',
    textAlign: 'center',
    borderRadius: '8px',
    maxWidth: '400px',
    margin: 'auto',
    marginTop: '50px',
  },
  email: {
    fontSize: '18px',
    marginBottom: '10px',
  },
  button: {
    backgroundColor: 'white',
    color: 'red',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  loading: {
    fontSize: '18px',
    fontStyle: 'italic',
  },
};

export default UserData;
