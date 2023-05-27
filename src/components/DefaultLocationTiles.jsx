import { useState, useEffect } from "react";
import axios from "axios";
// below import used for searchbar component (commented out)
// import Inputs from '../components/Inputs';
import TemperatureAndDetails from "../components/TemperatureAndDetails";
import TimeAndLocation from "./TimeAndLocation";
import cloudyImage from "../images/cloudy.png";
import clearImage from "../images/clear.png";
import rainImage from "../images/rain.png";
import drizzleImage from "../images/drizzle.png";
import mistImage from "../images/mist.png";
import { DateTime } from "luxon";

import.meta.env.VITE_LOCATION_API_KEY;

const WeatherPage = () => {
    const [data, setData] = useState([]);
    const [cities] = useState(["New York", "London", "Tokyo", "Sydney"]);

    useEffect(() => {
        fetchWeatherData();
    }, []);

    const fetchWeatherData = () => {
        const requests = cities.map((city) => {
            const apiUrl = `/.netlify/functions/getWeather?name=${city}`;
            return axios.get(apiUrl);
        });

        Promise.all(requests)
            .then((responses) => {
                const weatherData = responses.map((response) => {
                    const weather = response.data.weather[0].main;
                    let imagePath = "";
                    let weatherDescription = "";

                    if (weather === "Clouds") {
                        imagePath = cloudyImage;
                        weatherDescription = "Cloudy";
                    } else if (weather === "Clear") {
                        imagePath = clearImage;
                        weatherDescription = "Clear";
                    } else if (weather === "Rain") {
                        imagePath = rainImage;
                        weatherDescription = "Rainy";
                    } else if (weather === "Drizzle") {
                        imagePath = drizzleImage;
                        weatherDescription = "Drizzle";
                    } else if (weather === "Mist") {
                        imagePath = mistImage;
                        weatherDescription = "Misty";
                    } else {
                        imagePath = cloudyImage;
                        weatherDescription = "Cloudy";
                    }

                    const dateTime = response.data.timezone;
                    // const dateTime = DateTime.utc(response.data.timezone).toFormat('cccc, d LLLL yyyy | Local time: hh:mm a');

                    return {
                        celsius: response.data.main.temp,
                        name: response.data.name,
                        humidity: response.data.main.humidity,
                        wind: response.data.wind.speed,
                        image: imagePath,
                        description: weatherDescription,
                        dateTime: dateTime,
                        feels: response.data.main.feels_like,
                    };
                });

                setData(weatherData);
            })
            .catch((err) => console.log(err));
    };

    // for searchbar component
    // const handleSubmit = event => {
    //   event.preventDefault();
    //   fetchWeatherData();
    // };

    const [dateTime, setDateTime] = useState("");

    useEffect(() => {
        const dt = DateTime.utc().toFormat(
            "cccc, d LLLL yyyy | Local time: hh:mm a"
        );
        setDateTime(dt);
    }, []);

    return (
        <div className="mx-auto mt-4 max-w-screen-xl rounded-xl bg-dark-blue p-5 ">
            {/* <Inputs handleSubmit={handleSubmit} /> */}
            {/* <div className="grid grid-cols-4 gap-6 pt-4 pb-2"> */}
            <div className="grid grid-cols-1 gap-6 pb-2 pt-4 lg:grid-cols-4">
                {data.map((cityData, index) => (
                    <div
                        key={index}
                        className="min-w-[250px] rounded-lg border-2 bg-orange p-4"
                    >
                        <TimeAndLocation data={cityData} />
                        <div className="mt-4">
                            <TemperatureAndDetails
                                data={cityData}
                                detailed={false}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WeatherPage;

export function DefaultLocationTiles() {
    return (
        <div className="tiles">
            <WeatherPage />
        </div>
    );
}
