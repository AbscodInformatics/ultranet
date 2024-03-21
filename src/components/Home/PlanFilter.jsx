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
     

      <div className="mt-4">{renderTabContent()}</div>
    </div>
  );
};
export default PlanFilter;
