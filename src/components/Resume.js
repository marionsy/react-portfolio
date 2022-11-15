import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {
  return (
    // <p>
    // <a target="_blank" rel="noopener noreferrer" href="assets/Marion_Sy_Resume">
    //     Marion Sy Resume
    // </a>
    // </p>

<section className="container skills">
<div className="skillsCard">
  <FontAwesomeIcon icon="fa-solid fa-code" />
  <h3>Technical Skills</h3>
  <p>
    HTML, CSS, JavaScript, jQuery, Bootstrap, Bulma, React.js, Node.js, Express.js, MySQL, NoSQL, Handlebars.js
  </p>
  <p id="skillsIcon">
    <FontAwesomeIcon icon="fab fa-html5" />
    <FontAwesomeIcon icon="fab fa-css3-alt" />
    <FontAwesomeIcon icon="fab fa-js-square" />
    <FontAwesomeIcon icon="fab fa-npm" />
    <FontAwesomeIcon icon="fab fa-node" />
    <FontAwesomeIcon icon="fab fa-react" />
  </p>
</div>
</section>
  );
}

export default Header;