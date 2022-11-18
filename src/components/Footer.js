import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = {
  icon: {
    color: 'black',
  },
  footer: {
    backgroundColor:'#e0afa0',
  },
};

function Footer() {
  return (
    <div className="container-fluid footer pb-2 mt-5" style={styles.footer}>
    <footer className="d-flex flex-wrap justify-content-center pt-2 mb-4 border-top">
      <div className="col-md-4 d-flex align-items-center justify-content-center">
    
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/marionsy/" className="mt-5 mb-3 me-2 mb-md-0 px-2 text-center text-decoration-none lh-1 fa-2x">
      <FontAwesomeIcon icon={["fab", "github"]} style={styles.icon} />
      </a>

      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/marionsy/" className="mt-5 mb-3 me-2 mb-md-0 px-2 text-center text-decoration-none lh-1 fa-2x">
      <FontAwesomeIcon icon="fab fa-linkedin-in" style={styles.icon}  />
      </a>

      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/j0llymango" className=" mt-5 mb-3 me-2 mb-md-0 px-2 text-center text-decoration-none lh-1 fa-2x">
      <FontAwesomeIcon icon="fab fa-twitter" style={styles.icon} />
      </a>

      <span className="mt-5 mb-3 mb-md-0 text-center marion">© Marion Sy</span>
      </div>
    </footer>
    </div>
  );
}

export default Footer;