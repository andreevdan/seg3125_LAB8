import React from 'react';
import './CarCard.css';

const CarCard = ({ image, safety, speed, comfort, reliability }) => {
  return (
    <div className="car-card">
      <img src={image} alt="Car" className="car-image" />
      <div className="attributes">
        <div className="attribute">
          <span className="attribute-title">Safety:</span>
          <span className="attribute-value">{safety}</span>
        </div>
        <div className="attribute">
          <span className="attribute-title">Speed:</span>
          <span className="attribute-value">{speed}</span>
        </div>
        <div className="attribute">
          <span className="attribute-title">Comfort:</span>
          <span className="attribute-value">{comfort}</span>
        </div>
        <div className="attribute">
          <span className="attribute-title">Reliability:</span>
          <span className="attribute-value">{reliability}</span>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
