import React, { useState } from 'react';
import './Request.css';
import HelpButton from './HelpButton';

const Request = () => {
  return (
    <div className="request-container">
      <div className='help'><HelpButton/></div>
      <h1 style={{marginTop:50,textAlign:'center'}}>Request a Car</h1>
      <form style={{textAlign:'center'}}>
        <p>Upload an image:</p>
        <input style = {{marginLeft:'70px'}} type="file" id="image" name="image" accept="image" />
        <p style={{marginTop:"50px"}}>Car Description:</p>
        <label for="description"></label>
        <textarea id="description" name="description" rows="10" cols="100"></textarea>
        <p style={{marginTop:"50px"}}>Additonal Comments:</p>
        <label for="comments"></label>
        <textarea id="comments" name="comments" rows="10" cols="100"></textarea>
        <input type="submit" value="Submit" className='request-button'></input>
      </form>
    </div>
  );
};

export default Request;