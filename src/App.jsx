import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route path="/">
                    <Route path="tides" />
                    <Route path="weather" />
                    <Route path="lunar" />
                </Route>
            </Routes>
        </>
    );
}

export default App;
