import React from 'react';
import '../css/ProjectCard.css';

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <div className="project-card">
      <div className="project-card-inner">
        <div className="project-card-front">
          <img src={image} alt={title} className="project-card-image" />
        </div>
        <div className="project-card-back">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
          <a href={link} className="project-link">View Project</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
