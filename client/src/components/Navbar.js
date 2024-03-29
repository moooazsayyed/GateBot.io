import React from 'react';

export default function Navbar() {
  return (
    <div>
      <div className="navbar">

        <div className="left">
          <div className="flat">
            <p>A-101</p>
          </div>
        </div>
        
        <div className="right">
          <div className="icon">
            <a href="#">🔍</a>
          </div>
          <div className="icon">
            <a href="visitor.html">🔔</a>
          </div>
          <div className="icon">
            <a href="#">💬</a>
          </div>
          <div className="icon">
            <a href="#">👤</a>
          </div>
        </div>

      </div>
    </div>
  );
}
