import React, { useState } from 'react';
import axios from 'axios';
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
    image: cloudyImage,
    description: 'Cloudy'
  })

  const [name, setName] = useState('');

  const handleClick = () => {
    if(name !== "") {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=3f30f4fc409dcbbfeac403b001b1804e&units=metric`;
      axios.get(apiUrl)
        .then(res => {
          let imagePath = '';
          let weatherDescription = '';
          if(res.data.weather[0].main == "Clouds") {
              imagePath = cloudyImage;
              weatherDescription = "Cloudy"
          } else if(res.data.weather[0].main == "Clear") {
              imagePath = clearImage;
              weatherDescription = "Clear"
          } else if(res.data.weather[0].main == "Rain") {
              imagePath = rainImage;
              weatherDescription = "Rainy"
          } else if(res.data.weather[0].main == "Drizzle") {
              imagePath = drizzleImage;
              weatherDescription = "Drizzle"
          } else if(res.data.weather[0].main == "Mist") {
              imagePath = mistImage;
              weatherDescription = "Misty"
          } else {
              imagePath = cloudyImage;
              weatherDescription = "Cloudy"
          }
          setData({
            celsius: res.data.main.temp,
            name: res.data.name, 
            humidity: res.data.main.humidity, 
            wind: res.data.wind.speed, 
            image: imagePath,
            description: weatherDescription
          })
        })
        .catch(err => console.log(err))
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    handleClick();
  }

  return ( 
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-custom-purple h-fit shadow-xl rounded-xl shadow-gray-400'>
      <Inputs handleSubmit={handleSubmit} setName={setName} />
      <TimeAndLocation data={data} />
      <TemperatureAndDetails data={data} />
    </div>
  );
};

export default WeatherPage;



