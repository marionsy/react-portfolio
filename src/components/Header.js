import React from 'react';
import Navigation from './Navigation';
import { Container, Nav, Navbar } from 'react-bootstrap';

const styles = {
  header: {
    background: 'pink',
  },
};

function Header( { currentPage, handlePageChange } ) {
  return (
    <Navbar style= {styles.header} expand="lg">
      <Container>
        <Navbar.Brand>Marion Sy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      </Container>
    </Navbar>
  );
}

export default Header;