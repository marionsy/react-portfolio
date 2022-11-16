import React from 'react';
import Navigation from './Navigation';
import { Container, Nav, Navbar } from 'react-bootstrap';

const styles = {
  header: {
    backgroundColor: '#e0afa0',
  },
  name: {
    fontSize: '30px',
  },
};

function Header( { currentPage, handlePageChange } ) {
  return (
    <Navbar style= {styles.header} expand="lg">
      <Container>
        <Navbar.Brand className="marion" style= {styles.name}>Marion Sy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      </Container>
    </Navbar>
  );
}

export default Header;