import React ,{useState ,useEffect} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Businessbroadband from './Businessbroadband';
import LeasedLinres from './LeasedLinres';

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
          return <Businessbroadband />;
        case "threemonth":
          return <LeasedLinres />;
       
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
        </Swiper>
      </div>
      <div>
        <div className=" py-7">
          <div className="flex md:w-[500px] my-5 mx-[2%] md:mx-auto text-xl rounded-xl bg-white h-14 md:h-16 justify-center gap-5 md:gap-10 items-center ">
            <button
              className={`tab group-hover:bg-[#DE466C] bg-[#004281] px-4 md:px-8 text-lg py-3 text-white font-medium rounded-full transition duration-300 ${
                activeTab === "monthly"
                  ? "active bg-gradient-to-r from-[#DE466C] to-[#004281]"
                  : ""
              }`}
              onClick={() => handleTabChange("monthly")}
            >
              Business BroadBand
            </button>
            <button
              className={`tab group-hover:bg-[#DE466C] bg-[#004281] px-4 md:px-8 text-lg py-3  text-white font-medium rounded-full transition duration-300 ${
                activeTab === "threemonth"
                  ? "active bg-gradient-to-r from-[#DE466C] to-[#004281]"
                  : ""
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