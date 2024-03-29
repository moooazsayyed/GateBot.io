import React, { useState } from 'react';
import { isValidPhoneNumber } from 'libphonenumber-js';
import './AdminPage.css'; // Import the CSS file


function AdminPage() {
  const [showPopup, setShowPopup] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValid, setIsValid] = useState(false);

  const handleValidateNumber = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleValidate = () => {
    // Check if the phone number is valid
    const isValidNumber = isValidPhoneNumber(phoneNumber);

    if (isValidNumber) {
      setIsValid(true);
    } else {
      setIsValid(false);
      alert('Invalid phone number. Please enter a valid phone number.');
    }

    // Close the popup
    setShowPopup(false);
  };

  return (
    <div className="admin-page">
      <h1>Welcome, Admin!</h1>
      <p>This is the admin page.</p>
      <button onClick={handleValidateNumber}>Validate Number</button>
      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h2>Validate Phone Number</h2>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
            <button onClick={handleValidate}>Validate</button>
            <button onClick={handlePopupClose}>Cancel</button>
          </div>
        </div>
      )}
      {isValid && <p>Phone number is valid!</p>}
    </div>
  );
}

export default AdminPage;
