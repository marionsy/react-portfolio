import React from 'react';
import '../App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <Navbar.Collapse id="basic-navbar-nav" className='right-aligned'>
      <Nav className="ml-auto">
        <Nav.Link href="#about" onClick={() => handlePageChange('About')}>About Me</Nav.Link>
        <Nav.Link href="#portfolio" onClick={() => handlePageChange('Portfolio')}>Portfolio</Nav.Link>
        <Nav.Link href="#contact" onClick={() => handlePageChange('Contact')}>Contact</Nav.Link>
        <Nav.Link href="#resume" onClick={() => handlePageChange('Resume')}>Resume</Nav.Link>      
      </Nav>
    </Navbar.Collapse>
  );
}

export default Navigation;