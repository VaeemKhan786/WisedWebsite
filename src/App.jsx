import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Welcome from "./LoginSignup/Welcome";
import TetmsOfUse from "./LoginSignup/TermsOfUse";
import PrivacyPolicy from "./LoginSignup/PrivacyPolicy";

function AppRoutes() {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Welcome />} />
        <Route path="/terms" element={<TetmsOfUse />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
