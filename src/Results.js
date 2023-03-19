import React from 'react';
import Table from './Table';
import Podium from './Podium';
import './Table.css';
import './Podium.css';




function Results(){
  const data = [
    { ranking: 1, model: 'Model A', year: 2020, safety: 8, speed: 9, comfort: 7, reliability: 9 },
    { ranking: 2, model: 'Model B', year: 2019, safety: 9, speed: 8, comfort: 8, reliability: 8 },
    { ranking: 3, model: 'Model C', year: 2021, safety: 9, speed: 9, comfort: 9, reliability: 7 },
    { ranking: 4, model: 'Model D', year: 2018, safety: 7, speed: 7, comfort: 8, reliability: 9 },
    { ranking: 5, model: 'Model E', year: 2022, safety: 10, speed: 8, comfort: 9, reliability: 9 },
    { ranking: 1, model: 'Model A', year: 2020, safety: 8, speed: 9, comfort: 7, reliability: 9 },
    { ranking: 2, model: 'Model B', year: 2019, safety: 9, speed: 8, comfort: 8, reliability: 8 },
    { ranking: 3, model: 'Model C', year: 2021, safety: 9, speed: 9, comfort: 9, reliability: 7 },
    { ranking: 4, model: 'Model D', year: 2018, safety: 7, speed: 7, comfort: 8, reliability: 9 },
    { ranking: 5, model: 'Model E', year: 2022, safety: 10, speed: 8, comfort: 9, reliability: 9 }
  ];
  return (
    <div>
      <br />
      <br />
      <h1>Top 3 podium</h1>
      <Podium data={data}/>
      <br />
      <br />
      <h1>Overrall results of all fetured cars</h1>
      <Table data={data} />
    </div>
  );
}

export default Results;