import React from 'react';
import '../stylesheets/weather-content.css'
import searchIcon from '../images/search.png';
import humidityIcon from '../images/humidity.png';
import windIcon from '../images/wind.png';
import cloudyIcon from '../images/cloudy.png';

const WeatherContent = () => {
  return (
    <div className='container'>
      <div className='weather'>
        <div className='search'>
          <input type='text' placeholder='Enter City Name'/>
          <button><img src={searchIcon} alt='search icon'/></button>
        </div>
        <div className='winfo'>
          <img src={cloudyIcon} alt='search icon'/>
          <h1>22°C</h1>
          <h2>London</h2>
        </div>
        <div className='details'>
          <div className='col'>
            <img src={humidityIcon} alt='humidity icon'/>
              <div className='humidity'>
                <p>20%</p>
                <p>Humidity</p>
              </div>
          </div>
          <div className='col'>
          <img src={windIcon} alt='wind icon'/>
            <div className='wind'>
              <p>2 km/h</p>
              <p>Wind</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherContent;
