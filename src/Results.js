import React from 'react';
import Table from './Table';
import Podium from './Podium';
import './Table.css';
import './Podium.css';
import HelpButton from './HelpButton';

function Results(){
  //TODO: Fix
  //get data from json file:
  let infoRead = JSON.parse('data.json');

    const data = [
    {
      id: 1,
      ranking: 1,
      model: 'Model A',
      year: 2020,
      safety: 8,
      speed: 9,
      comfort: 7,
      reliability: 9,
      image:
        'https://www.motortrend.com/uploads/sites/5/2021/05/2021-honda-accord-sport-2-0t-15.jpg?fit=around%7C875:492',
    },
    {
      id: 2,
      ranking: 2,
      model: 'Model B',
      year: 2019,
      safety: 9,
      speed: 8,
      comfort: 8,
      reliability: 8,
      image:
        'https://hips.hearstapps.com/hmg-prod/images/2023-honda-cr-v-hybrid-awd-touring-414-edit-1665754236.jpg?crop=0.654xw:0.734xh;0.117xw,0.266xh&resize=640:*',
    },
    {
      id: 3,
      ranking: 3,
      model: 'Model C',
      year: 2021,
      safety: 9,
      speed: 9,
      comfort: 9,
      reliability: 7,
      image:
        'https://hips.hearstapps.com/hmg-prod/images/2022-honda-civic-sport-287-1648742553.jpg?crop=0.674xw:0.568xh;0.0717xw,0.415xh&resize=1200:*',
    },
    {
      id: 4,
      ranking: 4,
      model: 'Model D',
      year: 2018,
      safety: 7,
      speed: 7,
      comfort: 8,
      reliability: 9,
      image:
        'https://hips.hearstapps.com/hmg-prod/images/c-005-1500x1000-1652713137.jpg?crop=0.891xw:1.00xh;0.0554xw,0&resize=640:*',
    },
    {
      id: 5,
      ranking: 5,
      model: 'Model E',
      year: 2022,
      safety: 10,
      speed: 8,
      comfort: 9,
      reliability: 9,
      image:
        'https://media.ed.edmunds-media.com/toyota/corolla/2023/oem/2023_toyota_corolla_sedan_xse_fq_oem_1_1600.jpg',
    },
    {
      id: 6,
      ranking: 1,
      model: 'Model A',
      year: 2020,
      safety: 8,
      speed: 9,
      comfort: 7,
      reliability: 9,
      image:
        'https://hips.hearstapps.com/hmg-prod/images/2023-toyota-highlander-front-three-quarters-1652203180.jpg?crop=0.871xw:0.655xh;0.0749xw,0.213xh&resize=1200:*',
    },
    {
      id: 7,
      ranking: 2,
      model: 'Model B',
      year: 2019,
      safety: 9,
      speed: 8,
      comfort: 8,
      reliability: 8,
      image: 'https://hips.hearstapps.com/hmg-prod/images/2023-toyota-highlander-front-three-quarters-1652203180.jpg?crop=0.871xw:0.655xh;0.0749xw,0.213xh&resize=1200:*'
    },
    {
      id: 8,
      ranking: 3,
      model: 'Model C',
      year: 2021,
      safety: 9,
      speed: 9,
      comfort: 9,
      reliability: 7,
      image: 'https://hips.hearstapps.com/hmg-prod/images/2023-toyota-highlander-front-three-quarters-1652203180.jpg?crop=0.871xw:0.655xh;0.0749xw,0.213xh&resize=1200:*'
    },
    {
      id: 9,
      ranking: 4,
      model: 'Model D',
      year: 2018,
      safety: 7,
      speed: 7,
      comfort: 8,
      reliability: 9,
      image: 'https://hips.hearstapps.com/hmg-prod/images/2023-toyota-highlander-front-three-quarters-1652203180.jpg?crop=0.871xw:0.655xh;0.0749xw,0.213xh&resize=1200:*'
    },
    {
      id: 10,
      ranking: 5,
      model: 'Model E',
      year: 2022,
      safety: 10,
      speed: 8,
      comfort: 9,
      reliability: 9,
      image: 'https://hips.hearstapps.com/hmg-prod/images/2023-toyota-highlander-front-three-quarters-1652203180.jpg?crop=0.871xw:0.655xh;0.0749xw,0.213xh&resize=1200:*'
    }
    ];

    //If data read feals, use const data placeholder, else use json file data
    if(infoRead != null){
      data = infoRead;
    }

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
      <div className='help'><HelpButton/></div>
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
