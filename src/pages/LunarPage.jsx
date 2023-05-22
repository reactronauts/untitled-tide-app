import { GetUserLocation } from "../components/GetUserLocation";

export function LunarPage(props) {
    return (
        <div className="bg-[url('src/images/nightSky.jpg')] h-screen bg-cover">

            <h1 className="text-white">Lunar Page</h1>
                <GetUserLocation />
        </div>
    )
}

