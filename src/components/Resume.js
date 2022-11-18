import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Header() {
  return (
    <section className="container skills mt-3">
      <div className="skillsCard">
      <FontAwesomeIcon icon="fa-solid fa-code" className="fa-2x"/>
        <h3>Technical Skills</h3>
          <p>
           HTML, CSS, JavaScript, jQuery, Bootstrap, Bulma, React.js, Node.js, Express.js, MySQL, NoSQL, Handlebars.js
          </p>
        <p id="skillsIcon" className='pb-3'>
          <FontAwesomeIcon icon="fab fa-html5" className="fa-2x px-2"/>
          <FontAwesomeIcon icon="fab fa-css3-alt" className="fa-2x px-2"/>
          <FontAwesomeIcon icon="fab fa-js-square" className="fa-2x px-2"/>
          <FontAwesomeIcon icon="fab fa-npm" className="fa-2x px-2"/>
          <FontAwesomeIcon icon="fab fa-node" className="fa-2x px-2"/>
          <FontAwesomeIcon icon="fab fa-react" className="fa-2x px-2"/>
        </p>
      <FontAwesomeIcon icon="fa-regular fa-file" className="fa-2x px-2"/>
        <h3>Resume</h3>
         <p>
         <a target="_blank" rel="noopener noreferrer" className='resume' href="assets/Marion_Sy_Resume.pdf">
           Marion Sy Resume </a>
         </p>
      </div>
    </section>
  );
}

export default Header;