import { Route, Routes } from "react-router-dom";
import WeatherPage from './pages/weatherPage';

function App() {
    return (
        <>
            <Routes>
                <Route path="/">
                    <Route path="/geo" />
                    <Route path="/weather" element={<WeatherPage />}/>
                    <Route path="/lunar" />
                </Route>
            </Routes>
        </>
    );
}

export default App;
