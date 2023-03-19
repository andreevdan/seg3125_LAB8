import React from 'react';
import './Podium.css';

const Podium = ({ data }) => {
  // Sort the data by ranking and get the top 3 items
  const topThree = data.sort((a, b) => a.ranking - b.ranking).slice(0, 3);

  return (
    <div className="podium">
      <div className="podium-item gold">
        <h3>1st</h3>
        <img src={topThree[0].image} alt={`${topThree[0].model} image`} />
        <h4>{topThree[0].model}</h4>
      </div>
      <div className="podium-item silver">
        <h3>2nd</h3>
        <img src={topThree[1].image} alt={`${topThree[1].model} image`} />
        <h4>{topThree[1].model}</h4>
      </div>
      <div className="podium-item bronze">
        <h3>3rd</h3>
        <img src={topThree[2].image} alt={`${topThree[2].model} image`} />
        <h4>{topThree[2].model}</h4>
      </div>
    </div>
  );
};

export default Podium;
