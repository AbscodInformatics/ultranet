import React, { useState } from "react";
import { BiRupee } from "react-icons/bi";
import { motion, useAnimation } from "framer-motion";
import HomeBroadBand from "./Landingpage/HomeBroadBand";
import BusinessBroadband from "./Landingpage/BusinessBroadband";

const Plan = () => {
  const [activeTab, setActiveTab] = useState("business");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      // case 'home':
      //   return <HomeBroadBand />;
      case "business":
        return <BusinessBroadband />;

      default:
        return null;
    }
  };

  return (
    <div>
      <div className='flex py-5 justify-center gap-5 flex-col items-center'>
        <div className='text-5xl flex flex-col items-center leading-[60px] text-customBlue tracking-[-0.04em]  font-[800] text-center mx-1 md:mx-0 '>
          Hassle-Free Relocation With MoveNPack Packers & Movers
          <span className='w-40 border-customYellow border-[3px] rounded'></span>
        </div>
      </div>

      <div
        data-aos='fade-up'
        data-aos-once='false'
        data-aos-anchor-placement='top-center'
        className='mt-4  xl:mx-[8%]'
      >
        {renderTabContent()}
      </div>
    </div>
  );
};

export default Plan;
