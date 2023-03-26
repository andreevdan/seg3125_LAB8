import React from 'react';
import Table from './Table';
import Podium from './Podium';
import './Table.css';
import './Podium.css';
import HelpButton from './HelpButton';

function Resultsfr() {
  // Use the data from the JSON file
  const carData = require('./data.json').data.map(car => ({
    id: car.id,
    ranking: car.ranking,
    model: car.model,
    year: car.year,
    safety: car.safety,
    speed: car.speed,
    comfort: car.comfort,
    reliability: car.reliability,
    image: car.image,
  }));

  const updateRanking = () => {
    carData.sort((a, b) => {
      const aScore = a.safety + a.speed + a.comfort + a.reliability;
      const bScore = b.safety + b.speed + b.comfort + b.reliability;
      return bScore - aScore;
    });

    carData.forEach((car, index) => {
      car.ranking = index + 1;
    });
  };

  updateRanking();

  return (
    <div>
      <div className='help'><HelpButton/></div>
      <br />
      <br />
      <h1 className='title' style={{marginTop: 30}}>Top 3 podium</h1>
      <Podium data={carData}/>
      <br />
      <br />
      <h1 style={{textAlign: "center"}}>Résultats globaux de toutes les voitures en vedette</h1>
      <Table data={carData} />
    </div>
  );
}

export default Resultsfr;
