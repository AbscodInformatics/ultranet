import React from 'react'
import { BiRupee } from "react-icons/bi";
import { motion, useAnimation } from "framer-motion";

const LeasedLinres = () => {
  return (
    <div className="bg-black md:pb-5">
      <div className="flex flex-wrap mx-[5%]  bg-[black]">
        <motion.div
          initial={{ scale: 0, duration: 0 }}
          whileInView={{ scale: 1, duration: 75 }}
          className="flex justify-center md:flex-row flex-col mx-auto gap-10 mt-3"
        >
          <div className="flex items-center  justify-center py-8 px-4">
            <div className="md:w-[300px] flex  flex-col gap-5 shadow-lg  rounded-[20px] pb-10 dark:bg-gray-800 bg-white">
              <h1 className=" text-[white] py-3 rounded-t-[20px] bg-gradient-to-r from-[#e10000] via-[#cc3737] to-[#6c0505] dark:text-gray-100  text-center font-bold text-xl  pl-3">
                10 Mbps
              </h1>
              <div className="pl-4 text-lg">Fibre Broadband</div>
              <div className="flex mx-3 gap-3">
                <BiRupee size={60} />
                <span className="text-5xl font-bold">6500</span>
                <span className="text-xl mt-5">+ GST</span>
              </div>
              <div className="text-lg text-center ">For | Months + GST</div>
              <ul className="text-lg  list-disc pl-8 text-black   ">
                <li>Individual businesses</li>
                <li>10Mbps download & upload speed</li>
                <li>Unlimited usage</li>
              </ul>

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
            <div className="md:w-[300px] flex  flex-col gap-5 shadow-lg  rounded-[20px] pb-10 dark:bg-gray-800 bg-white">
              <h1 className=" text-[white] py-3 rounded-t-[20px] bg-gradient-to-r from-[#e10000] via-[#cc3737] to-[#6c0505] dark:text-gray-100  text-center font-bold text-xl  pl-3">
                20 Mbps
              </h1>
              <div className="pl-4 text-lg">Fibre Broadband</div>
              <div className="flex mx-3 gap-3">
                <BiRupee size={60} />
                <span className="text-5xl font-bold">12000</span>
                <span className="text-xl mt-5">+ GST</span>
              </div>
              <div className="text-lg text-center ">For | Months + GST</div>
              <ul className="text-lg  list-disc pl-8 text-black   ">
                <li>Individual businesses</li>
                <li>20 Mbps download + upload speed</li>
                <li>Unlimited usage, no data limits.</li>
              </ul>

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
            <div className="md:w-[300px] flex  flex-col gap-5 shadow-lg  rounded-[20px] pb-10 dark:bg-gray-800 bg-white">
              <h1 className=" text-[white] py-3 rounded-t-[20px] bg-gradient-to-r from-[#e10000] via-[#cc3737] to-[#6c0505] dark:text-gray-100  text-center font-bold text-xl  pl-3">
                30 Mbps
              </h1>
              <div className="pl-4 text-lg">Fibre Broadband</div>
              <div className="flex mx-3 gap-3">
                <BiRupee size={60} />
                <span className="text-5xl font-bold">18000</span>
                <span className="text-xl mt-5">+ GST</span>
              </div>
              <div className="text-lg text-center ">For | Months + GST</div>
              <ul className="text-lg  list-disc pl-8 text-black   ">
                <li>Individual businesses</li>
                <li>30 Mbps download + upload speed</li>
                <li>Unlimited usage, no data limits.</li>
              </ul>

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
            <div className="md:w-[300px] flex  flex-col gap-5 shadow-lg  rounded-[20px] pb-10 dark:bg-gray-800 bg-white">
              <h1 className=" text-[white] py-3 rounded-t-[20px] bg-gradient-to-r from-[#e10000] via-[#cc3737] to-[#6c0505] dark:text-gray-100  text-center font-bold text-xl  pl-3">
                50 Mbps
              </h1>
              <div className="pl-4 text-lg">Fibre Broadband</div>
              <div className="flex mx-3 gap-3">
                <BiRupee size={60} />
                <span className="text-5xl font-bold">25000</span>
                <span className="text-xl mt-5">+ GST</span>
              </div>
              <div className="text-lg text-center ">For | Months + GST</div>
              <ul className="text-lg  list-disc pl-8 text-black   ">
                <li>Individual businesses</li>
                <li>50 Mbps download + upload speed</li>
                <li>Unlimited usage, no data limits.</li>
              </ul>

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
}

export default LeasedLinres