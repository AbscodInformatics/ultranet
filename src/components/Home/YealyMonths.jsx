import React from "react";
import { BiRupee } from "react-icons/bi";
import { motion, useAnimation } from "framer-motion";

const YealyMonths = () => {
  return (
    <div className="bg-black md:pb-5">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-[5%]  bg-[black]">
        <motion.div
          initial={{ scale: 0, duration: 0 }}
          whileInView={{ scale: 1, duration: 75 }}
          className="flex justify-center md:flex-row flex-col mx-auto gap-10 mt-3"
        >
          <div className="flex items-center  justify-center py-8 px-4">
            <div className="md:w-[400px] flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10 dark:bg-gray-800 bg-white">
              <h1 className=" text-[white] py-3 rounded-t-[20px] bg-gradient-to-r from-[#e10000] via-[#cc3737] to-[#6c0505] dark:text-gray-100  text-center font-bold text-xl  pl-3">
                100 Mbps
              </h1>
              <button className="text-xl flex justify-evenly mx-2 text-white text-center bg-gradient-to-r px-5 py-2 rounded-3xl from-[#e10000] via-[#f03e3e] to-[#1c0303] ">
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
                  <span className="text-5xl font-bold">399</span>
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
                <button className="text-xl   text-white text-center bg-gradient-to-r px-7 py-2 rounded-3xl from-[#e10000] via-[#f03e3e] to-[#1c0303] ">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0, duration: 0 }}
          whileInView={{ scale: 1, duration: 75 }}
          className="flex justify-center md:flex-row flex-col mx-auto gap-10 mt-3"
        >
          <div className="flex items-center  justify-center py-8 px-4">
            <div className="md:w-[400px] flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10 dark:bg-gray-800 bg-white">
              <h1 className=" text-[white] py-3 rounded-t-[20px] bg-gradient-to-r from-[#e10000] via-[#cc3737] to-[#6c0505] dark:text-gray-100  text-center font-bold text-xl  pl-3">
                200 Mbps
              </h1>
              <button className="text-xl flex justify-evenly mx-2 text-white text-center bg-gradient-to-r px-5 py-2 rounded-3xl from-[#e10000] via-[#f03e3e] to-[#1c0303] ">
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
                  <span className="text-5xl font-bold"> 416</span>
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
                <button className="text-xl   text-white text-center bg-gradient-to-r px-7 py-2 rounded-3xl from-[#e10000] via-[#f03e3e] to-[#1c0303] ">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0, duration: 0 }}
          whileInView={{ scale: 1, duration: 75 }}
          className="flex justify-center md:flex-row flex-col mx-auto gap-10 mt-3"
        >
          <div className="flex items-center  justify-center py-8 px-4">
            <div className="md:w-[400px] flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10 dark:bg-gray-800 bg-white">
              <h1 className=" text-[white] py-3 rounded-t-[20px] bg-gradient-to-r from-[#e10000] via-[#cc3737] to-[#6c0505] dark:text-gray-100  text-center font-bold text-xl  pl-3">
                300 Mbps
              </h1>
              <button className="text-xl flex justify-evenly mx-2 text-white text-center bg-gradient-to-r px-5 py-2 rounded-3xl from-[#e10000] via-[#f03e3e] to-[#1c0303] ">
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
                300 Mbps upload and download speed. Unlimited usage, no data
                limits. 99% Uptime Server. No complaints, EVER!
              </div>

              <div className="flex justify-center">
                <button className="text-xl   text-white text-center bg-gradient-to-r px-7 py-2 rounded-3xl from-[#e10000] via-[#f03e3e] to-[#1c0303] ">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0, duration: 0 }}
          whileInView={{ scale: 1, duration: 75 }}
          className="flex justify-center md:flex-row flex-col mx-auto gap-10 mt-3"
        >
          <div className="flex items-center  justify-center py-8 px-4">
            <div className="md:w-[400px] flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10 dark:bg-gray-800 bg-white">
              <h1 className=" text-[white] py-3 rounded-t-[20px] bg-gradient-to-r from-[#e10000] via-[#cc3737] to-[#6c0505] dark:text-gray-100  text-center font-bold text-xl  pl-3">
                500 Mbps
              </h1>
              <button className="text-xl flex justify-evenly mx-2 text-white text-center bg-gradient-to-r px-5 py-2 rounded-3xl from-[#e10000] via-[#f03e3e] to-[#1c0303] ">
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
                  <span className="text-5xl font-bold"> 733</span>
                  <span className="text-xl mt-5">+ GST</span>
                </div>
                <div className="flex gap-3 justify-center">
                  <span className="text-2xl">|</span>
                  <span className="text-xl">VALIDITY 28 Days</span>
                </div>
              </div>
              <div className="flex px-4 gap-4 items-center">
                <img src="/sony.png" alt="" className="w-20" />
                <img src="/sony1.png" alt="" className="w-20" />
                <span>+8</span>
              </div>
              <div className="text-lg py-3 text-black mx-8 text-left font-normal flex items-center  ">
                usage, no data limits. 99% Uptime Server. No complaints, EVER!
                Choose Plan ₹ 733 VALIDITY 28 Days +8 More 500 Mbps upload and
                download speed. Unlimited usage, no data limits. Free Activation
                And Free 8+ OTT Apps.
              </div>

              <div className="flex justify-center">
                <button className="text-xl   text-white text-center bg-gradient-to-r px-7 py-2 rounded-3xl from-[#e10000] via-[#f03e3e] to-[#1c0303] ">
                  Choose Plan
                </button>
              </div>
            </div>
          </div>
        </motion.div>
        <style>
          {`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .center {
    padding-top: 100px;
    padding-left: 100px;
    transform: translate(-50%, -50%);
  }
  .center .stars {
    width: 325px;
  }
  .stars input {
    display: none;
  }
  .stars label {
    font-size: 50px;
    color: lightgrey;

    text-shadow: 1px 1px #bbb;
  }
  .stars label:before {
    content: "🟊";
  }
  .stars input:checked ~ label {
    color: gold;
    text-shadow: 1px 1px #c60;
  }
  .stars:not(:checked) > label:hover,
  .stars:not(:checked) > label:hover ~ label {
    color: gold;
    cursor: pointer;
  }
  .stars input:checked > label:hover,
  .stars input:checked > label:hover ~ label {
    color: #fbbf24;
    text-shadow: 1px 1px goldenrod;
  }
  .stars .result:before {
    position: absolute;
    content: "";
    right: 0;
    left: 0;
    bottom: 111px;

    font-size: 30px;
    font-weight: 500;
    color: #1f2937;
    font-family: "Poppins", sans-serif;

    font-weight: 900;
  }
    `}
        </style>
      </div>
    </div>
  );
};

export default YealyMonths;
