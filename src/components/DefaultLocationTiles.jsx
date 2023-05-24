import { useState, useEffect } from 'react';
import axios from 'axios';
import Inputs from '../components/Inputs';
import TemperatureAndDetails from '../components/TemperatureAndDetails';
import TimeAndLocation from './TimeAndLocation';
import cloudyImage from '../images/cloudy.png';
import clearImage from '../images/clear.png';
import rainImage from '../images/rain.png';
import drizzleImage from '../images/drizzle.png';
import mistImage from '../images/mist.png';

const WeatherPage = () => {
  const [data, setData] = useState([]);
  const [cities] = useState(['New York', 'London', 'Tokyo', 'Sydney']);

  useEffect(() => {
    fetchWeatherData();
  });

  const fetchWeatherData = () => {
    const requests = cities.map(city =>
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3f30f4fc409dcbbfeac403b001b1804e&units=metric`)
    );

    Promise.all(requests)
      .then(responses => {
        const weatherData = responses.map((response) => {
          const weather = response.data.weather[0].main;
          let imagePath = '';
          let weatherDescription = '';

          if (weather === 'Clouds') {
            imagePath = cloudyImage;
            weatherDescription = 'Cloudy';
          } else if (weather === 'Clear') {
            imagePath = clearImage;
            weatherDescription = 'Clear';
          } else if (weather === 'Rain') {
            imagePath = rainImage;
            weatherDescription = 'Rainy';
          } else if (weather === 'Drizzle') {
            imagePath = drizzleImage;
            weatherDescription = 'Drizzle';
          } else if (weather === 'Mist') {
            imagePath = mistImage;
            weatherDescription = 'Misty';
          } else {
            imagePath = cloudyImage;
            weatherDescription = 'Cloudy';
          }

          return {
            celsius: response.data.main.temp,
            name: response.data.name,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
            image: imagePath,
            description: weatherDescription,
          };
        });

        setData(weatherData);
      })
      .catch(err => console.log(err));
  };

  const handleSubmit = event => {
    event.preventDefault();
    fetchWeatherData();
  };

  return (
    <div className='mx-auto max-w-screen-xl mt-4 p-5 bg-dark-blue rounded-xl'>
      <Inputs handleSubmit={handleSubmit} />
      <div className="grid grid-cols-4 gap-6">
        {data.map((cityData, index) => (
          <div key={index} className="p-4 rounded-lg bg-orange min-w-[250px]">
            <TimeAndLocation data={cityData} />
            <div className="mt-4">
              <TemperatureAndDetails data={cityData} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

};

export default WeatherPage;


export function DefaultLocationTiles(){
    return(
        <div className="tiles">
            <WeatherPage />
        </div>  
    );
}
