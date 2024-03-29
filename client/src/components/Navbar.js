import React from 'react';
import './navbar.css';

export default function Navbar() {
  return (
    <div>
      <div className="navbar">

        <div className="flat">
          <p>A-101</p>
        </div>

        <div className="icons">
          <a href="#">🔍</a>
          <a href="visitor.html">🔔</a>
          <a href="community">💬</a>
          <a href="#">👤</a>
        </div>

      </div>
    </div>
  );
}
