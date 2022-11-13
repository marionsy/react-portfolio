import React from 'react';

function Navbar({ currentPage, handlePageChange }) {
  return (
    <div>
      <a className="nav-link" href="#about" onClick={() => handlePageChange('About')}>About Me</a>
      <a className="nav-link" href="#portfolio" onClick={() => handlePageChange('Project')}>Portfolio</a>
      <a className="nav-link" href="#contact">Contact</a>
      <a className="nav-link" href="#resume">Resume</a>
    </div>
  );
}

export default Navbar;