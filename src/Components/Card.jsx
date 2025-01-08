import React from 'react';
import "../css/Card.css";
const Card = ({svg, company, img, badge, title, timePeriod, description, backgroundColor}) => {
  return (
      <div className="card-experience">
        <div className="content">
          <div className="back">
            <div className="back-content">
              {svg}
            <strong style = {{"color" : backgroundColor}}>{company}</strong>
            </div>
          </div>
          <div className="front">
            <div className="front-content">
              <div className="img-container" style = {{"background-color":backgroundColor}}>
              {img}
              </div>
              <small className="badge">{badge}</small>
              <div className="description">
                <div className="in-line">
                  <div className="title">{title}</div>
                  <div className="time-period">{timePeriod}</div>
                </div>
                <p className="card-footer">
                {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Card;
