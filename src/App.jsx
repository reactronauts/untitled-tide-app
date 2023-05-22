import { Route, Routes } from "react-router-dom";
import { Navbar } from './components/Navbar';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />}>
                    <Route path="tides" />
                    <Route path="weather" />
                    <Route path="lunar" />
                </Route>
            </Routes>
        </>
    );
}

export default App;
