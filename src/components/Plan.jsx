import React, { useState } from 'react';
import { BiRupee } from 'react-icons/bi';
import { motion, useAnimation } from 'framer-motion';
import HomeBroadBand from './Landingpage/HomeBroadBand';
import BusinessBroadband from './Landingpage/BusinessBroadband';

const Plan = () => {
  const [activeTab, setActiveTab] = useState('home');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomeBroadBand />;
      case 'business':
        return <BusinessBroadband />;

      default:
        return null;
    }
  };

  return (
    <div className="md:pb-5">
      <div className="flex py-5 justify-center gap-5 flex-col items-center">
        <div className="text-5xl font-bold text-center mx-1 md:mx-0 bg-gradient-to-r from-teal-500 via-blue-500 to-pink-500 text-transparent bg-clip-text">
          INFINITE FIBRE BROADBAND PLANS
        </div>

        <div className="flex w-[700px] mt-5 mx-auto text-xl rounded-xl bg-white h-16 justify-center gap-10 items-center">
          <button
            className={`tab  hover:bg-gradient-to-r bg-[#071343] px-8 text-lg py-3 hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 text-white font-medium rounded transition duration-300 ${
              activeTab === "home"
                ? "active bg-gradient-to-r from-[#ee9ca7] to-[#2980B9]"
                : ""
            }`}
            onClick={() => handleTabChange("home")}
          >
            Home Broadband
          </button>
          <button
            className={`tab  hover:bg-gradient-to-r bg-[#071343] px-8 text-lg py-3 hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 text-white font-medium rounded transition duration-300 ${
              activeTab === "business"
                ? "active bg-gradient-to-r from-[#ee9ca7] to-[#2980B9]"
                : ""
            }`}
            onClick={() => handleTabChange("business")}
          >
            Business Broadband
          </button>
        </div>
      </div>

      <div className="mt-4 mx-[8%]">{renderTabContent()}</div>
    </div>
  );
};

export default Plan;
