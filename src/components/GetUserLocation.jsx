import { useEffect, useState } from 'react';

export function GetUserLocation() {
    const [location, setLocation] = useState({})

    useEffect(() => {
        userLocation()
    }, [])

    const userLocation = async() => {
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
        </div>   
    )
}