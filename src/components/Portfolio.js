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
      link: 'https://marionsy.github.io/meet-your-new-bestfriend/',
      github: 'https://github.com/marionsy/meet-your-new-bestfriend.git',
    },
    {
      image: 'assets/css.jpg',
      title: 'CSS Snippet Cheatsheet',
      description: 'A simple cheatsheet that sllows users to view CSS style codes all in one place. Users are able to click anywhere in the box and copy the code to their clipboard.',
      features: 'HTML, CSS, Flexbox',
      link: 'https://marionsy.github.io/css-snippet-cheatsheet/',
      github: 'https://github.com/marionsy/css-snippet-cheatsheet.git',
    },
    {
      image: 'assets/pokedittobase.png',
      title: 'Poke Dittobase',
      description: 'A full-stack application that allows users to create an account, then view and save favorite pokemon. Users can also add friends and view their favorites as well.',
      features: 'Node.js, Express.js, MYSQL2, Sequelize',
      link: 'https://pokedittobase.herokuapp.com/',
      github: 'https://github.com/marionsy/poke-dittobase.git'
    },
    {
      image: 'assets/tech-blog.png',
      title: 'Tech Blog',
      description: 'A CMS-style blog where users can create blog posts, edit/delete them, and add comments to existing posts.',
      features: 'Node.js, Express.js, MySQL2, Sequelize, Handlebars.js',
      link: 'https://mysterious-depths-42715.herokuapp.com/',
      github: 'https://github.com/marionsy/tech-blog.git'
    },
    {
      image: 'assets/team-profile.png',
      title: 'Team Profile Generator',
      description: 'Node command line application that generates an HTML team profile based on user input about employees.',
      features: 'Javascript, Node.js, inquirer, jest',
      link: '',
      github: 'https://github.com/marionsy/team-profile-generator.git'
    },
    {
      image: 'assets/weather-dashboard.png',
      title: 'Weather Dashboard',
      description: 'Weather dashboard that utilized OpenWeather One Call API to display the weather for a selected city. The five day forecast is displayed',
      features: 'HTML, CSS, Bootstrap, jQuery, Openweather API',
      link: 'https://marionsy.github.io/weather-dashboard/',
      github: 'https://github.com/marionsy/weather-dashboard.git'
    }
  ]

  return (
    <Container>
      <Row>
      <h2 className="text-center mt-3"> Projects </h2>
        {projects.map((p) => 
        <Project 
          key = {p.title}
          image = {p.image}
          title={p.title} 
          description={p.description} 
          features={p.features} 
          link={p.link} 
          github={p.github}
        /> 
      )}
      </Row>
    </Container>
  );
}

export default Portfolio;