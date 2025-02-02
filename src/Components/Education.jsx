import React from 'react';
import '../css/Education.css';

const Education = ({ institution, degree, fieldOfStudy, startDate, endDate, description, logo, colour }) => {
    return (
      <div className="outer">
        <div className="education-card" style = {{"background-color" : colour }}>
          <div className="education-card-left">
            <img src={logo} alt={`${institution} logo`} className="education-logo" />
          </div>
          <div className="education-card-right">
            <div className="education-card-header">
              <h2>{institution}</h2>
              <p className="education-dates">{startDate} - {endDate}</p>
            </div>
            <div className="education-card-body">
              <p className='education-card-degree'> {fieldOfStudy? degree + " - " + fieldOfStudy : degree}</p>
              <p className="education-description" dangerouslySetInnerHTML={{ "__html": description }}></p>
            </div>
            <div className="education-card-footer">
            </div>
          </div>
        </div>
      </div>
    );
};

export default Education;