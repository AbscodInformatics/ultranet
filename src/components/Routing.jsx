import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Landingpage/Index";
import Home from "./Home/Index";
import Business from "./Business/Index";
import FAQs from "./FAQs/Index";
import NavBar from "./NavBar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
const Routing = () => {
  return (
    <div>
      <ScrollToTop/>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/Offers" element={<Home />} />
        <Route exact path="/FAQs" element={<FAQs />} />
        <Route exact path="/Business" element={<Business />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Routing;
