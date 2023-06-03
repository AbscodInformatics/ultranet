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
      <div className="flex w-[700px] mt-5 mx-auto text-xl rounded-xl bg-[#071343] h-16 justify-center gap-10 items-center ">
        <button
          className={`tab active:bg-[##af0d0d] p-4 hover:text-white  rounded-lg focus:bg-[#af0d0d]  hover:bg-[#af0d0d] ${
            activeTab === "monthly" ? "active" : ""
          }`}
          onClick={() => handleTabChange("monthly")}
        >
          1 Monthly
        </button>
        <button
          className={`tab active:bg-[##af0d0d] hover:text-white  rounded-lg p-4 focus:bg-[#af0d0d] hover:bg-[#af0d0d] ${
            activeTab === "threemonth" ? "active" : ""
          }`}
          onClick={() => handleTabChange("threemonth")}
        >
          3 Month
        </button>
        <button
          className={`tab active:bg-[##af0d0d] p-4 hover:text-white  rounded-lg focus:bg-[#af0d0d] hover:bg-[#af0d0d] ${
            activeTab === "sixmonth" ? "active" : ""
          }`}
          onClick={() => handleTabChange("sixmonth")}
        >
          6 Months
        </button>
        <button
          className={`tab active:bg-[##af0d0d] p-4 hover:text-white  rounded-lg focus:bg-[#af0d0d] hover:bg-[#af0d0d] ${
            activeTab === "yearly" ? "active" : ""
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
