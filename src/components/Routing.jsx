import React from 'react'
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Landingpage/Index"
import Home from "./Home/Index";
import Business from "./Business/Index";
import FAQs from "./FAQs/Index";
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/Home" element={<Home />} />
        <Route exact path="/FAQs" element={<FAQs />} />
        <Route exact path="/Business" element={<Business />} />
      </Routes>
    </div>
  );
}

export default Routing