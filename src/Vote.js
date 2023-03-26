import React, { useState } from 'react';
import './Vote.css';
import HelpButton from './HelpButton';

const Vote = () => {

  //TODO: Fix
  //get data from json file:
  //let infoRead = JSON.parse('data.json');

  //update data:
    //add to infoRead
    //info = infoRead

  //write data to json file:
    //data = JSON.stringify(info);
    //fs.writeFileSync('./data/' + fileName + '.json', data);

  const [firstSpeed, setFirstSpeed] = useState('');
  const [firstComfort, setFirstComfort] = useState('');
  const [firstRel, setFirstRel] = useState('');

  const [secondSpeed, setSecondSpeed] = useState('');
  const [secondComfort, setSecondComfort] = useState('');
  const [secondRel, setSecondRel] = useState('');

  const [thirdSpeed, setThirdSpeed] = useState('');
  const [thirdComfort, setThirdComfort] = useState('');
  const [thirdRel, setThirdRel] = useState('');

  const [fourthSpeed, setFourthSpeed] = useState('');
  const [fourthComfort, setFourthComfort] = useState('');
  const [fourthRel, setFourthRel] = useState('');

  const [fifthSpeed, setFifthSpeed] = useState('');
  const [fifthComfort, setFifthComfort] = useState('');
  const [fifthRel, setFifthRel] = useState('');

  const [sixthSpeed, setSixthSpeed] = useState('');
  const [sixthComfort, setSixthComfort] = useState('');
  const [sixthRel, setSixthRel] = useState('');

  const [seventhSpeed, setSeventhSpeed] = useState('');
  const [seventhComfort, setSeventhComfort] = useState('');
  const [seventhRel, setSeventhRel] = useState('');

  const [eigthSpeed, setEigthSpeed] = useState('');
  const [eigthComfort, setEigthComfort] = useState('');
  const [eigthRel, setEigthRel] = useState('');

  const [ninthSpeed, setNinthSpeed] = useState('');
  const [ninthComfort, setNinthComfort] = useState('');
  const [ninthRel, setNinthRel] = useState('');


  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("First: "+firstSpeed+", "+firstComfort+", "+firstRel);
    console.log("Second: "+secondSpeed+", "+secondComfort+", "+secondRel);
    console.log("Third: "+thirdSpeed+", "+thirdComfort+", "+thirdRel);
    console.log("Fourth: "+fourthSpeed+", "+fourthComfort+", "+fourthRel);
    console.log("Fifth: "+fifthSpeed+", "+fifthComfort+", "+fifthRel);
    console.log("Sixth: "+sixthSpeed+", "+sixthComfort+", "+sixthRel);
    console.log("Seventh: "+seventhSpeed+", "+seventhComfort+", "+seventhRel);
    console.log("Eigth: "+eigthSpeed+", "+eigthComfort+", "+eigthRel);
    console.log("Ninth: "+ninthSpeed+", "+ninthComfort+", "+ninthRel);
    //Send data to json:
    const data = [firstSpeed,firstComfort,firstRel 
                  ,secondSpeed,secondComfort,secondRel
                  ,thirdSpeed,thirdComfort,thirdRel
                  ,fourthSpeed,fourthComfort,fourthRel
                  ,fifthSpeed,fifthComfort,fifthRel
                  ,sixthSpeed,sixthComfort,sixthRel
                  ,seventhSpeed,seventhComfort,seventhRel
                  ,eigthSpeed,eigthComfort,eigthRel
                  ,ninthSpeed,ninthComfort,ninthRel];

    let emptyData = true;
    for(const counter in data){
      if (data[counter] !== ""){
        emptyData = false;
      }
    }
    if(emptyData === true){
      alert("Please add at least one value before submitting your vote!");
      return;
    }

    //Send data

    //Reset form
    setFirstSpeed('');
    setFirstComfort('');
    setFirstRel(''); 
    setSecondSpeed('');
    setSecondComfort('');
    setSecondRel('');
    setThirdSpeed('');
    setThirdComfort('');
    setThirdRel('');
    setFourthSpeed('');
    setFourthComfort('');
    setFourthRel('');
    setFifthSpeed('');
    setFifthComfort('');
    setFifthRel('');
    setSixthSpeed('');
    setSixthComfort('');
    setSixthRel('');
    setSeventhSpeed('');
    setSeventhComfort('');
    setSeventhRel('');
    setEigthSpeed('');
    setEigthComfort('');
    setEigthRel('');
    setNinthSpeed('');
    setNinthComfort('');
    setNinthRel('');
    alert("Vote submitted!");
  }
  return (
    <div>
      <div className='help'><HelpButton/></div>
      <div className="container">
        <h1 className='title' style={{marginTop: 50}}>Vote below to help us find the best car</h1>
        <p>Enter speed, reliability and comfort ratings for at least one of the below cars and submit the form to update our results!</p>
        <form onSubmit={handleSubmit}>
          <div className="car-grid">
            <div className="car-row">
              <h2 className="brand-label">Honda</h2>
              <div className="car-card">
                <img src="https://www.motortrend.com/uploads/sites/5/2021/05/2021-honda-accord-sport-2-0t-15.jpg?fit=around%7C875:492" alt="Car" className="car-image" />
                <div className="attributes">
                  <div className="attribute" style={{justifyContent:"left"}}>
                    <span className="attribute-title">Safety:</span>
                    <div style={{justifyContent:"right", marginLeft:195}}>
                      <input value = {firstSpeed} onChange = {(e) => setFirstSpeed(e.target.value)} type="number" min="0" max="5" className="form-control" style={{width: 30, fontWeight:"bold", fontSize:14}} name="FirstSafety"/>
                      <span className="attribute-title">/5</span>
                    </div>
                  </div>
                  <div className="attribute" style={{justifyContent:"left"}}>
                    <span className="attribute-title">Comfort:</span>
                    <div style={{justifyContent:"right", marginLeft:182}}>
                      <input value = {firstComfort} onChange = {(e) => setFirstComfort(e.target.value)} type="number" min="0" max="5" className="form-control" style={{width: 30, fontWeight:"bold", fontSize:14}} name="FirstComfort" />
                      <span className="attribute-title">/5</span>
                    </div>
                  </div>
                  <div className="attribute" style={{justifyContent:"left"}}>
                    <span className="attribute-title">Reliability:</span>
                    <div style={{justifyContent:"right", marginLeft:172}}>
                      <input value = {firstRel} onChange = {(e) => setFirstRel(e.target.value)} type="number" min="0" max="5" className="form-control" style={{width: 30, fontWeight:"bold", fontSize:14}} name="FirstReliability"/>
                      <span className="attribute-title">/5</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="car-card">
                <img src="https://hips.hearstapps.com/hmg-prod/images/2023-honda-cr-v-hybrid-awd-touring-414-edit-1665754236.jpg?crop=0.654xw:0.734xh;0.117xw,0.266xh&resize=640:*" alt="Car" className="car-image" />
                <div className="attributes">
                  <div className="attribute" style={{justifyContent:"left"}}>
                    <span className="attribute-title">Safety:</span>
                    <div style={{justifyContent:"right", marginLeft:195}}>
                      <input value = {secondSpeed} onChange = {(e) => setSecondSpeed(e.target.value)} type="number" min="0" max="5" className="form-control" style={{width: 30, fontWeight:"bold", fontSize:14}} name="SecondSafety"/>
                      <span className="attribute-title">/5</span>
                    </div>
                  </div>
                  <div className="attribute" style={{justifyContent:"left"}}>
                    <span className="attribute-title">Comfort:</span>
                    <div style={{justifyContent:"right", marginLeft:182}}>
                      <input value = {secondComfort} onChange = {(e) => setSecondComfort(e.target.value)} type="number" min="0" max="5" className="form-control" style={{width: 30, fontWeight:"bold", fontSize:14}} name="SecondComfort" />
                      <span className="attribute-title">/5</span>
                    </div>
                  </div>
                  <div className="attribute" style={{justifyContent:"left"}}>
                    <span className="attribute-title">Reliability:</span>
                    <div style={{justifyContent:"right", marginLeft:172}}>
                      <input value = {secondRel} onChange = {(e) => setSecondRel(e.target.value)} type="number" min="0" max="5" className="form-control" style={{width: 30, fontWeight:"bold", fontSize:14}} name="SecondReliability"/>
                      <span className="attribute-title">/5</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="car-card">
                <img src="https://hips.hearstapps.com/hmg-prod/images/2022-honda-civic-sport-287-1648742553.jpg?crop=0.674xw:0.568xh;0.0717xw,0.415xh&resize=1200:*" alt="Car" className="car-image" />
                <div className="attributes">
                  <div className="attribute" style={{justifyContent:"left"}}>
                    <span className="attribute-title">Safety:</span>
                    <div style={{justifyContent:"right", marginLeft:195}}>
                      <input value = {thirdSpeed} onChange = {(e) => setThirdSpeed(e.target.value)} type="number" min="0" max="5" className="form-control" style={{width: 30, fontWeight:"bold", fontSize:14}} name="ThirdSafety"/>
                      <span className="attribute-title">/5</span>
                    </div>
                  </div>
                  <div className="attribute" style={{justifyContent:"left"}}>
                    <span className="attribute-title">Comfort:</span>
                    <div style={{justifyContent:"right", marginLeft:182}}>
                      <input value = {thirdComfort} onChange = {(e) => setThirdComfort(e.target.value)} type="number" min="0" max="5" className="form-control" style={{width: 30, fontWeight:"bold", fontSize:14}} name="ThirdComfort" />
                      <span className="attribute-title">/5</span>
                    </div>
                  </div>
                  <div className="attribute" style={{justifyContent:"left"}}>
                    <span className="attribute-title">Reliability:</span>
                    <div style={{justifyContent:"right", marginLeft:172}}>
                      <input value = {thirdRel} onChange = {(e) => setThirdRel(e.target.value)} type="number" min="0" max="5" className="form-control" style={{width: 30, fontWeight:"bold", fontSize:14}} name="ThirdReliability"/>
                      <span className="attribute-title">/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="car-row">
              <h2 className="brand-label">Toyota</h2>
              <div className="car-card">
                <img src="https://hips.hearstapps.com/hmg-prod/images/c-005-1500x1000-1652713137.jpg?crop=0.891xw:1.00xh;0.0554xw,0&resize=640:*" alt="Car" className="car-image" />
                <div className="attributes">
                  <div className="attribute" style={{justifyContent:"left"}}>
                    <span className="attribute-title">Safety:</span>
                    <div style={{justifyContent:"right", marginLeft:195}}>
                      <input value = {fourthSpeed} onChange = {(e) => setFourthSpeed(e.target.value)} type="number" min="0" max="5" className="form-control" style={{width: 30, fontWeight:"bold", fontSize:14}} name="FourthSafety"/>
                      <span className="attribute-title">/5</span>
                    </div>
                  </div>
                  <div className="attribute" style={{justifyContent:"left"}}>
                    <span className="attribute-title">Comfort:</span>
                    <div style={{justifyContent:"right", marginLeft:182}}>
                      <input value = {fourthComfort} onChange = {(e) => setFourthComfort(e.target.value)} type="number" min="0" max="5" className="form-control" style={{width: 30, fontWeight:"bold", fontSize:14}} name="FourthComfort" />
                      <span className="attribute-title">/5</span>
                    </div>
                  </div>
                  <div className="attribute" style={{justifyContent:"left"}}>
                    <span className="attribute-title">Reliability:</span>
                    <div style={{justifyContent:"right", marginLeft:172}}>
                      <input value = {fourthRel} onChange = {(e) => setFourthRel(e.target.value)} type="number" min="0" max="5" className="form-control" style={{width: 30, fontWeight:"bold", fontSize:14}} name="FourthReliability"/>
                      <span className="attribute-title">/5</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="car-card">
                <img src="https://media.ed.edmunds-media.com/toyota/corolla/2023/oem/2023_toyota_corolla_sedan_xse_fq_oem_1_1600.jpg" alt="Car" className="car-image" />
                <div className="attributes">
                  <div className="attribute" style={{justifyContent:"left"}}>
                    <span className="attribute-title">Safety:</span>
                    <div style={{justifyContent:"right", marginLeft:195}}>
                      <input value = {fifthSpeed} onChange = {(e) => setFifthSpeed(e.target.value)} type="number" min="0" max="5" className="form-control" style={{width: 30, fontWeight:"bold", fontSize:14}} name="FifthSafety"/>
                      <span className="attribute-title">/5</span>
                    </div>
                  </div>
                  <div className="attribute" style={{justifyContent:"left"}}>
                    <span className="attribute-title">Comfort:</span>
                    <div style={{justifyContent:"right", marginLeft:182}}>
                      <input value = {fifthComfort} onChange = {(e) => setFifthComfort(e.target.value)} type="number" min="0" max="5" className="form-control" style={{width: 30, fontWeight:"bold", fontSize:14}} name="FifthComfort" />
                      <span className="attribute-title">/5</span>
                    </div>
                  </div>
                  <div className="attribute" style={{justifyContent:"left"}}>
                    <span className="attribute-title">Reliability:</span>
                    <div style={{justifyContent:"right", marginLeft:172}}>
                      <input value = {fifthRel} onChange = {(e) => setFifthRel(e.target.value)} type="number" min="0" max="5" className="form-control" style={{width: 30, fontWeight:"bold", fontSize:14}} name="FifthReliability"/>
                      <span className="attribute-title">/5</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="car-card">
                <img src="https://hips.hearstapps.com/hmg-prod/images/2023-toyota-highlander-front-three-quarters-1652203180.jpg?crop=0.871xw:0.655xh;0.0749xw,0.213xh&resize=1200:*" alt="Car" className="car-image" />
                <div className="attributes">
                  <div className="attribute" style={{justifyContent:"left"}}>
                    <span className="attribute-title">Safety:</span>
                    <div style={{justifyContent:"right", marginLeft:195}}>
                      <input value = {sixthSpeed} onChange = {(e) => setSixthSpeed(e.target.value)} type="number" min="0" max="5" className="form-control" style={{width: 30, fontWeight:"bold", fontSize:14}} name="SixthSafety"/>
                      <span className="attribute-title">/5</span>
                    </div>
                  </div>
                  <div className="attribute" style={{justifyContent:"left"}}>
                    <span className="attribute-title">Comfort:</span>
                    <div style={{justifyContent:"right", marginLeft:182}}>
                      <input value = {sixthComfort} onChange = {(e) => setSixthComfort(e.target.value)} type="number" min="0" max="5" className="form-control" style={{width: 30, fontWeight:"bold", fontSize:14}} name="SixthComfort" />
                      <span className="attribute-title">/5</span>
                    </div>
                  </div>
                  <div className="attribute" style={{justifyContent:"left"}}>
                    <span className="attribute-title">Reliability:</span>
                    <div style={{justifyContent:"right", marginLeft:172}}>
                      <input value = {sixthRel} onChange = {(e) => setSixthRel(e.target.value)} type="number" min="0" max="5" className="form-control" style={{width: 30, fontWeight:"bold", fontSize:14}} name="SixthReliability"/>
                      <span className="attribute-title">/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="car-row">
              <h2 className="brand-label">Mazda</h2>
              <div className="car-card">
                <img src="https://www.topgear.com/sites/default/files/cars-car/image/2021/02/cx-5-skyactiv-g-awd-gt-sport-auto-action-3.jpg" alt="Car" className="car-image" />
                <div className="attributes">
                  <div className="attribute" style={{justifyContent:"left"}}>
                    <span className="attribute-title">Safety:</span>
                    <div style={{justifyContent:"right", marginLeft:195}}>
                      <input value = {seventhSpeed} onChange = {(e) => setSeventhSpeed(e.target.value)} type="number" min="0" max="5" className="form-control" style={{width: 30, fontWeight:"bold", fontSize:14}} name="SeventhSafety"/>
                      <span className="attribute-title">/5</span>
                    </div>
                  </div>
                  <div className="attribute" style={{justifyContent:"left"}}>
                    <span className="attribute-title">Comfort:</span>
                    <div style={{justifyContent:"right", marginLeft:182}}>
                      <input value = {seventhComfort} onChange = {(e) => setSeventhComfort(e.target.value)} type="number" min="0" max="5" className="form-control" style={{width: 30, fontWeight:"bold", fontSize:14}} name="SeventhComfort" />
                      <span className="attribute-title">/5</span>
                    </div>
                  </div>
                  <div className="attribute" style={{justifyContent:"left"}}>
                    <span className="attribute-title">Reliability:</span>
                    <div style={{justifyContent:"right", marginLeft:172}}>
                      <input value = {seventhRel} onChange = {(e) => setSeventhRel(e.target.value)} type="number" min="0" max="5" className="form-control" style={{width: 30, fontWeight:"bold", fontSize:14}} name="SeventhReliability"/>
                      <span className="attribute-title">/5</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="car-card">
                <img src="https://hips.hearstapps.com/hmg-prod/images/2021-mazda-cx-3-mmp-1597151652.jpg?crop=0.787xw:0.882xh;0.0994xw,0.118xh&resize=640:*" alt="Car" className="car-image" />
                <div className="attributes">
                  <div className="attribute" style={{justifyContent:"left"}}>
                    <span className="attribute-title">Safety:</span>
                    <div style={{justifyContent:"right", marginLeft:195}}>
                      <input value = {eigthSpeed} onChange = {(e) => setEigthSpeed(e.target.value)} type="number" min="0" max="5" className="form-control" style={{width: 30, fontWeight:"bold", fontSize:14}} name="EigthSafety"/>
                      <span className="attribute-title">/5</span>
                    </div>
                  </div>
                  <div className="attribute" style={{justifyContent:"left"}}>
                    <span className="attribute-title">Comfort:</span>
                    <div style={{justifyContent:"right", marginLeft:182}}>
                      <input value = {eigthComfort} onChange = {(e) => setEigthComfort(e.target.value)} type="number" min="0" max="5" className="form-control" style={{width: 30, fontWeight:"bold", fontSize:14}} name="EigthComfort" />
                      <span className="attribute-title">/5</span>
                    </div>
                  </div>
                  <div className="attribute" style={{justifyContent:"left"}}>
                    <span className="attribute-title">Reliability:</span>
                    <div style={{justifyContent:"right", marginLeft:172}}>
                      <input value = {eigthRel} onChange = {(e) => setEigthRel(e.target.value)} type="number" min="0" max="5" className="form-control" style={{width: 30, fontWeight:"bold", fontSize:14}} name="EigthReliability"/>
                      <span className="attribute-title">/5</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="car-card">
                <img src="https://www.motortrend.com/uploads/2022/11/2023-Mazda-Mazda3-Sedan-AWD-Turbo-exterior-16.jpg" alt="Car" className="car-image" />
                <div className="attributes">
                  <div className="attribute" style={{justifyContent:"left"}}>
                    <span className="attribute-title">Safety:</span>
                    <div style={{justifyContent:"right", marginLeft:195}}>
                      <input value = {ninthSpeed} onChange = {(e) => setNinthSpeed(e.target.value)} type="number" min="0" max="5" className="form-control" style={{width: 30, fontWeight:"bold", fontSize:14}} name="NinthSafety"/>
                      <span className="attribute-title">/5</span>
                    </div>
                  </div>
                  <div className="attribute" style={{justifyContent:"left"}}>
                    <span className="attribute-title">Comfort:</span>
                    <div style={{justifyContent:"right", marginLeft:182}}>
                      <input value = {ninthComfort} onChange = {(e) => setNinthComfort(e.target.value)} type="number" min="0" max="5" className="form-control" style={{width: 30, fontWeight:"bold", fontSize:14}} name="NinthComfort" />
                      <span className="attribute-title">/5</span>
                    </div>
                  </div>
                  <div className="attribute" style={{justifyContent:"left"}}>
                    <span className="attribute-title">Reliability:</span>
                    <div style={{justifyContent:"right", marginLeft:172}}>
                      <input value = {ninthRel} onChange = {(e) => setNinthRel(e.target.value)} type="number" min="0" max="5" className="form-control" style={{width: 30, fontWeight:"bold", fontSize:14}} name="NinthReliability"/>
                      <span className="attribute-title">/5</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
          <button
              className="request-button"
            >
              Submit your vote!
            </button>
        </form> 
      </div>    
    </div>
  );
};

export default Vote;