import { useState } from "react";

export function Searchbar(){
    const [geolocation, setGeolocation] = useState(""); 

    return (
        <div className="p-2 block">
          <div className="ml-auto block">
            <label className="self-center">Search:</label>
            <input className="w-full max-w-md" type="text" name="Search" value={geolocation} onChange={(event) => setGeolocation(event.target.value)} />
          </div>
        </div>
    );
      
}