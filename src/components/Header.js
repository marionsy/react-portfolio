import React from 'react';
import Navbar from './Navigation';

const styles = {
  header: {
    background: 'pink',
  },
}

function Header() {
  return (
    <header style= {styles.header} className="header">
      <h1>Marion Sy</h1>
      <Navbar />
    </header>
  );
}

export default Header;