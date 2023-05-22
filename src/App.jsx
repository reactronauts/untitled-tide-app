import { Route, Routes } from "react-router-dom";
import { NavBar } from './components/Navbar';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                    <Route path="/weather" />
                    <Route path="/lunar" />
                    <Route path="/tides" />
                </Route>
            </Routes>
        </>
    );
}

export default App;
