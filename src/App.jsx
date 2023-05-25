import { Route, Routes } from "react-router-dom";
import WeatherPage from './pages/WeatherPage';
import GeolocationContextComponent from "./components/GeolocationContextComponent";
import TidePage from "./pages/TidePage";

function App() {
    return (
        <>
            <GeolocationContextComponent>
                <Routes>
                    <Route path="/">
                        <Route path="tides" />
                        <Route path="weather" element={<WeatherPage />}/>
                        <Route path="lunar" />
                    </Route>
                </Routes>
            </GeolocationContextComponent>
        </>
    );
}

export default App;
