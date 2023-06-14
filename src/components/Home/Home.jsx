import React,{useEffect} from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
    useEffect(() => {
      AOS.init();
    });
  return (
    <div className="pt-[30%] md:pt-[3%]">
      <div
        className="bg-black  max-w-[100vw] md:mx-auto h-[20vh] md:h-[30vh] lg:h-[85vh] bg-contain bg-no-repeat"
        style={{
          backgroundImage: `url("/HomeFttp1.png")`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="py-[5%]">
        <div>
          <div
            data-aos="zoom-in-up"
            data-aos-once="false"
            className="text-5xl font-bold text-center mx-1 md:mx-0 bg-gradient-to-r from-teal-500 via-blue-500 to-pink-500 text-transparent bg-clip-text "
          >
            Home Broadband
          </div>
          <div
            data-aos="flip-up"
            data-aos-once="false"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            className=" flex justify-center mt-[1%] md:mt-[2%] items-center"
          >
            <img src="/ChartPlan.png" alt="" className="w-[90%] md:w-[70%]" />
          </div>
          <div className="bg-white"></div>
        </div>
      </div>
    </div>
  );
}

export default Home