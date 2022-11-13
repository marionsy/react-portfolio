import React from 'react';

function Project({title, image, description, features, link}) {
  return (
        <div className="card text-center h-100">
          <img src={image} className="card-img-top border-bottom" alt={title} />
          <div className="card-body mb-5 pl-0">
            <h3>{title}</h3>
            <p className="card-text">
              {description}
            </p>
            <p className="card-text">
              <small>
                Features: {features}
              </small>
            </p>
            <div className="gitLinks w-100 py-3 pt-3 pl-0 position-absolute">
              <a href={link} target="_blank" className="btn">
                <i className="fab fa-github"></i> Github</a>
            </div>
          </div>
        </div>
  )
}

export default Project;