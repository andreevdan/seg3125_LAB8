import React from 'react';
import './CarCard.css';

const CarCardfr = ({ image, safety, speed, comfort, reliability }) => {
  return (
    <div className="car-card">
      <img src={image} alt="Car" className="car-image" />
      <div className="attributes">
        <div className="attribute">
          <span className="attribute-title">Sécurité:</span>
          <span className="attribute-value">{safety}</span>
        </div>
        <div className="attribute">
          <span className="attribute-title">Vitesse:</span>
          <span className="attribute-value">{speed}</span>
        </div>
        <div className="attribute">
          <span className="attribute-title">Comfort:</span>
          <span className="attribute-value">{comfort}</span>
        </div>
        <div className="attribute">
          <span className="attribute-title">Fiabilité:</span>
          <span className="attribute-value">{reliability}</span>
        </div>
      </div>
    </div>
  );
};

export default CarCardfr;
