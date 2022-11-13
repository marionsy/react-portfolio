import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const styles = {
  footer: {
    width: 100,
    padding: '10px',
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
    // <div>
    // <footer style={styles.footer}>
    //  <h2 style={styles.h2}> Made with love! </h2>
    // </footer>
    // </div>
    <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
    <FontAwesomeIcon icon={["fab", "github"]} />
      <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
        {/* <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg> */}
      </a>
      <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
    </div>

    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#twitter"></use></svg></a></li>
      <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#instagram"></use></svg></a></li>
      <li className="ms-3"><a className="text-muted" href="#"><svg className="bi" width="24" height="24"><use xlinkHref="#facebook"></use></svg></a></li>
    </ul>
  </footer>
</div>
  );
}

export default Footer;