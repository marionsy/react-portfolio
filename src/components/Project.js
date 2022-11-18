import React from 'react';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Project({title, image, description, features, link, github}) {
  return (
    <Col xs={4}>
      <div className="card text-center mt-3 projects">
        <img src={image} className="card-img-top border-bottom" alt={title} />
        <div className="card-body mb-5 pb-3 pl-0">
          <h4>{title}</h4>
          <p className="card-text">
            <small>
              {description}
            </small>
          </p>
          <p className="card-text">
            <small>
              Features: {features}
            </small>
          </p>
          <div className="gitLinks w-100  pt-3 pl-0 ">
            <a href={link} target="_blank" className="btn">
            <FontAwesomeIcon icon="fa-solid fa-link" className="fa-2x"/>
            </a>
         
            <a href={github} target="_blank" className="btn">
            <FontAwesomeIcon icon={["fab", "github"]} className="fa-2x"/>
            </a>
            </div>
        </div>
      </div>
    </Col>
  )
}

export default Project;