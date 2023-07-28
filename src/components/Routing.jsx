import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Landingpage/Index";
import Home from "./Home/Index";
import Business from "./Business/Index";
import FAQs from "./FAQs/Index";
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
import ContactUs from "./ContactUs";
import Chatboot from "./Chatboot";
const Routing = () => {
  return (
    <div>
      <ScrollToTop />
<ArrowUpAndDown />

      <Navbarr />
      {/* <Chatboot /> */}
      <div className="md:pb-[3%] pb-[10%]"></div>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/Offers" element={<Home />} />
        <Route exact path="/FAQs" element={<FAQs />} />
        <Route exact path="/Business" element={<Business />} />
        <Route exact path="/AboutUs" element={<AboutUs />} />
        <Route exact path="/Partner" element={<Partner />} />
        <Route exact path="/myUltranet" element={<UltranetWork />} />
        <Route
          exact
          path="/TermsAndConditions"
          element={<TermsConditinons />}
        />
        <Route exact path="/TermsOfService" element={<TermsOfService />} />
        <Route exact path="/FairUsePolicy" element={<FairUsePolicy />} />
        <Route exact path="/FtthNetwork" element={<FtthNetwork />} />
      </Routes>
      {/* <ContactUs/> */}
      <Footer />
    </div>
  );
};

export default Routing;
