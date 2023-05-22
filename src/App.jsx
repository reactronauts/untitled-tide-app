import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />}>
                    <Route path="tides" />
                    <Route path="weather" />
                    <Route path="lunar" />
                </Route>
            </Routes>
        </>
    );
}

export default App;
