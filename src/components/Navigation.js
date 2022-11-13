import React from 'react';

function Navbar({ currentPage, handlePageChange }) {
  return (
    <div>
      <a className="nav-link" href="#about" onClick={() => handlePageChange('About')}>About Me</a>
      <a className="nav-link" href="#portfolio" onClick={() => handlePageChange('Portfolio')}>Portfolio</a>
      <a className="nav-link" href="#contact" onClick={() => handlePageChange('Contact')}>Contact</a>
      <a className="nav-link" href="#resume" onClick={() => handlePageChange('Resume')}>Resume</a>
    </div>
  );
}

export default Navbar;