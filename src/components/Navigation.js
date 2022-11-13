import React from 'react';

function Navbar() {
  return (
    <div>
      <a className="nav-link" href="#about">About Me</a>
      <a className="nav-link" href="#portfolio">Portfolio</a>
      <a className="nav-link" href="#contact">Contact</a>
      <a className="nav-link" href="#resume">Resume</a>
    </div>
  );
}

export default Navbar;