import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import MyBuilding from "./MyBuilding";
import MyHome from "./MyHome";

const Home = () => {
  useEffect(() => {
    // AOS.init();
  });
  const [activeTab, setActiveTab] = useState("monthly");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "monthly":
        return <MyHome />;
      case "threemonth":
        return <MyBuilding />;

      default:
        return null;
    }
  };
  return (
    <div>
      <div>
        <Swiper
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            778: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
            1224: { slidesPerView: 1 },
            1324: { slidesPerView: 1 },
            1524: { slidesPerView: 1 },
          }}
          modules={[Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="/businesshome3.jpg"
              alt=""
              className="object-fill h-[30vh] md:h-[80vh] w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/businesshome2.jpg"
              alt=""
              className="object-fill h-[30vh] md:h-[80vh] w-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="mx-[5%]">
        <div className=" py-7">
          <div className="text-5xl  font-bold text-center mx-1 md:mx-0 bg-gradient-to-r from-teal-500 via-blue-500 to-pink-500 text-transparent bg-clip-text py-[2%] ">
            How To Bring UltraNet...
          </div>
          <div className="flex md:w-[500px] my-7 mx-[2%] md:mx-auto text-xl rounded-xl bg-white h-14 md:h-16 justify-center gap-5 md:gap-10 items-center ">
            <button
              className={`tab hover:bg-gradient-to-r bg-[#071343] px-4 md:px-8 text-lg py-3 hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 text-white font-medium rounded transition duration-300 ${
                activeTab === "monthly"
                  ? "active bg-gradient-to-r from-[#ee9ca7] to-[#2980B9]"
                  : ""
              }`}
              onClick={() => handleTabChange("monthly")}
            >
              To My Home
            </button>
            <button
              className={`tab hover:bg-gradient-to-r bg-[#071343] px-4 md:px-8 text-lg py-3 hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 text-white font-medium rounded transition duration-300 ${
                activeTab === "threemonth"
                  ? "active bg-gradient-to-r from-[#ee9ca7] to-[#2980B9]"
                  : ""
              }`}
              onClick={() => handleTabChange("threemonth")}
            >
              To My Building
            </button>
          </div>
          <div className="mt-4">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
