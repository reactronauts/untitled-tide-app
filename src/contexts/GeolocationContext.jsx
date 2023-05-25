import { createContext } from "react";

export const defaultGeolocationCoordinates = {
	latitude: -30.6377563, 
    longitude: 151.4649722
}

const GeolocationContext = createContext(defaultGeolocationCoordinates);

export default GeolocationContext;