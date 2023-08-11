import React, { useState } from 'react';
import { BiRupee } from 'react-icons/bi';
import { motion, useAnimation } from 'framer-motion';
import HomeBroadBand from './Landingpage/HomeBroadBand';
import BusinessBroadband from './Landingpage/BusinessBroadband';

const Plan = () => {
  const [activeTab, setActiveTab] = useState("business");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      // case 'home':
      //   return <HomeBroadBand />;
      case 'business':
        return <BusinessBroadband />;

      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex py-5 justify-center gap-5 flex-col items-center">
        <div className="text-5xl leading-[60px] text-[#004281] tracking-[-0.04em]  font-[800] text-center mx-1 md:mx-0 ">
          INFINITE FIBRE BROADBAND PLANS
        </div>
        {/* <div className="flex md:flex-row flex-col md:w-[700px] mt-5 mx-auto text-xl rounded-xl   justify-center gap-10 items-center"> */}
          {/* <button
            className={`tab  hover:bg-gradient-to-r bg-[#df312c] px-8 text-lg py-3 hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 text-white font-medium rounded transition duration-300 ${
              activeTab === "home"
                ? "active bg-gradient-to-r from-[#ee9ca7] to-[#2980B9]"
                : ""
            }`}
            onClick={() => handleTabChange("home")}
          >
            Home Broadband
          </button> */}
          {/* <button
            className={`tab  hover:bg-[#DE466C] bg-[#004281] px-8 text-lg py-3  text-white font-medium rounded-full transition duration-300 ${
              activeTab === "business"
                ? "active bg-[#DE466C] "
                : ""
            }`}
            onClick={() => handleTabChange("business")}
          >
            Business Broadband
          </button> */}
        {/* </div> */}
      </div>

      <div
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className="mt-4  xl:mx-[8%]"
      >
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Plan;
