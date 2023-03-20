import React, { useState } from 'react';
import './Request.css';
import HelpButton from './HelpButton';

const Request = () => {
  return (
    <div className="request-container">
      <div className='help'><HelpButton/></div>
      <h1>Request a Car</h1>
      <form>
        <label for="image">Upload an car image: </label>
        <input type="file" id="image" name="image" accept="image" />
        <p>Car Description:</p>
        <label for="description"></label>
        <textarea id="description" name="description" rows="5" cols="50"></textarea>
        <br/>
        <br/>
        <p>Additonal Comments:</p>
        <label for="comments"></label>
        <textarea id="comments" name="comments" rows="5" cols="50"></textarea>
        <br/>
        <br/>
        <input type="submit" value="Submit" className='submit-button'></input>
      </form>
    </div>
  );
};

export default Request;