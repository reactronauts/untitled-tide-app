import { Route, Routes } from "react-router-dom";
import { LunarPage } from "./pages/LunarPage";
import WeatherPage from './pages/WeatherPage';

function App() {
    return (
        <>
            <Routes>
                <Route path="/">
                    <Route path="tides" />
                    <Route path="weather" element={<WeatherPage />}/>
                    <Route path="lunar" element={<LunarPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
