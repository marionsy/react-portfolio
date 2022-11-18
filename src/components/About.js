import React from 'react';
import '../App.css';

function About() {
  return (
    <section id="about" className="container mt-3">
      <h2 className="header-title text-center">About Me</h2>
        <div className="container about mr-5">
        <div className="col-6 text-center">
          <img src="assets/marion.jpg" className="img-fluid" />
        </div>
         <div className='col-6'>
      <h5 className="subtitle">
        I am an Fullstack Web Developer with a passion for simple and clean UI. I am also a registered nurse with more
        than five years of experience in specialties such as dialysis, medical-surgical, wound and ortho.
      </h5>
      </div>
    </div>
  </section>
  );
}

export default About;