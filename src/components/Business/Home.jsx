import React ,{useState} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Businessbroadband from './Businessbroadband';
import LeasedLinres from './LeasedLinres';

const Home = () => {
    const [activeTab, setActiveTab] = useState("monthly");

    const handleTabChange = (tab) => {
      setActiveTab(tab);
    };

    const renderTabContent = () => {
      switch (activeTab) {
        case "monthly":
          return <Businessbroadband />;
        case "threemonth":
          return <LeasedLinres />;
       
        default:
          return null;
      }
    };
  return (
    <div className=" pt-[10%]">
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
              src="/businesshome1.jpg"
              alt=""
              className="object-fill h-[80vh] w-full"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/businesshome2.jpg"
              alt=""
              className="object-fill h-[80vh] w-full"
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <div className="bg-black py-7">
          <h1 className='text-white text-5xl mt-5 text-center'>Home Broadband</h1>
          <div className="flex w-[500px] my-5 mx-auto text-xl rounded-xl bg-white h-16 justify-center gap-10 items-center ">
            <button
              className={`tab active:bg-[##af0d0d] p-4 hover:text-white  rounded-lg focus:bg-[#af0d0d]  hover:bg-[#af0d0d] ${
                activeTab === "monthly" ? "active" : ""
              }`}
              onClick={() => handleTabChange("monthly")}
            >
              Business BroadBand
            </button>
            <span className="text-[30px]">|</span>
            <button
              className={`tab active:bg-[##af0d0d] hover:text-white  rounded-lg p-4 focus:bg-[#af0d0d] hover:bg-[#af0d0d] ${
                activeTab === "threemonth" ? "active" : ""
              }`}
              onClick={() => handleTabChange("threemonth")}
            >
              Leased Lines
            </button>
          </div>
          <div className="mt-4">{renderTabContent()}</div>
        </div>
      </div>
    </div>
  );
}

export default Home