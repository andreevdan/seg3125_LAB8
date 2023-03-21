import React from 'react';
import CarVoteCard from './CarVoteCard';
import './Vote.css';
import HelpButton from './HelpButton';

const Vote = () => {

  //TODO: Fix
  //get data from json file:
  let infoRead = JSON.parse('data.json');

  //update data:
    //add to infoRead
    //info = infoRead

  //write data to json file:
    //data = JSON.stringify(info);
    //fs.writeFileSync('./data/' + fileName + '.json', data);

  return (
    <div>
      <div className='help'><HelpButton/></div>
      <div className="container">
        <h1 className='title' style={{marginTop: 50}}>Vote below to help us find the best car</h1>
        <p className='title'>Enter speed, reliability and comfort ratings for at least one of the below cars and submit the form to update our results!</p>
        <div className="car-grid">
          <div className="car-row">
            <h2 className="brand-label">Honda</h2>
            <div>
              <CarVoteCard
                image="https://www.motortrend.com/uploads/sites/5/2021/05/2021-honda-accord-sport-2-0t-15.jpg?fit=around%7C875:492"
              />
            </div>
            <div>
              <CarVoteCard
                image="https://hips.hearstapps.com/hmg-prod/images/2023-honda-cr-v-hybrid-awd-touring-414-edit-1665754236.jpg?crop=0.654xw:0.734xh;0.117xw,0.266xh&resize=640:*"
                />
            </div>
            <div>
              <CarVoteCard
                image="https://hips.hearstapps.com/hmg-prod/images/2022-honda-civic-sport-287-1648742553.jpg?crop=0.674xw:0.568xh;0.0717xw,0.415xh&resize=1200:*"
                />
            </div>
          </div>
          <div className="car-row">
            <h2 className="brand-label">Toyota</h2>
            <div>
              <CarVoteCard
                image="https://hips.hearstapps.com/hmg-prod/images/c-005-1500x1000-1652713137.jpg?crop=0.891xw:1.00xh;0.0554xw,0&resize=640:*"
                />
            </div>
            <div>
              <CarVoteCard
                image="https://media.ed.edmunds-media.com/toyota/corolla/2023/oem/2023_toyota_corolla_sedan_xse_fq_oem_1_1600.jpg"
                />
            </div>
            <div>
              <CarVoteCard
                image="https://hips.hearstapps.com/hmg-prod/images/2023-toyota-highlander-front-three-quarters-1652203180.jpg?crop=0.871xw:0.655xh;0.0749xw,0.213xh&resize=1200:*"
                />
            </div>
          </div>
          <div className="car-row">
            <h2 className="brand-label">Mazda</h2>
            <div>
              <CarVoteCard
                image="https://www.topgear.com/sites/default/files/cars-car/image/2021/02/cx-5-skyactiv-g-awd-gt-sport-auto-action-3.jpg"
                />
            </div>
            <div>
              <CarVoteCard
                image="https://hips.hearstapps.com/hmg-prod/images/2021-mazda-cx-3-mmp-1597151652.jpg?crop=0.787xw:0.882xh;0.0994xw,0.118xh&resize=640:*"
                />
            </div>
            <div>
              <CarVoteCard
                image="https://www.motortrend.com/uploads/2022/11/2023-Mazda-Mazda3-Sedan-AWD-Turbo-exterior-16.jpg"
                />
            </div>
          </div>
        </div>
      </div>

      <button
        className="request-button"
        onClick={() => {
          alert("Your vote has been submitted"); 
        }}
      >
        Submit your vote!
      </button>
    </div>
    
  );
};


export default Vote;