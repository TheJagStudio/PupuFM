import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import AudioPlayer from "./Components/AudioPlayer";

// Pages
import Home from "./Pages/Home";
import ShowDetails from "./Pages/ShowDetails";
import LandingPage from "./Pages/LandingPage";
import GenerePage from "./Pages/GenerePage";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<Home />} />
                <Route path="/home/:lang" element={<Home />} />
                <Route path="/show/:name" element={<ShowDetails />} />
                <Route path="/:lang/:category/:genere" element={<GenerePage />} />
            </Routes>
            <AudioPlayer />
        </Router>
    );
};

export default App;
