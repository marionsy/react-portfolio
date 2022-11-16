import React from 'react';
import '../App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function About() {
  return (
    <Container>
      <Row>
    <section id="about" className="container">
    <div className="container">
      <h2 className="header-title text-center mt-3">About Me</h2>
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
  </Row>
    </Container>
  );
}

export default About;