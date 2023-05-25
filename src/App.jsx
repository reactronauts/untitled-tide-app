import { Route, Routes } from "react-router-dom";
import { LunarPage } from "./pages/LunarPage";
import WeatherPage from "./pages/WeatherPage";
import TidePage from "./pages/TidePage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/">
                    <Route path="tides" element={<TidePage />} />
                    <Route path="weather" element={<WeatherPage />} />
                    <Route path="lunar" element={<LunarPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
