import React, { useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import { Link } from "react-router-dom";
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
    <div className="mt-5">
      <div className=" flex py-5  justify-center gap-5 flex-col items-center">
        <div className="text-5xl leading-[60px] text-[#004281] tracking-[-0.04em]  font-[800] text-center mx-1 md:mx-0 ">
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
          <div className="pl-[7%] flex gap-5 items-center group-hover:bg-gradient-to-r from-[#DE466C] to-[#004281] text-[white] py-3 rounded-t-[20px] bg-[#004281]   text-center font-semibold text-xl  ">
            <FaDownload size={40} />
            <span> Now No More GB Count</span>
          </div>
          <div className="py-3 mx-8 text-justify leading-7 tracking-normal text-[#30353a] font-medium">
            Experience boundless, high-speed Internet access with all our
            packages, anytime and without limitations.
          </div>{" "}
          <Link
            to={"https://my.ultranet.co.in/enquiry?src=website"}
            className="flex justify-center"
          >
            {" "}
            <button className="group-hover:bg-gradient-to-r from-[#DE466C] to-[#004281] bg-[#004281] px-5 rounded-full text-lg py-2  text-white font-medium  transition duration-300">
              Choose Plan
            </button>
          </Link>
        </div>
        <div
          data-aos-delay="1200"
          data-aos-once="false"
          data-aos="fade-up"
          className="md:w-[350px] group flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white"
        >
          <div className="pl-[7%] flex gap-5 items-center group-hover:bg-gradient-to-r from-[#DE466C] to-[#004281] text-[white] py-3 rounded-t-[20px] bg-[#004281]   text-center font-semibold text-xl  ">
            <MdRocketLaunch size={40} /> <span> Ultra Fast Connection</span>
          </div>
          <div className="py-3 mx-8 text-justify leading-7 tracking-normal text-[#30353a] font-medium">
            We consistently deliver the market's fastest speeds, ensuring you
            stay on top of the world.
          </div>{" "}
          <Link
            to={"https://my.ultranet.co.in/enquiry?src=website"}
            className="flex justify-center"
          >
            <button className="group-hover:bg-gradient-to-r from-[#DE466C] to-[#004281] bg-[#004281] px-5 rounded-full text-lg py-2  text-white font-medium  transition duration-300">
              Choose Plan
            </button>
          </Link>
        </div>
        <div
          data-aos="fade-up"
          DE466C
          data-aos-once="false"
          data-aos-delay="1300"
          className="md:w-[350px] group flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white"
        >
          <div className="pl-[7%] flex gap-5 items-center group-hover:bg-gradient-to-r from-[#DE466C] to-[#004281] text-[white] py-3 rounded-t-[20px] bg-[#004281]   text-center font-semibold text-xl  ">
            <RiSecurePaymentFill size={40} /> <span> Online Payments</span>
          </div>
          <div className="py-3 mx-8 text-justify leading-7 tracking-normal text-[#30353a] font-medium">
            Embrace a cashless approach by paying online, save time and enable
            instant renewals.
          </div>{" "}
          <Link
            to={"https://my.ultranet.co.in/enquiry?src=website"}
            className="flex justify-center"
          >
            <button className="group-hover:bg-gradient-to-r from-[#DE466C] to-[#004281] bg-[#004281] px-5 rounded-full text-lg py-2  text-white font-medium  transition duration-300">
              Choose Plan
            </button>
          </Link>
        </div>
        <div
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="1600"
          className="md:w-[350px] group flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white"
        >
          <div className="pl-[7%] flex gap-5 items-center group-hover:bg-gradient-to-r from-[#DE466C] to-[#004281] text-[white] py-3 rounded-t-[20px] bg-[#004281]   text-center font-semibold text-xl  ">
            <FaRupeeSign size={40} />
            <span> Affordable Packages</span>
          </div>
          <div className="py-3 mx-8 text-justify leading-7 tracking-normal text-[#30353a] font-medium">
            Our connections are fast and designed to cater to every budget with
            a wide range of packages.
          </div>{" "}
          <Link
            to={"https://my.ultranet.co.in/enquiry?src=website"}
            className="flex justify-center"
          >
            <button className="group-hover:bg-gradient-to-r from-[#DE466C] to-[#004281] bg-[#004281] px-5 rounded-full text-lg py-2  text-white font-medium  transition duration-300">
              Choose Plan
            </button>
          </Link>
        </div>
        <div
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="1800"
          className="md:w-[350px] group flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white"
        >
          <div className="pl-[7%] flex gap-5 items-center group-hover:bg-gradient-to-r from-[#DE466C] to-[#004281] text-[white] py-3 rounded-t-[20px] bg-[#004281]   text-center font-semibold text-xl  ">
            <MdThumbUp size={40} />
            <span> 99% Service Uptime</span>
          </div>
          <div className="py-3 mx-8 text-justify leading-7 tracking-normal text-[#30353a] font-medium">
            Count on our stable infrastructure for a service that is not only
            reliable but also blisteringly fast.
          </div>{" "}
          <Link
            to={"https://my.ultranet.co.in/enquiry?src=website"}
            className="flex justify-center"
          >
            <button className="group-hover:bg-gradient-to-r from-[#DE466C] to-[#004281] bg-[#004281] px-5 rounded-full text-lg py-2  text-white font-medium  transition duration-300">
              Choose Plan
            </button>
          </Link>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="2000"
          data-aos-once="false"
          className="md:w-[350px] group flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white"
        >
          <div className="pl-[7%] flex gap-2 items-center group-hover:bg-gradient-to-r from-[#DE466C] to-[#004281] text-[white] py-3 rounded-t-[20px] bg-[#004281]   text-center font-semibold text-lg  ">
            <FaHome size={30} />
            <span> Unlimited for a Single Household</span>
          </div>
          <div className="py-3 mx-8 text-justify leading-7 tracking-normal text-[#30353a] font-medium">
            Our services are genuinely unlimited, perfect for single households
            to stay connected with friends and family.
          </div>{" "}
          <Link
            to={"https://my.ultranet.co.in/enquiry?src=website"}
            className="flex justify-center"
          >
            <button className="group-hover:bg-gradient-to-r from-[#DE466C] to-[#004281] bg-[#004281] px-5 rounded-full text-lg py-2  text-white font-medium  transition duration-300">
              Choose Plan
            </button>
          </Link>
        </div>
      </div>
      {/* <div
        className="py-[3%] mx-[8%]"
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-delay="8000"
      >
        <img src="/ml1.png" alt="" />
      </div> */}
    </div>
  );
};

export default Choose;
