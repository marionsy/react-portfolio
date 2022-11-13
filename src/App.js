import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Project') {
      return <Project />;
    }
    // if (currentPage === 'Contact') {
    //   return <Contact />;
    // }
    // if (currentPage === 'Resume') {
    //   return <Resume />;
    // }
    return <About />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
    <Header currentPage={currentPage} handlePageChange={handlePageChange} />
    {renderPage()}
    <Footer />
  </div>
  );
}

export default App;
