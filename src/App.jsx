import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Welcome from "./LoginSignup/Welcome";
import TetmsOfUse from "./LoginSignup/TermsOfUse";
import PrivacyPolicy from "./LoginSignup/PrivacyPolicy";
import MyInput from "./LoginSignup/MyInput";
import Home from "./Home/Home";
import Navbar from "./Components/navbar";
import Navbar2 from "./Components/Navbar2";
import Spotlight from "./Home/Spotlight";
import PopularGenresSeenAll from "./Home/PopularGenresSeenAll.jsx";
import Postviewed from "./Home/Postviewed.jsx";
import DotsPopUp from "./Home/DotsPopUp.jsx";
// import Postviewed from "./Home/Postviewed";
import ByStream from "./Bystream/ByStream.jsx";

function AppRoutes() {
  return (
    // <Routes>
    //   <Route>
    //     <Route path="/" element={<Landing />} />
    //     <Route path="/login" element={<Welcome />} />
    //     <Route path="/terms" element={<TetmsOfUse />} />
    //     <Route path="/privacy" element={<PrivacyPolicy />} />
    //   </Route>
    // </Routes>
    // <Home />
    // <Spotlight />
    // <PopularGenresSeenAll />
    // <Postviewed/>
    // <Navbar2 />
    // <DotsPopUp/>
    <ByStream />
  );
}

export default AppRoutes;
