import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faUser, faMotorcycle, faCar, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="icon">
          <a href="#"><FontAwesomeIcon icon={faPhone} style={{ color: '#ffffff' }} /></a>
          <span>MISSED</span>
        </div>
        <div className="icon">
        <Link to="/guestform" ><FontAwesomeIcon icon={faUser} style={{ color: '#ffffff' }} /></Link>          <span>GUEST</span>
        </div>
        <div className="icon">
        <Link to="/deliveryform" ><FontAwesomeIcon icon={faMotorcycle} style={{ color: '#ffffff' }} /></Link>
          <span>DELIVERY</span>
        </div>
        <div className="icon">
        <Link to="/cabform" ><FontAwesomeIcon icon={faCar} style={{ color: '#ffffff' }} /></Link>
          <span>CAB</span>
        </div>
        <div className="icon">
          <a href="#"><FontAwesomeIcon icon={faPlus} style={{ color: '#ffffff' }} /></a>
          <span>MORE</span>
        </div>
        <div className="mandal-technologies">
          Mandal Technologies
        </div>
      </div>
    </div>
  );
}
