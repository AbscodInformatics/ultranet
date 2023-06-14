import React, { useEffect } from "react";
import { FaDownload } from "react-icons/fa";
// import { HiRocketLaunch } from "react-icons/hi";
import { MdRocketLaunch, MdThumbUp } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaRupeeSign, FaHome } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Choose = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 0,
      once: true,
    });
  });

 
 
  return (
    <div data-aos="zoom-in-up" data-aos-once="false" className="mt-5">
      <div
        data-aos="zoom-in-up"
        data-aos-once="false"
        // data-aos-delay="500"
        className=" flex py-5  justify-center gap-5 flex-col items-center"
      >
        <div className="text-5xl font-bold text-center mx-1 md:mx-0 bg-gradient-to-r from-teal-500 via-blue-500 to-pink-500 text-transparent bg-clip-text ">
          WHY CHOOSE ULTRANET
        </div>
        <div className="text-xlmt-[1%] text-[#5b5b98] font-medium mx-[5%]">
          Each type of hosting we provide is further optimized with unique
          performance tweaks!
        </div>
      </div>
      <div className="grid  md:grid-cols-3 mx-[3%] lg:mx-[8%] gap-10 py-12 px-4">
        <div
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="1000"
          className="md:w-[350px] group flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white"
        >
          <div className="pl-[7%] flex gap-5 items-center group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-t-[20px] bg-[#071343]   text-center font-semibold text-xl  ">
            <FaDownload size={40} />
            <span> Now No More GB Count</span>
          </div>
          <div className="text-lg  h-28  py-3 text-justify mx-[7%] text-black   font-normal flex items-center  ">
            Enjoy truly unlimited high- speed access to Internet with all
            packages at all times
          </div>{" "}
          <div className="flex justify-center">
            <button className="group-hover:bg-gradient-to-r bg-[#071343] px-8 text-lg py-3 group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-white font-medium rounded transition duration-300">
              Choose Plan
            </button>
          </div>
        </div>
        <div
          data-aos-delay="1200"
          data-aos-once="false"
          data-aos="fade-up"
          className="md:w-[350px] group flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white"
        >
          <div className="pl-[7%] flex gap-5 items-center group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-t-[20px] bg-[#071343]   text-center font-semibold text-xl  ">
            <MdRocketLaunch size={40} /> <span> Ultra Fast Connection</span>
          </div>
          <div className="text-lg  h-28  py-3 text-justify mx-[7%] text-black   font-normal flex items-center  ">
            We always Provide the fastest speed available in the market so that
            you can be on top of the world.
          </div>{" "}
          <div className="flex justify-center">
            <button className="group-hover:bg-gradient-to-r bg-[#071343] px-8 text-lg py-3 group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-white font-medium rounded transition duration-300">
              Choose Plan
            </button>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="1300"
          className="md:w-[350px] group flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white"
        >
          <div className="pl-[7%] flex gap-5 items-center group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-t-[20px] bg-[#071343]   text-center font-semibold text-xl  ">
            <RiSecurePaymentFill size={40} /> <span> Online Payments</span>
          </div>
          <div className="text-lg py-3   h-28 text-justify mx-[7%] text-black   font-normal flex items-center  ">
            Go cashless Pay Online on MyNet.UltraNet.co.in to save time and
            renew instantly.
          </div>{" "}
          <div className="flex justify-center">
            <button className="group-hover:bg-gradient-to-r bg-[#071343] px-8 text-lg py-3 group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-white font-medium rounded transition duration-300">
              Choose Plan
            </button>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="1600"
          className="md:w-[350px] group flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white"
        >
          <div className="pl-[7%] flex gap-5 items-center group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-t-[20px] bg-[#071343]   text-center font-semibold text-xl  ">
            <FaRupeeSign size={40} />
            <span> Affordable Packages</span>
          </div>
          <div className="text-lg py-3  h-28  text-justify mx-[7%] text-black   font-normal flex items-center  ">
            Not only are our connections fast but we have a package to suit
            every budget.
          </div>{" "}
          <div className="flex justify-center">
            <button className="group-hover:bg-gradient-to-r bg-[#071343] px-8 text-lg py-3 group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-white font-medium rounded transition duration-300">
              Choose Plan
            </button>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="1800"
          className="md:w-[350px] group flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white"
        >
          <div className="pl-[7%] flex gap-5 items-center group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-t-[20px] bg-[#071343]   text-center font-semibold text-xl  ">
            <MdThumbUp size={40} />
            <span> 99% Service Uptime</span>
          </div>
          <div className="text-lg py-3  h-28  text-justify mx-[7%] text-black   font-normal flex items-center  ">
            Our infrastructure is stable. With our service you can look forward
            to reliable and blisteringly.
          </div>{" "}
          <div className="flex justify-center">
            <button className="group-hover:bg-gradient-to-r bg-[#071343] px-8 text-lg py-3 group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-white font-medium rounded transition duration-300">
              Choose Plan
            </button>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="2000"
          data-aos-once="false"
          className="md:w-[350px] group flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white"
        >
          <div className="pl-[7%] flex gap-2 items-center group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-t-[20px] bg-[#071343]   text-center font-semibold text-lg  ">
            <FaHome size={30} />
            <span> Unlimited for a Single Household</span>
          </div>
          <div className="text-lg py-3  h-28  text-justify mx-[7%] text-black   font-normal flex items-center  ">
            Our service are truly unlimited for single household, connect with
            your friends and family.
          </div>{" "}
          <div className="flex justify-center">
            <button className="group-hover:bg-gradient-to-r bg-[#071343] px-8 text-lg py-3 group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-white font-medium rounded transition duration-300">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
      <div
        className="py-[3%] mx-[8%]"
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-delay="8000"
        // data-aos-anchor-placement="bottom-center"
      >
        <img src="/ml1.png" alt="" />
      </div>
      {/* <div className="py-[3%] mx-[8%]"></div> */}
    </div>
  );
};

export default Choose;
