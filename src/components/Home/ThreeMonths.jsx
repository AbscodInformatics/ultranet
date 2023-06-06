import React from "react";
import { BiRupee } from "react-icons/bi";
import { motion, useAnimation } from "framer-motion";

const ThreeMonths = () => {
  return (
    <div className=" md:pb-5">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-[5%]  ">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="group flex justify-center md:flex-row flex-col mx-auto gap-10 mt-3"
        >
          <div className="flex items-center  justify-center py-8 px-4">
            <div className="md:w-[400px] flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white">
              <h1 className="pl-[7%] group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-t-[20px] bg-[#071343]   text-center font-bold text-xl">
                100 Mbps
              </h1>
              <button className="flex justify-evenly pl-[7%] group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-3xl bg-[#071343]  mx-2 text-center font-bold text-xl">
                <span>Basic</span>
                <span>|</span>
                <span>OTT</span>
                <span>|</span>
                <span>OTT+</span>
              </button>
              <div className="flex items-center mx-3 gap-3">
                <div className="flex">
                  {" "}
                  <BiRupee size={50} />
                  <span className="text-5xl font-bold"> 499</span>
                  <span className="text-xl mt-5">+ GST</span>
                </div>
                <div className="flex gap-3 justify-center">
                  <span className="text-2xl">|</span>
                  <span className="text-xl">VALIDITY 28 Days</span>
                </div>
              </div>
              <div className="text-lg py-3 text-black mx-8 text-left font-normal flex items-center  ">
                100 Mbps upload and download speed. Unlimited usage, no data
                limits. 99% Uptime Server. No complaints, EVER!
              </div>

              <div className="flex justify-center">
                <button className="group-hover:bg-gradient-to-r bg-[#071343] px-8 text-lg py-3 group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-white font-medium rounded transition duration-300  ">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="group flex justify-center md:flex-row flex-col mx-auto gap-10 mt-3"
        >
          <div className="flex items-center  justify-center py-8 px-4">
            <div className="md:w-[400px] flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white">
              <h1 className="pl-[7%] group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-t-[20px] bg-[#071343]   text-center font-bold text-xl">
                200 Mbps
              </h1>
              <button className="flex justify-evenly pl-[7%] group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-3xl bg-[#071343]  mx-2 text-center font-bold text-xl">
                <span>Basic</span>
                <span>|</span>
                <span>OTT</span>
                <span>|</span>
                <span>OTT+</span>
              </button>
              <div className="flex items-center mx-3 gap-3">
                <div className="flex">
                  {" "}
                  <BiRupee size={50} />
                  <span className="text-5xl font-bold"> 549</span>
                  <span className="text-xl mt-5">+ GST</span>
                </div>
                <div className="flex gap-3 justify-center">
                  <span className="text-2xl">|</span>
                  <span className="text-xl">VALIDITY 28 Days</span>
                </div>
              </div>
              <div className="text-lg py-3 text-black mx-8 text-left font-normal flex items-center  ">
                200 Mbps upload and download speed. Unlimited usage, no data
                limits. 99% Uptime Server. No complaints, EVER!
              </div>

              <div className="flex justify-center">
                <button className="group-hover:bg-gradient-to-r bg-[#071343] px-8 text-lg py-3 group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-white font-medium rounded transition duration-300 ">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="group flex justify-center md:flex-row flex-col mx-auto gap-10 mt-3"
        >
          <div className="flex items-center  justify-center py-8 px-4">
            <div className="md:w-[400px] flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white">
              <h1 className="pl-[7%] group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-t-[20px] bg-[#071343]   text-center font-bold text-xl">
                300 Mbps
              </h1>
              <button className="flex justify-evenly pl-[7%] group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-3xl bg-[#071343]  mx-2 text-center font-bold text-xl ">
                <span>Basic</span>
                <span>|</span>
                <span>OTT</span>
                <span>|</span>
                <span>OTT+</span>
              </button>
              <div className="flex items-center mx-3 gap-3">
                <div className="flex">
                  {" "}
                  <BiRupee size={50} />
                  <span className="text-5xl font-bold"> 699</span>
                  <span className="text-xl mt-5">+ GST</span>
                </div>
                <div className="flex gap-3 justify-center">
                  <span className="text-2xl">|</span>
                  <span className="text-xl">VALIDITY 28 Days</span>
                </div>
              </div>
              <div className="text-lg py-3 text-black mx-8 text-left font-normal flex items-center  ">
                300 Mbps upload and download speed. Unlimited usage, no data
                limits. 99% Uptime Server. No complaints, EVER!
              </div>

              <div className="flex justify-center">
                <button className="group-hover:bg-gradient-to-r bg-[#071343] px-8 text-lg py-3 group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-white font-medium rounded transition duration-300 ">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="group flex justify-center md:flex-row flex-col mx-auto gap-10 mt-3"
        >
          <div className="flex items-center  justify-center py-8 px-4">
            <div className="md:w-[400px] flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white">
              <h1 className="pl-[7%] group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-t-[20px] bg-[#071343]   text-center font-bold text-xl">
                500 Mbps
              </h1>
              <button className="flex justify-evenly pl-[7%] group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-3xl bg-[#071343]  mx-2 text-center font-bold text-xl ">
                <span>Basic</span>
                <span>|</span>
                <span>OTT</span>
                <span>|</span>
                <span>OTT+</span>
              </button>
              <div className="flex items-center mx-3 gap-3">
                <div className="flex">
                  {" "}
                  <BiRupee size={50} />
                  <span className="text-5xl font-bold"> 833</span>
                  <span className="text-xl mt-5">+ GST</span>
                </div>
                <div className="flex gap-3 justify-center">
                  <span className="text-2xl">|</span>
                  <span className="text-xl">VALIDITY 28 Days</span>
                </div>
              </div>
              <div className="text-lg py-3 text-black mx-8 text-left font-normal flex items-center  ">
                500 Mbps upload and download speed. Unlimited usage, no data
                limits. 99% Uptime Server. No complaints, EVER!
              </div>

              <div className="flex justify-center">
                <button className="group-hover:bg-gradient-to-r bg-[#071343] px-8 text-lg py-3 group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-white font-medium rounded transition duration-300 ">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeMonths;
