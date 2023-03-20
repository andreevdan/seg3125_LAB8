import React from 'react';
import './CarCard.css';

const CarVoteCard = ({image}) => {
  return (
    <div className="car-card">
      <img src={image} alt="Car" className="car-image" />
      <div className="attributes">
        <div className="attribute" style={{justifyContent:"left"}}>
          <span className="attribute-title">Safety:</span>
          <div style={{justifyContent:"right", marginLeft:215}}>
            <input type="text" className="form-control" style={{width: 10, fontWeight:"bold", fontSize:14}} name="Safety"/>
            <span className="attribute-title">/5</span>
          </div>
        </div>
        <div className="attribute" style={{justifyContent:"left"}}>
          <span className="attribute-title">Comfort:</span>
          <div style={{justifyContent:"right", marginLeft:202}}>
            <input type="text" className="form-control" style={{width: 10, fontWeight:"bold", fontSize:14}} name="Safety" />
            <span className="attribute-title">/5</span>
          </div>
        </div>
        <div className="attribute" style={{justifyContent:"left"}}>
          <span className="attribute-title">Reliability:</span>
          <div style={{justifyContent:"right", marginLeft:192}}>
            <input type="text" className="form-control" style={{width: 10, fontWeight:"bold", fontSize:14}} name="Safety"/>
            <span className="attribute-title">/5</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarVoteCard;
