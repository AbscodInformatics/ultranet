import React from "react";
import { BiRupee } from "react-icons/bi";
import { motion, useAnimation } from "framer-motion";

const AllMonths = () => {
  return (
    <div className="bg-black md:pb-5">
      <div className=" flex py-5 text-white justify-center gap-5 flex-col items-center">
        <div className="md:text-3xl  text-xl text-white">
          INFINITE FIBRE BROADBAND PLANS
        </div>
        <div className="gap-5 flex">
          <button className="bg-[#e10000] py-2 px-5 rounded-lg">
            Home Broadband
          </button>
          <button className="bg-[#ffffff] text-[#e10000] py-2 px-5 rounded-lg">
            Business Broadband
          </button>
        </div>
      </div>

      <div className="flex flex-wrap mx-[5%]  bg-[black]">
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
              <div className="flex mx-3 gap-3">
                <BiRupee size={60} />
                <span className="text-5xl font-bold">499</span>
                <span className="text-xl mt-5">+ GST</span>
              </div>
              <div className="text-lg py-3 text-black mx-8 text-left font-normal flex items-center  ">
                The INDIA′s fastest broadband 200Mbps download & upload speed
                Unlimited usage, no data limits Free Activation
              </div>

              <div className="flex justify-center">
                <button className="text-xl   text-white text-center bg-gradient-to-r px-7 py-2 rounded-3xl from-[#e10000] via-[#f03e3e] to-[#1c0303] ">
                  Get Started
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
              <div className="flex mx-3 gap-3">
                <BiRupee size={60} />
                <span className="text-5xl font-bold">799</span>
                <span className="text-xl mt-5">+ GST</span>
              </div>
              <div className="text-lg  text-black mx-8 text-left font-normal flex items-center  ">
                The INDIA′s fastest broadband 500Mbps download & upload speed
                Unlimited usage, no data limits Free Activation And Free 5 + OTT
                Apps.
              </div>

              <div className="flex justify-center">
                <button className="text-xl   text-white text-center bg-gradient-to-r px-7 py-2 rounded-3xl from-[#e10000] via-[#f03e3e] to-[#1c0303] ">
                  Get Started
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
                750 Mbps
              </h1>
              <div className="flex mx-3 gap-3">
                <BiRupee size={60} />
                <span className="text-5xl font-bold">999</span>
                <span className="text-xl mt-5">+ GST</span>
              </div>
              <div className="text-lg  text-black mx-8 text-left font-normal flex items-center  ">
                The INDIA′s fastest broadband 750Mbps download & upload speed
                Unlimited usage, no data limits Free Activation And Free 5 + OTT
                Apps.
              </div>

              <div className="flex justify-center">
                <button className="text-xl   text-white text-center bg-gradient-to-r px-7 py-2 rounded-3xl from-[#e10000] via-[#f03e3e] to-[#1c0303] ">
                  Get Started
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
}
export default AllMonths;
