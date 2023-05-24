
import { GetUserLocation } from "../components/GetUserLocation";
import Inputs from "./Inputs";
import { useState } from "react";
import { VisiblePlanets } from "./VisiblePlanets";
import sunIcon from '../images/lunarImages/sun.svg'
import moonIcon from '../images/lunarImages/moon.svg'
import mercuryIcon from '../images/lunarImages/mercury.svg'
import venusIcon from '../images/lunarImages/venus.svg'
import marsIcon from '../images/lunarImages/mars.svg'
import jupiterIcon from '../images/lunarImages/jupiter.svg'
import saturnIcon from '../images/lunarImages/saturn.svg'
import uranusIcon from '../images/lunarImages/uranus.svg'
import neptuneIcon from '../images/lunarImages/neptune.svg'

// api: https://home.openweathermap.org/api_keys



// GET https://api.visibleplanets.dev/v3?latitude=32&longitude=-98

export function LunarPageContainer() {
    const [planets, setPlanet] = useState([]);

    const defaultLocationSydney = {latitude: -30.6377563, longitude: 151.4649722}

    function getPlanetaryPositions() {
        const planetsApi =
            'https://api.visibleplanets.dev/v3?latitude=' + defaultLocationSydney.latitude + '&longitude=' + defaultLocationSydney.longitude;
        fetch(planetsApi)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data.data);
                setPlanet(data.data);
            })
            .catch((error) => {
                console.log("Fetch failed!" + error);
                return null;
            });
    }


    const [rises, setRises] = useState()

    function getAstronomicalData() {
        const astronomicalApi = 'https://api.openweathermap.org/data/2.5/weather?lat=' + defaultLocationSydney.latitude + '&lon=' + defaultLocationSydney.longitude + '&appid={apikey}'

        fetch(astronomicalApi)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data)
                setRises(data)
            })
            .catch((error) => {
                console.log("Fetch failed!" + error);
                return null;
            });
        }


    const [locationName, setLocationName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // getPlanetaryPositions();
        getAstronomicalData();

    };



    return (
        <div className="h-5/6 w-5/6 rounded-2xl bg-yellow ">
            <GetUserLocation /> 

            <Inputs
                handleSubmit={handleSubmit}
                setLocationName={setLocationName}
            />

            <div>
                <h2>Currently Visible in the Sky:</h2>
                <ul>
                    {planets &&
                        planets.map((planet) => (
                            <li key={planet.name} className="p-2 inline-block ms-2 mt-2 text-center">
                                {planet.name == 'Sun' ? <img src={sunIcon} className="h-8 w-8 viewBox=0 0 24 24 mx-auto"/> : null}
                                {planet.name == 'Moon' ? <img src={moonIcon} className="h-8 w-8 viewBox=0 0 24 24 mx-auto"/> : null}
                                {planet.name == 'Mercury' ? <img src={mercuryIcon} className="h-8 w-8 viewBox=0 0 24 24 mx-auto"/> : null}
                                {planet.name == 'Venus' ? <img src={venusIcon} className="h-8 w-8 viewBox=0 0 24 24 mx-auto"/> : null}
                                {planet.name == 'Mars' ? <img src={marsIcon} className="h-8 w-8 viewBox=0 0 24 24 mx-auto"/> : null}
                                {planet.name == 'Jupiter' ? <img src={jupiterIcon} className="h-8 w-8 viewBox=0 0 24 24 mx-auto"/> : null}
                                {planet.name == 'Saturn' ? <img src={saturnIcon} className="h-8 w-8 viewBox=0 0 24 24 mx-auto"/> : null}
                                {planet.name == 'Uranus' ? <img src={uranusIcon} className="h-8 w-8 viewBox=0 0 24 24 mx-auto"/> : null}
                                {planet.name == 'Neptune' ? <img src={neptuneIcon} className="h-8 w-8 viewBox=0 0 24 24 mx-auto"/> : null}
                                <p>{planet.name}</p><p>Constellation: {planet.constellation}</p>{planet.nakedEyeObject ? <p>Telescope: Yes</p> : <p>Visible without Telescope: No</p>}</li>
                        ))}
                </ul>
            </div>  
        </div>
    );
}