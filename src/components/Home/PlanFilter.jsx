import React, { useEffect,useState } from "react";
import OneMonthsPlan from "./OneMonthsPlan";
import ThreeMonths from "./ThreeMonths"
import SixMonths from "./SixMonths"
import YealyMonths from "./YealyMonths";

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
      <div className="flex flex-wrap md:flex-nowrap md:flex-row md:w-[700px]  mt-5 md:mx-auto text-xl bg-white md:h-14 justify-center gap-5 md:gap-10 items-center">
        <button
          className={`tab  hover:bg-gradient-to-r bg-[#004281] px-8 text-lg py-3 hover:from-[#DE466C] hover:via-[#DE466C] group-hover:to-[#DE466C] text-white font-medium rounded-full transition duration-300 ${
            activeTab === "monthly"
              ? "active bg-gradient-to-r from-[#DE466C] to-[#004281]"
              : ""
          }`}
          onClick={() => handleTabChange("monthly")}
        >
          1 Monthly
        </button>
        <button
          className={`tab  hover:bg-gradient-to-r bg-[#004281] px-8 text-lg py-3 hover:from-[#DE466C] hover:via-[#DE466C] group-hover:to-[#DE466C] text-white font-medium rounded-full transition duration-300 ${
            activeTab === "threemonth"
              ? "active bg-gradient-to-r from-[#DE466C] to-[#004281]"
              : ""
          }`}
          onClick={() => handleTabChange("threemonth")}
        >
          3 Months
        </button>
        <button
          className={`tab  hover:bg-gradient-to-r bg-[#004281]  px-9 text-lg py-3 hover:from-[#DE466C] hover:via-[#DE466C] group-hover:to-[#DE466C] text-white font-medium rounded-full transition duration-300 ${
            activeTab === "sixmonth"
              ? "active bg-gradient-to-r from-[#DE466C] to-[#004281]"
              : ""
          }`}
          onClick={() => handleTabChange("sixmonth")}
        >
          6 Months
        </button>
        <button
          className={`tab  hover:bg-gradient-to-r bg-[#004281] px-7 -ml-[1px] text-lg py-3 hover:from-pink-500 hover:via-red-500 group-hover:to-[#DE466C] text-white font-medium rounded-full transition duration-300 ${
            activeTab === "yearly"
              ? "active bg-gradient-to-r from-[#DE466C] to-[#004281]"
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
