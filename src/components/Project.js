import React from 'react';

function Project() {
  return (
    <div className="col-xs-12 col-sm-12 col-lg-4 mb-4">
        <div className="card text-center h-100">
          <img src="assets/mynb.jpg" className="card-img-top border-bottom" alt="Screenshot of Meet Your New Bestfriend" />
          <div className="card-body mb-5 pl-0">
            <h3>Meet Your New Bestfriend</h3>
            <p className="card-text">
              A cute app that lets users input dog breeds then be presented with a picture of the breed as well as a
              random generated name and fun facts.
            </p>
            <p className="card-text">
              <small>
                Features: HTML, CSS, jQuery, APIs
              </small>
            </p>
            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
              <a href="https://marionsy.github.io/meet-your-new-bestfriend/" target="_blank" className="btn">
                <i className="fab fa-github"></i> Github</a>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Project;