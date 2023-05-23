import { useState } from "react";
import { useLoadScript } from "@react-google-maps/api";

const libraries = ["places"];

export function Searchbar() {
  const [geolocation, setGeolocation] = useState("");

  // to load the script
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyATmNE9x88S4vTtHU5w_0v2-06gMtr0nfI",
    libraries,
  });

  // update geoLocation with selected address formatting
  const handlePlaceSelect = (place) => {
    setGeolocation(place.formatted_address);
  };

  // update geoLocation with user entered address, as is
  const handleChange = (event) => {
    setGeolocation(event.target.value);
  };

  const handleScriptLoad = () => {
    const autocomplete = new window.google.maps.places.Autocomplete(
      document.getElementById("autocomplete-input"),
      { 
        types: ["geocode"] ,
        componentRestrictions: {"country": ['AU']} ,
        fields: ['place_id', 'geometry', 'name']
      }
    );

    autocomplete.addListener("place_changed", () => {
      const place = autocomplete.getPlace();
      handlePlaceSelect(place);
    });
  };

    // not rendering but required when using the useLoadScript hook
    if (loadError) {
    return <div>Error loading Google Maps</div>;
    }

    if (!isLoaded) {
    return <div>Loading...</div>;
    }

  return (
    <div className="p-2 block">
      <div className="ml-auto block">
        <label className="self-center pr-2">Search:</label>
        <input
          id="autocomplete-input"
          className="w-full max-w-md border-2"
          type="text"
          name="Search"
          value={geolocation}
          onChange={handleChange}
          onFocus={handleScriptLoad}
        />
      </div>
    </div>
  );
}
