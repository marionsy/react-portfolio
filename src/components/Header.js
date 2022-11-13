import React from 'react';
import Navbar from './Navigation';

const styles = {
  header: {
    background: 'pink',
  },
}

function Header( { currentPage, handlePageChange } ) {
  return (
    <header style= {styles.header} className="header">
      <h1>Marion Sy</h1>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  );
}

export default Header;