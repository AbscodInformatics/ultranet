import React from 'react'
import { BiRupee } from "react-icons/bi";
import { motion, useAnimation } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
const Businessbroadband = () => {
   AOS.init({
     duration: 3000,
     offset: 0,
   });
  return (
    <div className=" md:pb-5">
      <div className="flex flex-wrap mx-[5%]  ">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="group flex justify-center md:flex-row flex-col mx-auto gap-10 mt-3"
        >
          <div className="flex items-center  justify-center py-8 px-4">
            <div className="md:w-[300px] flex  flex-col gap-5 shadow-lg  rounded-[20px] pb-10 dark:bg-gray-800 bg-white">
              <h1 className="pl-[7%] group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-t-[20px] bg-[#071343] dark:text-gray-100  text-center font-bold text-xl">
                50 Mbps
              </h1>
              <div className="pl-4 text-lg">Fibre Broadband</div>
              <div className="flex mx-3 gap-3">
                <BiRupee size={60} />
                <span className="text-5xl font-bold">2000</span>
                <span className="text-xl mt-5">+ GST</span>
              </div>
              <div className="text-lg text-center ">For | Months + GST</div>
              <ul className="text-lg  list-disc pl-8 text-black   ">
                <li>Individual businesses</li>
                <li>50Mbps download & upload speed</li>
                <li>Unlimited usage</li>
              </ul>

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
            <div className="md:w-[300px] flex  flex-col gap-5 shadow-lg  rounded-[20px] pb-10 dark:bg-gray-800 bg-white">
              <h1 className="pl-[7%] group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-t-[20px] bg-[#071343] dark:text-gray-100  text-center font-bold text-xl">
                100 Mbps
              </h1>
              <div className="pl-4 text-lg">Fibre Broadband</div>
              <div className="flex mx-3 gap-3">
                <BiRupee size={60} />
                <span className="text-5xl font-bold">3000</span>
                <span className="text-xl mt-5">+ GST</span>
              </div>
              <div className="text-lg text-center ">For | Months + GST</div>
              <ul className="text-lg  list-disc pl-8 text-black   ">
                <li>Individual businesses</li>
                <li>100 Mbps download + upload speed</li>
                <li>Unlimited usage, no data limits.</li>
              </ul>

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
            <div className="md:w-[300px] flex  flex-col gap-5 shadow-lg  rounded-[20px] pb-10 dark:bg-gray-800 bg-white">
              <h1 className="pl-[7%] group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-t-[20px] bg-[#071343] dark:text-gray-100  text-center font-bold text-xl">
                200 Mbps
              </h1>
              <div className="pl-4 text-lg">Fibre Broadband</div>
              <div className="flex mx-3 gap-3">
                <BiRupee size={60} />
                <span className="text-5xl font-bold">3500</span>
                <span className="text-xl mt-5">+ GST</span>
              </div>
              <div className="text-lg text-center ">For | Months + GST</div>
              <ul className="text-lg  list-disc pl-8 text-black   ">
                <li>Individual businesses</li>
                <li>200 Mbps download + upload speed</li>
                <li>Unlimited usage, no data limits.e</li>
              </ul>

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
            <div className="md:w-[300px] flex  flex-col gap-5 shadow-lg  rounded-[20px] pb-10 dark:bg-gray-800 bg-white">
              <h1 className="pl-[7%] group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-t-[20px] bg-[#071343] dark:text-gray-100  text-center font-bold text-xl">
                1 Gbps
              </h1>
              <div className="pl-4 text-lg">Fibre Broadband</div>
              <div className="flex mx-3 gap-3">
                <BiRupee size={60} />
                <span className="text-5xl font-bold">4500</span>
                <span className="text-xl mt-5">+ GST</span>
              </div>
              <div className="text-lg text-center ">For | Months + GST</div>
              <ul className="text-lg  list-disc pl-8 text-black   ">
                <li>Individual businesses</li>
                <li>1 Gbps download + upload speed</li>
                <li>Unlimited usage, no data limits.</li>
              </ul>

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
}

export default Businessbroadband