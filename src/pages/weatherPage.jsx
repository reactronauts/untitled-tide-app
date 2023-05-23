import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UilReact from '@iconscout/react-unicons/icons/uil-react';
import Inputs from '../components/Inputs';
import TimeAndLocation from '../components/TimeAndLocation';
import TemperatureAndDetails from '../components/TemperatureAndDetails';
import cloudyImage from '../images/cloudy.png';
import clearImage from '../images/clear.png';
import rainImage from '../images/rain.png';
import drizzleImage from '../images/drizzle.png';
import mistImage from '../images/mist.png';

const WeatherPage = () => {

  const [data, setData] = useState({
    celsius: 14,
    name: 'Tokyo',
    humidity: 92,
    wind: 8,
    image: cloudyImage
  })

  const [name, setName] = useState('');

  const handleClick = () => {
    if(name !== "") {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=3f30f4fc409dcbbfeac403b001b1804e&units=metric`;
      axios.get(apiUrl)
        .then(res => {
          let imagePath = '';
          if(res.data.weather[0].main == "Clouds") {
              imagePath = cloudyImage;
          } else if(res.data.weather[0].main == "Clear") {
              imagePath = clearImage;
          } else if(res.data.weather[0].main == "Rain") {
              imagePath = rainImage;
          } else if(res.data.weather[0].main == "Drizzle") {
              imagePath = drizzleImage;
          } else if(res.data.weather[0].main == "Mist") {
              imagePath = mistImage;
          } else {
              imagePath = cloudyImage;
          }
          setData({
            celsius: res.data.main.temp,
            name: res.data.name, 
            humidity: res.data.main.humidity, 
            wind: res.data.wind.speed, 
            image: imagePath
          })
        })
        .catch(err => console.log(err))
    }
  }

  return ( 
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-custom-purple h-fit shadow-xl rounded-xl shadow-gray-400'>
      <Inputs handleClick={handleClick} setName={setName} />
      <TimeAndLocation data={data} />
      <TemperatureAndDetails data={data} />
    </div>
  );
};

export default WeatherPage;


