
import { GetUserLocation } from "../components/GetUserLocation";
import Inputs from "./Inputs";
import { useState, useEffect, useContext } from "react";
import sunIcon from '../images/lunarImages/sun.svg'
import moonIcon from '../images/lunarImages/moon.svg'
import mercuryIcon from '../images/lunarImages/mercury.svg'
import venusIcon from '../images/lunarImages/venus.svg'
import marsIcon from '../images/lunarImages/mars.svg'
import jupiterIcon from '../images/lunarImages/jupiter.svg'
import saturnIcon from '../images/lunarImages/saturn.svg'
import uranusIcon from '../images/lunarImages/uranus.svg'
import neptuneIcon from '../images/lunarImages/neptune.svg'
import fullMoon from '../images/lunarImages/moonPhaseImages/full-moon.png'
import newMoon from '../images/lunarImages/moonPhaseImages/new-moon.png'
import crescentMoon from '../images/lunarImages/moonPhaseImages/crescent-moon.png'
import firstQuarterMoon from '../images/lunarImages/moonPhaseImages/first-quarter-moon.png'
import lastQuarterMoon from '../images/lunarImages/moonPhaseImages/last-quarter-moon.png'
import waningCrescentMoon from '../images/lunarImages/moonPhaseImages/waning-crescent-moon.png'
import waxingCrescentMoon from '../images/lunarImages/moonPhaseImages/waxing-crescent-moon.png'
import waxingGibbousMoon from '../images/lunarImages/moonPhaseImages/waxing-gibbous-moon.png'
import { useLocation } from "react-router-dom";
import { GeolocationContext } from "./GeolocationContextComponent";


export function LunarPageContainer() {
    let contextLocation = useContext(GeolocationContext)

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

    useEffect(() => {
        getPlanetaryPositions()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // const [locationName, setLocationName] = useState("");

    // useEffect(() => {
    //     getPlanetaryPositions()
    // }, [readLocation])
    
    const handleSubmit = (event) => {
        event.preventDefault();
        getPlanetaryPositions();
    };

    const fullMoon = 0 
    // const waningGibbous = 3.69132346322
    const lastQuarter = 7.38264692644
    // const waningCrescent = 11.0739703897
    const newMoon = 14.76529385288
    // const waxingCrescent = 18.4566173161
    const firstQuarter = 22.14794077932
    // const waxingGibbous = 25.8392642425
    const fullAgain = 29.53058770576 

    return (
        <div className="h-5/6 w-5/6 rounded-2xl bg-light-blue text-dark-blue font-sans p-3 m-10 sm:p-8">
            <GetUserLocation /> 
            <div>
                <p>user location: {contextLocation.readLocation.latitude}</p>
            </div>

            <Inputs
                handleSubmit={handleSubmit}
                // setLocationName={setLocationName}
            />


            <div>
                <ul>
                {planets &&
                        planets.map((planet) => (
                            <li key={planet.name}>
                                {planet.name == 'Moon' ? <img src={crescentMoon} className="h-12 w-12 viewBox=0 0 24 24 mx-auto"/> : null}
                                {planet.name == 'Moon' && (planet.phase == fullMoon)  ? <p className="text-white text-1xl sm:text-2xl text-center drop-shadow-lg pb-2">Moon Phase: Full Moon</p> : null}
                                {planet.name == 'Moon' && (planet.phase > fullMoon && planet.phase < lastQuarter)  ? <p className="text-white text-1xl sm:text-2xl text-center drop-shadow-lg pb-2">Moon Phase: Waning Gibbous</p> : null}
                                {planet.name == 'Moon' && (planet.phase == lastQuarter)  ? <p className="text-white text-1xl sm:text-2xl text-center drop-shadow-lg pb-2">Moon Phase: Last Quarter</p> : null}
                                {planet.name == 'Moon' && (planet.phase > lastQuarter && planet.phase < newMoon)  ? <p className="text-white text-1xl sm:text-2xl text-center drop-shadow-lg pb-2">Moon Phase: Waning Crescent</p> : null}
                                {planet.name == 'Moon' && (planet.phase == fullMoon)  ? <p className="text-white text-1xl sm:text-2xl text-center drop-shadow-lg pb-2">Moon Phase: Full Moon</p> : null}
                                {planet.name == 'Moon' && (planet.phase > fullMoon && planet.phase < firstQuarter)  ? <p className="text-white text-1xl sm:text-2xl text-center drop-shadow-lg pb-2">Moon Phase: Waxing Crescent</p> : null}
                                {planet.name == 'Moon' && (planet.phase == firstQuarter)  ? <p className="text-white text-1xl sm:text-2xl text-center drop-shadow-lg pb-2">Moon Phase: First Quarter</p> : null}
                                {planet.name == 'Moon' && (planet.phase > firstQuarter && planet.phase < fullAgain)  ? <p className="text-white text-1xl sm:text-2xl text-center drop-shadow-lg pb-2">Moon Phase: Waxing Gibbous</p> : null}
                                {planet.name == 'Moon' && (planet.phase == fullAgain)  ? <p className="text-white text-1xl sm:text-2xl text-center drop-shadow-lg pb-2">Moon Phase: Full Moon</p> : null}
                            </li>))}
                </ul>
            </div>
                
            <div>
                <h2 className="text-white text-2xl sm:text-3xl text-center drop-shadow-lg">Currently Visible in the Sky:</h2>
                <ul className="sm:text-center">
                    {planets &&
                        planets.map((planet) => (
                            <li key={planet.name} className="p-2 ms-2 mt-2 text-center text-white sm:inline-block sm:text-center">
                                {planet.name == 'Sun' ? <img src={sunIcon} className="h-8 w-8 viewBox=0 0 24 24 mx-auto"/> : null}
                                {planet.name == 'Moon' ? <img src={moonIcon} className="h-8 w-8 viewBox=0 0 24 24 mx-auto"/> : null}
                                {planet.name == 'Mercury' ? <img src={mercuryIcon} className="h-8 w-8 viewBox=0 0 24 24 mx-auto"/> : null}
                                {planet.name == 'Venus' ? <img src={venusIcon} className="h-8 w-8 viewBox=0 0 24 24 mx-auto"/> : null}
                                {planet.name == 'Mars' ? <img src={marsIcon} className="h-8 w-8 viewBox=0 0 24 24 mx-auto"/> : null}
                                {planet.name == 'Jupiter' ? <img src={jupiterIcon} className="h-8 w-8 viewBox=0 0 24 24 mx-auto"/> : null}
                                {planet.name == 'Saturn' ? <img src={saturnIcon} className="h-8 w-8 viewBox=0 0 24 24 mx-auto"/> : null}
                                {planet.name == 'Uranus' ? <img src={uranusIcon} className="h-8 w-8 viewBox=0 0 24 24 mx-auto"/> : null}
                                {planet.name == 'Neptune' ? <img src={neptuneIcon} className="h-8 w-8 viewBox=0 0 24 24 mx-auto"/> : null}
                                <p>{planet.name}</p><p>Constellation: {planet.constellation}</p>{planet.nakedEyeObject ? <p>Telescope: No</p> : <p>Telescope: Yes</p>}</li>
                        ))}
                </ul>
            </div>  
        </div>
    );
}