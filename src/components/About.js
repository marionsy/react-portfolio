import React from 'react';

function About() {
  return (
    <section id="about" className="container">
    <div className="container">
      <h1 className="header-title">About Me.</h1>
      <div class="col-sm-6 col-m-12 m-auto text-center">
        <img src="assets/marion.jpg" className="img-fluid" />
      </div>
      <h4 className="subtitle">
        I am an Fullstack Web Developer with a passion for simple and clean UI. I am also a registered nurse with more
        than five years of experience in specialties such as dialysis, medical-surgical, wound and ortho.
      </h4>
    </div>
  </section>
  );
}

export default About;