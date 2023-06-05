import React, { useEffect,useState } from "react";
import OneMonthsPlan from "./OneMonthsPlan";
import ThreeMonths from "./ThreeMonths"
import SixMonths from "./SixMonths"
import YealyMonths from "./YealyMonths";
import AllMonths from "./AllMonths";

const PlanFilter = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      
      case "monthly":
        return <OneMonthsPlan />;
      case "threemonth":
        return <ThreeMonths />;
      case "sixmonth":
        return <SixMonths />;
      case "yearly":
        return <YealyMonths />;
      default:
        return null;
    }
  };

  return (
    <div className=" py-5">
      <div className="flex w-[700px] mt-5 mx-auto text-xl rounded-xl bg-white h-16 justify-center gap-10 items-center">
        <button
          className={`tab  hover:bg-gradient-to-r bg-[#071343] px-8 text-lg py-3 hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 text-white font-medium rounded transition duration-300 ${
            activeTab === "monthly"
              ? "active bg-gradient-to-r from-[#ee9ca7] to-[#2980B9]"
              : ""
          }`}
          onClick={() => handleTabChange("monthly")}
        >
          1 Monthly
        </button>
        <button
          className={`tab  hover:bg-gradient-to-r bg-[#071343] px-8 text-lg py-3 hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 text-white font-medium rounded transition duration-300 ${
            activeTab === "threemonth"
              ? "active bg-gradient-to-r from-[#ee9ca7] to-[#2980B9]"
              : ""
          }`}
          onClick={() => handleTabChange("threemonth")}
        >
          3 Month
        </button>
        <button
          className={`tab  hover:bg-gradient-to-r bg-[#071343] px-8 text-lg py-3 hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 text-white font-medium rounded transition duration-300 ${
            activeTab === "sixmonth"
              ? "active bg-gradient-to-r from-[#ee9ca7] to-[#2980B9]"
              : ""
          }`}
          onClick={() => handleTabChange("sixmonth")}
        >
          6 Months
        </button>
        <button
          className={`tab  hover:bg-gradient-to-r bg-[#071343] px-8 text-lg py-3 hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 text-white font-medium rounded transition duration-300 ${
            activeTab === "yearly"
              ? "active bg-gradient-to-r from-[#ee9ca7] to-[#2980B9]"
              : ""
          }`}
          onClick={() => handleTabChange("yearly")}
        >
          12 Months
        </button>
      </div>
    
      <div className="mt-4">{renderTabContent()}</div>
    </div>
  );
};
export default PlanFilter;
