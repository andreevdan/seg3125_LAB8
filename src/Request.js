import React, { useState } from 'react';
import './Request.css';
import HelpButton from './HelpButton';

const Request = () => {
  return (
    <div className="request-container">
      <div className='help'><HelpButton/></div>
      <h1 style={{marginTop:50,textAlign:'center'}}>Request a Car</h1>
      <form style={{textAlign:'center'}}>
        <label for="image">Upload an car image: </label>
        <br></br>
        <input style = {{marginLeft:'70px'}} type="file" id="image" name="image" accept="image" />
        <p>Car Description:</p>
        <label for="description"></label>
        <textarea style = {{width:'70%'}} id="description" name="description" rows="5" cols="50"></textarea>
        <br/>
        <br/>
        <p>Additonal Comments:</p>
        <label for="comments"></label>
        <textarea style = {{width:'70%'}} id="comments" name="comments" rows="5" cols="50"></textarea>
        <br/>
        <br/>
        <input type="submit" value="Submit" className='request-button'></input>
      </form>
    </div>
  );
};

export default Request;