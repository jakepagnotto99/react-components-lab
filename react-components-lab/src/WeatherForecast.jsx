import React from 'react';
import WeatherIcon from './WeatherIcon';
import WeatherData from './WeatherData';
import './WeatherForecast.css';

function WeatherForecast({ day, img, imgAlt, conditions, time }) {
  console.log(day)
  return (
    <div className="weather">
      <h2>{day}</h2>
      <img src={img} alt={imgAlt} />
      <p><span>conditions: </span>{conditions}</p>
      <p><span>time: </span>{time}</p>
    </div>
  );
}

export default WeatherForecast;
