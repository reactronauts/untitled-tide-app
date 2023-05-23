
import { GetUserLocation } from "../components/GetUserLocation";
import Inputs from "./Inputs";
import { useState } from "react";
import TimeAndLocation from "./TimeAndLocation";
import { data } from "autoprefixer";

// api: https://ipgeolocation.io/astronomy-api.html

// GET https://api.visibleplanets.dev/v3?latitude=32&longitude=-98



export function LunarPageContainer() {

    const [name, setName] = useState('');

    const [planets, setPlanet] = useState([])

    function getPlanetaryPositions(){
        const planetsApi = "https://api.visibleplanets.dev/v3?latitude=-30.6377563&longitude=151.4649722"
        fetch(planetsApi)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data.data)
            setPlanet(data.data)
        }).catch((error) => {
            console.log("Fetch failed!" + error);
            return null;
        });
    }

    const handleClick = () => {
        getPlanetaryPositions()
    }
  
    const handleSubmit = (event) => {
      event.preventDefault();
      handleClick();
    }

    console.log("STATE" + planets)

    // const listVisiblePlanets = planets.map(planets, index => <li key={index}>{planets}</li>)

    
    return (
        <div className="bg-yellow h-5/6 w-5/6 rounded-2xl ">
            <GetUserLocation />
            <p>OR</p>
            <Inputs handleSubmit={handleSubmit} setName={setName}/>
            <div>
                <ul>
                    {/* {listVisiblePlanets} */}
                </ul>
            </div>
        </div>
    )
}