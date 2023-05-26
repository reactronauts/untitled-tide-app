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
            <button onClick={handleLocationShare} className='mr-0 border p-1 text-white text-m sm:text-xl font-sans rounded-lg mb-2 shadow-xl border-solid border-white p-2 bg-yellow'>Share Your Current Location</button>
        </div>   
    )
}