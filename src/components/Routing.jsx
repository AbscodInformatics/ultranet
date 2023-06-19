import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Landingpage/Index";
import Home from "./Home/Index";
import Business from "./Business/Index";
import FAQs from "./FAQs/Index";
import NavBar from "./NavBar";
import Footer from "./Footer";
import TermsConditinons from "./Landingpage/TermsConditinons";
import ScrollToTop from "./ScrollToTop";
import TermsOfService from "./Landingpage/TermsOfService";
import FairUsePolicy from "./Landingpage/FairUsePolicy";
import FtthNetwork from "./Landingpage/FtthNetwork";
import AboutUs from "./AboutUs/Index"
import Partner from "./Partner/Partner";
import Navbarr from "./Navbarr"
import UltranetWork from "./HowUltraNetWorks/Index"
import ArrowUpAndDown from "./ArrowUpAndDown";
const Routing = () => {
  return (
    <div>
      <ScrollToTop />
      {/* <NavBar /> */}
      <ArrowUpAndDown/>
      <Navbarr />
      <div className="md:pb-[3%] pb-[10%]"></div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/Offers" element={<Home />} />
        <Route exact path="/FAQs" element={<FAQs />} />
        <Route exact path="/Business" element={<Business />} />
        <Route exact path="/AboutUs" element={<AboutUs />} />
        <Route exact path="/Partner" element={<Partner />} />
        <Route exact path="/HowUltraNetWorks" element={<UltranetWork />} />
        <Route
          exact
          path="/TermsAndConditions"
          element={<TermsConditinons />}
        />
        <Route exact path="/TermsOfService" element={<TermsOfService />} />
        <Route exact path="/FairUsePolicy" element={<FairUsePolicy />} />
        <Route exact path="/FtthNetwork" element={<FtthNetwork />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Routing;
