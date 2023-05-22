import { useState } from 'react';

export function GetUserLocation() {
    const [location, setLocation] = useState({})

    const handleLocationShare = () => {
        window.navigator.geolocation.getCurrentPosition(
            success => setLocation({latitude: success.coords.latitude, longitude: success.coords.longitude}),
            error => console.log(error)
        ) 
    }

    return(
        <div>
            <p>location:</p>
            <p>Latitude: {location.latitude}</p>
            <p>Longitude: {location.longitude}</p>
            <button onClick={handleLocationShare} className='border-2 p-1'>Share your location?</button>
        </div>   
    )
}