import { createContext, useState } from "react";


// Default coordinates are for the Sydney Harbour Bridge
const defaultGeolocationCoordinateData = {
	latitude: -33.852222, 
    longitude: 151.210556
}


export const GeolocationContext = createContext(defaultGeolocationCoordinateData);

export default function GeolocationContextComponent(props) {

	const [location, setLocation] = useState({})
	
	return (
		<GeolocationContext.Provider value={{readLocation: location, updateLocation: setLocation}}>
			{props.children}
		</GeolocationContext.Provider>
	)
}