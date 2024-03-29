import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faBell, faMessage } from '@fortawesome/free-regular-svg-icons';

export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="container">
          <div className="Wingdetails">
            <div className="membership">
              <p>Free</p>
            </div>
            <div className="flat">
              <p>A -101</p>
            </div>
          </div>
          <div className="icon">
            <a href="#"><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: '#000000' }} /></a>
          </div>
          <div className="icon">
            <a href="visitor.html"><FontAwesomeIcon icon={faBell} style={{ color: '#000000' }} /></a>
          </div>
          <div className="icon">
            <a href="#"><FontAwesomeIcon icon={faMessage} style={{ color: '#000000' }} /></a>
          </div>
          <div className="account">
          <Link to="/home/details">
          <img src="https://preview.redd.it/htd1cssoujc51.png?auto=webp&s=ea7a4436e56a4e9e5da43549b7bb90aefd842195" alt="" />
          </Link>
         </div>
        </div>
      </div>
    </div>
  );
}
