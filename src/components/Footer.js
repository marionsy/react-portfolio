import React from 'react';

const styles = {
  footer: {
    width: 100,
    padding: '10px',
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'center',
  },
  h2: {
    justifyContent: 'center',
  },
}

function Footer() {
  return (
    <div>
    <footer style={styles.footer}>
     <h2 style={styles.h2}> Made with love! </h2>
    </footer>
    </div>
  );
}

export default Footer;