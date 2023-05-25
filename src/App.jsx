import { Route, Routes } from "react-router-dom";
import { PageLayout } from "./pages/PageLayout";
import HomePage from "./pages/HomePage";
import WeatherPage from "./pages/WeatherPage";

function App() {
    return (
        <>
            <Routes>
                <Route element={<PageLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/tides" />
                    <Route path="/weather" element={<WeatherPage />} />
                    <Route path="/lunar" />
                </Route>
            </Routes>
        </>
    );
}

export default App;
