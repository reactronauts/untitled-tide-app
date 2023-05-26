import { Route, Routes } from "react-router-dom";
import WeatherPage from './pages/WeatherPage';

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
