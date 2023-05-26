import React, { useState } from 'react';
import axios from 'axios';
import Inputs from '../components/Inputs';
import TimeAndLocation from '../components/TimeAndLocation';
import TemperatureAndDetails from '../components/TemperatureAndDetails';
import Forecast from '../components/Forecast';
import cloudyImage from '../images/cloudy.png';
import clearImage from '../images/clear.png';
import rainImage from '../images/rain.png';
import drizzleImage from '../images/drizzle.png';
import mistImage from '../images/mist.png';
import. meta.env.VITE_LOCATION_API_KEY

const WeatherPage = () => {
  const [data, setData] = useState({
    celsius: 14,
    name: 'Tokyo',
    humidity: 92,
    wind: 8,
    image: cloudyImage,
    description: 'Cloudy',
    feels: 8,
    dateTime: 'Friday, 25 May 2023 | 10:00 AM'
  })

  const [name, setName] = useState('');
  const [unit, setUnit] = useState('metric');

  const handleClick = () => {
    if(name !== "") {
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${import.meta.env.VITE_LOCATION_API_KEY}&units=${unit}`;
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
            description: weatherDescription,
            feels: res.data.main.feels_like,
            dateTime: res.data.timezone
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
      <div className="inset-0 bg-no-repeat bg-cover">
        <div className='mx-auto max-w-xs md:max-w-screen-md mt-4 py-5 md:px-32 px-8 h-fit border rounded-xl mb-4'>
          <Inputs handleSubmit={handleSubmit} setName={setName} unit={unit} setUnit={setUnit} />
          {data && <TimeAndLocation data={data} />}
          {data && <TemperatureAndDetails data={data} unit={unit} detailed={true}/>}
          <Forecast />
        </div>
      </div>
    );
};

export default WeatherPage;






