import { useContext, useState } from 'react';
import { GeolocationContext } from './GeolocationContextComponent';

export function GetUserLocation() {
    const contextLocationData = useContext(GeolocationContext);

    const handleLocationShare = () => {
        window.navigator.geolocation.getCurrentPosition(
            (success) => {
                const newPosition = {
                    latitude: success.coords.latitude,
                    longitude: success.coords.longitude,
                };
                contextLocationData.updateLocation(newPosition);
            },
            (error) => console.log(error)
        );
    };

    return(
        <div>
            <button onClick={handleLocationShare} className='border-2 p-1 rounded-full bg-light-blue  shadow-md border-solid border-dark-blue/50 hover:border-solid hover:border-dark-blue hover:border-2 p-2'>Share Your Current Location</button>
        </div>   
    )
}