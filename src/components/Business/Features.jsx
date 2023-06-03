import React, { useState } from "react";
import { MdOutlineSpeed } from "react-icons/md";
import { BsFiles, BsSpeedometer } from "react-icons/bs";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { HiUserGroup } from "react-icons/hi";
import { AiOutlinePercentage } from "react-icons/ai";
import { RiArrowUpDownFill } from "react-icons/ri";
import { BiPhoneCall } from "react-icons/bi";
import { SiTimescale } from "react-icons/si";
import { SlBadge } from "react-icons/sl";

const Features = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <div className="mx-auto bg-black mb-[5%] shadow rounded w-full">
        <div className=" rounded-3xl bg-gradient-to-t from-[#e10000] via-[#cc3737] to-[#6c0505]  mx-[7%] p-[5%]">
          <div className="py-6 xl:px-8 text-center lg:px-8 md:px-8 px-4 flex flex-col justify-between items-center">
            <p className="font-bold text-center text-lg xl:text-xl lg:text-xl md:text-xl text-white dark:text-gray-100">
              Future-proof your business needs
            </p>
            <p className="text-white text-lg mt-3">
              Make your business more productive with UltraNet business
              broadband. Backed by stringent Service Level Agreements, we’ll
              guarantee your connection stays on, and stays fast
            </p>
          </div>

          <div className="p-5 grid grid-cols-2 gap-8 rounded mb-6  dark:bg-gray-700">
            <div className="">
              <ul className="flex flex-col justify-center items-center gap-5">
                <HiUserGroup size={80} color="white" />
                <li className="mb-2 text-lg text-white dark:text-gray-400">
                  Effortlessly keep multiple users connected
                </li>
              </ul>
            </div>
            <div className="">
              <ul className="flex flex-col justify-center items-center gap-5">
                <AiOutlinePercentage size={80} color="white" />
                <li className="mb-2 text-lg text-white dark:text-gray-400">
                  Effortlessly keep multiple users connected
                </li>
              </ul>
            </div>
            <div className="">
              <ul className="flex flex-col justify-center items-center gap-5">
                <RiArrowUpDownFill size={80} color="white" />
                <li className="mb-2 text-lg text-white dark:text-gray-400">
                  No throttling & no contention
                </li>
              </ul>
            </div>
            <div className="">
              <ul className="flex flex-col justify-center items-center gap-5">
                <BiPhoneCall size={80} color="white" />
                <li className="mb-2 text-lg text-white dark:text-gray-400">
                  No throttling & no contention
                </li>
              </ul>
            </div>
            <div className="">
              <ul className="flex flex-col justify-center items-center gap-5">
                <SiTimescale size={80} color="white" />
                <li className="mb-2 text-lg text-white dark:text-gray-400">
                  24/7 real-time network monitoring and business support
                </li>
              </ul>
            </div>
            <div className="">
              <ul className="flex flex-col justify-center items-center gap-5">
                <SlBadge size={80} color="white" />
                <li className="mb-2 text-lg text-white dark:text-gray-400">
                  24/7 real-time network monitoring and business support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Card code block end */}
    </>
  );
};

export default Features;
