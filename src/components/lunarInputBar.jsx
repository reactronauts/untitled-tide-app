import { useState, useContext } from 'react';
import { UilSearch } from '@iconscout/react-unicons';
import { GeolocationContext } from "./GeolocationContextComponent";


export default function HandleInputBar() {
    const [searchLocationName, setSearchLocationName] = useState('')

    const [searchLocationCoords, setSearchLocationCoords] = useState('')

    let contextLocation = useContext(GeolocationContext)

    const handleInputClick = () => {
        const geoCodingApi = 'https://geocode.maps.co/search?q=' + searchLocationName

        fetch(geoCodingApi)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setSearchLocationCoords({latitude: data[0].lat, longitude: data[0].lon})
                contextLocation.updateLocation(searchLocationCoords)
            })
            .catch((error) => {
                console.log("Fetch failed!" + error);
                return null;
            });
    }

    const handleInputSubmit = (event) => {
        event.preventDefault();
        handleInputClick();
    }

  return (
    <div className='flex flex-row justify-center my-3'>
      <form onSubmit={handleInputSubmit} className="flex flex-row w-full items-center justify-center space-x-4">
        <input 
          type='text' 
          placeholder='Search for location by name' 
          onChange={event => setSearchLocationName(event.target.value)}
          className='text-l sm:text-xl font-light p-2 w-full shadow-xl rounded-xl focus:outline-none capitalize placeholder:lowercase' 
        />
        <button type='submit' className='bg-transparent border-none cursor-pointer p-0 m-0'>
          <UilSearch 
            size={25} 
            className='text-white cursor-pointer transition ease-out hover:scale-125'
          />
        </button>
      </form>
    </div>
  );
}