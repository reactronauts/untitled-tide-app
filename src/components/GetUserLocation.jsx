import { useContext, useState } from 'react';
import { GeolocationContext } from './GeolocationContextComponent';

export function GetUserLocation() {

    const [localLocation, setLocalLocation] = useState({})

    const contextLocationData = useContext(GeolocationContext)

    const handleLocationShare = () => {
        window.navigator.geolocation.getCurrentPosition(
            success => (setLocalLocation({latitude: success.coords.latitude, longitude: success.coords.longitude}), contextLocationData.updateLocation(localLocation)),
            error => console.log(error)
        ) 
    }

    return(
        <div>
            <button onClick={handleLocationShare} className='border-2 p-1 rounded-full bg-light-blue  shadow-md border-solid border-dark-blue/50 hover:border-solid hover:border-dark-blue hover:border-2 p-2'>Share Your Current Location</button>
        </div>   
    )
}