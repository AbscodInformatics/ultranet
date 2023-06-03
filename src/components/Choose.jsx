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

  AOS.init({
    duration:3000,
    offset:0,
    
  });
 
  return (
    <div className="">
      <div className=" flex py-5  justify-center gap-5 flex-col items-center">
        <div className="text-5xl font-bold text-center mx-1 md:mx-0 bg-gradient-to-r from-teal-500 via-blue-500 to-pink-500 text-transparent bg-clip-text ">
          WHY CHOOSE ULTRANET
        </div>
        <div className="text-xlmt-[1%] text-[#5b5b98] font-medium mx-[5%]">
          Each type of hosting we provide is further optimized with unique
          performance tweaks!
        </div>
      </div>
      <div className="grid  md:grid-cols-3 mx-[8%] gap-10 py-12 px-4">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="md:w-[400px] group flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10 dark:bg-gray-800 bg-white"
        >
          <h1 className="pl-[7%] group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-t-[20px] bg-[#071343] dark:text-gray-100  text-center font-bold text-xl  ">
            <FaDownload size={40} />
          </h1>
          <div className="text-xl font-semibold mx-[7%] mt-2 ">
            Now No More GB Count
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
          data-aos-delay="200"
          data-aos="fade-up"
          className="md:w-[400px] group flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10 dark:bg-gray-800 bg-white"
        >
          <h1 className="pl-[7%] group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-t-[20px] bg-[#071343] dark:text-gray-100  text-center font-bold text-xl  ">
            <MdRocketLaunch size={40} />
          </h1>
          <div className="text-xl font-semibold mx-[7%] mt-2 ">
            Ultra Fast Connection
          </div>
          <div className="text-lg  h-28  py-3 text-justify mx-[7%] text-black   font-normal flex items-center  ">
            Ultra Fast Connection We always Provide the fastest speed available
            in the market so that you can be on top of the world.
          </div>{" "}
          <div className="flex justify-center">
            <button className="group-hover:bg-gradient-to-r bg-[#071343] px-8 text-lg py-3 group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-white font-medium rounded transition duration-300">
              Choose Plan
            </button>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="md:w-[400px] group flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10 dark:bg-gray-800 bg-white"
        >
          <h1 className="pl-[7%] group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-t-[20px] bg-[#071343] dark:text-gray-100  text-center font-bold text-xl  ">
            <RiSecurePaymentFill size={40} />
          </h1>
          <div className="text-xl font-semibold mx-[7%] mt-2 ">
            Online Payments
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
          data-aos-delay="400"
          className="md:w-[400px] group flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10 dark:bg-gray-800 bg-white"
        >
          <h1 className="pl-[7%] group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-t-[20px] bg-[#071343] dark:text-gray-100  text-center font-bold text-xl  ">
            <FaRupeeSign size={40} />
          </h1>
          <div className="text-xl font-semibold mx-[7%] mt-2 ">
            Affordable Packages
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
          data-aos-delay="400"
          className="md:w-[400px] group flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10 dark:bg-gray-800 bg-white"
        >
          <h1 className="pl-[7%] group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-t-[20px] bg-[#071343] dark:text-gray-100  text-center font-bold text-xl  ">
            <MdThumbUp size={40} />
          </h1>
          <div className="text-xl font-semibold mx-[7%] mt-2 ">
            99% Service Uptime
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
          data-aos-delay="400"
          className="md:w-[400px] group flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10 dark:bg-gray-800 bg-white"
        >
          <h1 className="pl-[7%] group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-t-[20px] bg-[#071343] dark:text-gray-100  text-center font-bold text-xl  ">
            <FaHome size={40} />
          </h1>
          <div className="text-xl font-semibold mx-[7%] mt-2 ">
            Unlimited for a Single Household
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
      <div>
        <img src="/ml.png" alt="" />
      </div>
    </div>
  );
};

export default Choose;
