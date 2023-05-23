import { Route, Routes } from "react-router-dom";
import WeatherPage from "./pages/WeatherPage";
import Tides from "./pages/Tides";

function App() {
    return (
        <>
            <Routes>
                <Route path="/">
                    <Route path="tides" element={<Tides />} />
                    <Route path="weather" element={<WeatherPage />} />
                    <Route path="lunar" />
                </Route>
            </Routes>
        </>
    );
}

export default App;
