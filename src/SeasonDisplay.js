import React from 'react';
import { getSeason } from './utils';

const SeasonDisplay = ({ lat }) => {
  const season = getSeason(lat, new Date().getMonth());

  return (
    <div>
      <h1>Season display</h1>
      <div> Latitude: {lat} </div>
      <hr/>
      <h4> {season.text} </h4>
      <img src={season.image} alt="seasonal" width="600px"/>
    </div>
  );
};

export default SeasonDisplay;