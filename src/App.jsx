import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route path="/">
                    <Route path="/geo" />
                    <Route path="/weather" />
                    <Route path="/lunar" />
                </Route>
            </Routes>
        </>
    );
}

export default App;
