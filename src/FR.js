import React from 'react';
import './FR.css';
import CarCardfr from './CarCardfr';
import HelpButton from './HelpButton';
import { useNavigate } from 'react-router-dom';



const FR = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className='help'><HelpButton/></div>
      <h1 style={{marginTop: 50}} className='title'>Bienvenue sur notre site de vote automobile !</h1>

      <div className="car-grid">

        <div className="car-row">
          <h2 className="brand-label">Honda</h2>
          <div>
            <CarCardfr
              image="https://www.motortrend.com/uploads/sites/5/2021/05/2021-honda-accord-sport-2-0t-15.jpg?fit=around%7C875:492"
              safety="5/5"
              speed="150 mph"
              comfort="4/5"
              reliability="4.5/5" />
          </div>
          <div>
            <CarCardfr
              image="https://hips.hearstapps.com/hmg-prod/images/2023-honda-cr-v-hybrid-awd-touring-414-edit-1665754236.jpg?crop=0.654xw:0.734xh;0.117xw,0.266xh&resize=640:*"
              safety="5/5"
              speed="150 mph"
              comfort="4/5"
              reliability="4.5/5" />
          </div>
          <div>
            <CarCardfr
              image="https://hips.hearstapps.com/hmg-prod/images/2022-honda-civic-sport-287-1648742553.jpg?crop=0.674xw:0.568xh;0.0717xw,0.415xh&resize=1200:*"
              safety="5/5"
              speed="150 mph"
              comfort="4/5"
              reliability="4.5/5" />
          </div>
        </div>

        <div className="car-row">
          <h2 className="brand-label">Toyota</h2>
          <div>
            <CarCardfr
              image="https://hips.hearstapps.com/hmg-prod/images/c-005-1500x1000-1652713137.jpg?crop=0.891xw:1.00xh;0.0554xw,0&resize=640:*"
              safety="5/5"
              speed="150 mph"
              comfort="4/5"
              reliability="4.5/5" />
          </div>
          <div>
            <CarCardfr
              image="https://media.ed.edmunds-media.com/toyota/corolla/2023/oem/2023_toyota_corolla_sedan_xse_fq_oem_1_1600.jpg"
              safety="5/5"
              speed="150 mph"
              comfort="4/5"
              reliability="4.5/5" />
          </div>
          <div>
            <CarCardfr
              image="https://hips.hearstapps.com/hmg-prod/images/2023-toyota-highlander-front-three-quarters-1652203180.jpg?crop=0.871xw:0.655xh;0.0749xw,0.213xh&resize=1200:*"
              safety="5/5"
              speed="150 mph"
              comfort="4/5"
              reliability="4.5/5" />
          </div>
        </div>
        <div className="car-row">
          <h2 className="brand-label">Mazda</h2>
          <div>
            <CarCardfr
              image="https://www.topgear.com/sites/default/files/cars-car/image/2021/02/cx-5-skyactiv-g-awd-gt-sport-auto-action-3.jpg"
              safety="5/5"
              speed="150 mph"
              comfort="4/5"
              reliability="4.5/5" />
          </div>
          <div>
            <CarCardfr
              image="https://hips.hearstapps.com/hmg-prod/images/2021-mazda-cx-3-mmp-1597151652.jpg?crop=0.787xw:0.882xh;0.0994xw,0.118xh&resize=640:*"
              safety="5/5"
              speed="150 mph"
              comfort="4/5"
              reliability="4.5/5" />
          </div>
          <div>
            <CarCardfr
              image="https://www.motortrend.com/uploads/2022/11/2023-Mazda-Mazda3-Sedan-AWD-Turbo-exterior-16.jpg"
              safety="5/5"
              speed="150 mph"
              comfort="4/5"
              reliability="4.5/5" />
          </div>
        </div>
      </div>
      <button
        className="request-button"
        onClick={() => {
          navigate('/request');
        }}
      >
        Demander une voiture
      </button>
    </div>
  );
};

export default FR;


