import React, { useEffect } from "react";
import { FaDownload } from "react-icons/fa";
// import { HiRocketLaunch } from "react-icons/hi";
import { MdRocketLaunch, MdThumbUp } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaRupeeSign, FaHome } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";

const Choose = () => {

 
  return (
    <div className="bg-black">
      <div className=" flex py-5 text-white justify-center gap-5 flex-col items-center">
        <div className="text-3xl  text-white">WHY CHOOSE ULTRANET</div>
        <div className="text-xl mt-[1%] mx-[5%]">
          Each type of hosting we provide is further optimized with unique
          performance tweaks!
        </div>
      </div>
      <div className="grid  md:grid-cols-3 mx-[8%] gap-8 py-12 px-4">
        <motion.div
          initial={{ scale: 0, duration: 0 }}
          whileInView={{ scale: 1, duration: 75 }}
          className="text-white bg-gradient-to-r px-7 py-16 rounded-3xl from-[#e10000] via-[#cc3737] to-[#6c0505] max-w-sm flex flex-col gap-10 dark:bg-gray-800 shadow "
        >
          <div className="sm:text-4xl text-3xl font-semibold leading-8 text-gray-800 dark:text-gray-100">
            <FaDownload color="white" />
          </div>
          <div className="text-xl  mt-2 ">Now No More GB Count</div>
          <div className="text-lg text-justify">
            Enjoy truly unlimited high- speed access to Internet with all
            packages at all times
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0, duration: 0 }}
          whileInView={{ scale: 1, duration: 75 }}
          className="grid-container text-white bg-gradient-to-r px-7 py-16 rounded-3xl from-[#e10000] via-[#cc3737] to-[#6c0505] max-w-sm flex flex-col gap-10 dark:bg-gray-800 shadow "
        >
          <div className="sm:text-4xl text-3xl font-semibold leading-8 text-gray-800 dark:text-gray-100">
            <MdRocketLaunch color="white" />
          </div>
          <div className="text-xl  mt-2 ">Ultra Fast Connection</div>
          <div className="text-lg text-justify">
            Ultra Fast Connection We always Provide the fastest speed available
            in the market so that you can be on top of the world.
          </div>
        </motion.div>{" "}
        <motion.div
          initial={{ scale: 0, duration: 0 }}
          whileInView={{ scale: 1, duration: 75 }}
          className="text-white bg-gradient-to-r px-7 py-16 rounded-3xl from-[#e10000] via-[#cc3737] to-[#6c0505] max-w-sm flex flex-col gap-10 dark:bg-gray-800 shadow "
        >
          <div className="sm:text-4xl text-3xl font-semibold leading-8 text-gray-800 dark:text-gray-100">
            <RiSecurePaymentFill color="white" />
          </div>
          <div className="text-xl  mt-2 ">Online Payments</div>
          <div className="text-lg ">
            Go cashless Pay Online on MyNet.UltraNet.co.in to save time and
            renew instantly.
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0, duration: 0 }}
          whileInView={{ scale: 1, duration: 75 }}
          className="text-white bg-gradient-to-r px-7 py-16 rounded-3xl from-[#e10000] via-[#cc3737] to-[#6c0505] max-w-sm flex flex-col gap-10 dark:bg-gray-800 shadow "
        >
          <div className="sm:text-4xl text-3xl font-semibold leading-8 text-gray-800 dark:text-gray-100">
            <FaRupeeSign color="white" />
          </div>
          <div className="text-xl  mt-2 ">Affordable Packages</div>
          <div className="text-lg text-justify">
            Not only are our connections fast but we have a package to suit
            every budget.
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0, duration: 0 }}
          whileInView={{ scale: 1, duration: 75 }}
          className="text-white bg-gradient-to-r px-7 py-16 rounded-3xl from-[#e10000] via-[#cc3737] to-[#6c0505] max-w-sm flex flex-col gap-10 dark:bg-gray-800 shadow "
        >
          <div className="sm:text-4xl text-3xl font-semibold leading-8 text-gray-800 dark:text-gray-100">
            <MdThumbUp color="white" />
          </div>
          <div className="text-xl  mt-2 ">99% Service Uptime</div>
          <div className="text-lg text-justify">
            Our infrastructure is stable. With our service you can look forward
            to reliable and blisteringly.
          </div>
        </motion.div>
        <motion.div
          initial={{ scale: 0, duration: 0 }}
          whileInView={{ scale: 1, duration: 75 }}
          className="text-white bg-gradient-to-r px-7 py-16 rounded-3xl from-[#e10000] via-[#cc3737] to-[#6c0505] max-w-sm flex flex-col gap-10 dark:bg-gray-800 shadow "
        >
          <div className="sm:text-4xl text-3xl font-semibold leading-8 text-gray-800 dark:text-gray-100">
            <FaHome color="white" />
          </div>
          <div className="text-xl  mt-2 ">Unlimited for a Single Household</div>
          <div className="text-lg text-justify">
            Our service are truly unlimited for single household, connect with
            your friends and family.
          </div>
        </motion.div>
      </div>
      <div>
        <img src="/ml.png" alt="" />
      </div>
    </div>
  );
};

export default Choose;
