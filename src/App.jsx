import { Route, Routes } from "react-router-dom";
import { LunarPage } from "./pages/LunarPage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/">
                    <Route path="tides" />
                    <Route path="weather" />
                    <Route path="lunar" element={<LunarPage />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
