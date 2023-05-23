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
            <button onClick={handleLocationShare} className='border-2 p-1 rounded-full bg-light-blue  shadow-md border-solid border-dark-blue/50 hover:border-solid hover:border-dark-blue hover:border-2 p-2'>Share Your Current Location</button>
        </div>   
    )
}