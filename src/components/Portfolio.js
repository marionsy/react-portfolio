import React from 'react';
import Project from './Project';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Portfolio() {
  const projects = [
    {
      image: 'assets/mynb.jpg',
      title: 'Meet Your New Bestfriend',
      description: 'A cute app that lets users input dog breeds then be presented with a picture of the breed as well as a random generated name and fun facts.',
      features: 'HTML, CSS, jQuery, APIs',
      link: 'https://marionsy.github.io/meet-your-new-bestfriend/'
    },
    {
      image: 'assets/css.jpg',
      title: 'CSS Snippet Cheatsheet',
      description: 'A simple cheatsheet that sllows users to view CSS style codes all in one place.',
      features: 'HTML, CSS, Flexbox',
      link: 'https://marionsy.github.io/css-snippet-cheatsheet/'
    },
    {
      image: 'assets/pokedittobase.png',
      title: 'Poke Dittobase',
      description: 'A full-stack application that allows users to create an account, then view and save favorite pokemon. Users can also add friends and view their favorites as well.',
      features: 'Javascript, Node.js, Express.js, MYSQL2, Sequelize, and Bootstrap',
      link: 'https://pokedittobase.herokuapp.com/'
    },
    {
      image: 'assets/mynb.jpg',
      title: 'Meet Your New Bestfriend',
      description: 'A cute app that lets users input dog breeds then be presented with a picture of the breed as well as a random generated name and fun facts.',
      features: 'HTML, CSS, jQuery, APIs',
      link: 'https://marionsy.github.io/meet-your-new-bestfriend/'
    },
    {
      image: 'assets/css.jpg',
      title: 'CSS Snippet Cheatsheet',
      description: 'A simple cheatsheet that sllows users to view CSS style codes all in one place.',
      features: 'HTML, CSS, Flexbox',
      link: 'https://marionsy.github.io/css-snippet-cheatsheet/'
    },
    {
      image: 'assets/pokedittobase.png',
      title: 'Poke Dittobase',
      description: 'A full-stack application that allows users to create an account, then view and save favorite pokemon. Users can also add friends and view their favorites as well.',
      features: 'Javascript, Node.js, Express.js, MYSQL2, Sequelize, and Bootstrap',
      link: 'https://pokedittobase.herokuapp.com/'
    }
  ]

  
  return (
    <Container>
      <Row>
        {projects.map((p) => 
        <Project 
          key = {p.title}
          image = {p.image}
          title={p.title} 
          description={p.description} 
          features={p.features} 
          link={p.link} 
        /> 
      )}
      </Row>
    </Container>
    // <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
    //   {projects.map((p) => 
    //     <Project 
    //       key = {p.title}
    //       image = {p.image}
    //       title={p.title} 
    //       description={p.description} 
    //       features={p.features} 
    //       link={p.link} 
    //     /> 
    //   )}
    // </div>
  );
}

export default Portfolio;