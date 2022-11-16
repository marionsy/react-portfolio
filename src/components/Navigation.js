import React from 'react';
import '../App.css';
import { Nav, Navbar } from 'react-bootstrap';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <Navbar.Collapse id="basic-navbar-nav" className='right-aligned'>
      <Nav className="ml-auto mb-2">
        <Nav.Link href="#about" className="mt-5" onClick={() => handlePageChange('About')}>About Me</Nav.Link>
        <Nav.Link href="#portfolio" className="mt-5" onClick={() => handlePageChange('Portfolio')}>Portfolio</Nav.Link>
        <Nav.Link href="#contact" className="mt-5" onClick={() => handlePageChange('Contact')}>Contact</Nav.Link>
        <Nav.Link href="#resume" className="mt-5" onClick={() => handlePageChange('Resume')}>Resume</Nav.Link>      
      </Nav>
    </Navbar.Collapse>
  );
}

export default Navigation;