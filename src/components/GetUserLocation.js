import { useEffect, useState } from 'react';

export function GetUserLocation() {
    const [location, setLocation] = useState({})

    useEffect(() => {
        userLocation()
    }, [])

    const userLocation = async() => {
        window.navigator.geolocation.getCurrentPosition(
            success => setLocation({latitude: success.coords.latitude}),
            error => console.log(error)
        ) 
    }

    return(
        <div>
            <p>location: {location.latitude}</p>
        </div>   
    )
}