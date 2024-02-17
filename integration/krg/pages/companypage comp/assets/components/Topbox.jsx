// Topbox.js
import React from 'react';
import './Topbox.css';

function Topbox() {
  return (
    <nav className="navbar_companypage">
      <div className="logo">
        <img src="path/to/logo.png" alt="Logo" />
      </div>
      <div className="view-more">
        <a href='#'>View all jobs</a>
      </div>
    </nav>
  );
}

export default Topbox;
