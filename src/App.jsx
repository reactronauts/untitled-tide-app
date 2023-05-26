import { Route, Routes } from "react-router-dom";
import { LunarPage } from "./pages/LunarPage";
import { PageLayout } from "./pages/PageLayout";
import HomePage from "./pages/HomePage";
import WeatherPage from './pages/WeatherPage';
import GeolocationContextComponent from "./components/GeolocationContextComponent";
import TidePage from './pages/TidePage';


function App() {
    return (
        <>
            <GeolocationContextComponent>
                <Routes>
                    <Route element={<PageLayout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/tides" element={<TidePage />} />
                        <Route path="/weather" element={<WeatherPage />} />
                        <Route path="/lunar" element={<LunarPage />} />
                    </Route>
                </Routes>
            </GeolocationContextComponent>
        </>
    );
}

export default App;
