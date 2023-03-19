import React from 'react';
import Table from './Table';
import Podium from './Podium';
import './Table.css';
import './Podium.css';

function Results(){
  const data = [
    { id: 1, ranking: 1, model: 'Model A', year: 2020, safety: 8, speed: 9, comfort: 7, reliability: 9, image: 'path/to/image1.jpg' },
  { id: 2, ranking: 2, model: 'Model B', year: 2019, safety: 9, speed: 8, comfort: 8, reliability: 8, image: 'path/to/image2.jpg' },
  { id: 3, ranking: 3, model: 'Model C', year: 2021, safety: 9, speed: 9, comfort: 9, reliability: 7, image: 'path/to/image3.jpg' },
  { id: 4, ranking: 4, model: 'Model D', year: 2018, safety: 7, speed: 7, comfort: 8, reliability: 9, image: 'path/to/image4.jpg' },
  { id: 5, ranking: 5, model: 'Model E', year: 2022, safety: 10, speed: 8, comfort: 9, reliability: 9, image: 'path/to/image5.jpg' },
  { id: 6, ranking: 1, model: 'Model A', year: 2020, safety: 8, speed: 9, comfort: 7, reliability: 9, image: 'path/to/image1.jpg' },
  { id: 7, ranking: 2, model: 'Model B', year: 2019, safety: 9, speed: 8, comfort: 8, reliability: 8, image: 'path/to/image2.jpg' },
  { id: 8, ranking: 3, model: 'Model C', year: 2021, safety: 9, speed: 9, comfort: 9, reliability: 7, image: 'path/to/image3.jpg' },
  { id: 9, ranking: 4, model: 'Model D', year: 2018, safety: 7, speed: 7, comfort: 8, reliability: 9, image: 'path/to/image4.jpg' },
  { id: 10, ranking: 5, model: 'Model E', year: 2022, safety: 10, speed: 8, comfort: 9, reliability: 9, image: 'path/to/image5.jpg' }
  ];

  const updateRanking = () => {
    data.sort((a, b) => {
      const aScore = a.safety + a.speed + a.comfort + a.reliability;
      const bScore = b.safety + b.speed + b.comfort + b.reliability;
      return bScore - aScore;
    });

    data.forEach((car, index) => {
      car.ranking = index + 1;
    });
  };

  updateRanking();

  return (
    <div>
      <br />
      <br />
      <h1>Top 3 podium</h1>
      <Podium data={data}/>
      <br />
      <br />
      <h1>Overall results of all featured cars</h1>
      <Table data={data} />
    </div>
  );
}

export default Results;
