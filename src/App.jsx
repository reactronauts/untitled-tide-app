import { Route, Routes } from "react-router-dom";
import { PageLayout } from "./pages/PageLayout";
import HomePage from "./pages/HomePage";
import WeatherPage from "./pages/WeatherPage";
import TidePage from "./pages/TidePage";


function App() {
    return (
        <>
            <Routes>
                <Route element={<PageLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/tides" element={<TidePage />} />
                    <Route path="/weather" element={<WeatherPage />} />
                    <Route path="/lunar" />
                </Route>
            </Routes>
        </>
    );
}

export default App;
