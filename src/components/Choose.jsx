import React, { useEffect } from "react";
import { FaDownload, FaStar, FaTrademark } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdRocketLaunch, MdThumbUp } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { FaRupeeSign, FaHome } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoMdHappy } from "react-icons/io";
const Choose = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 0,
      once: true,
    });
  });

  return (
    <div className='bg-[#f3f4f6] py-10'>
      <div className=' flex py-5  justify-center gap-5 flex-col items-center '>
        <div className='text-5xl flex flex-col items-center leading-[60px] text-customBlue tracking-[-0.04em]  font-[800] text-center mx-1 md:mx-0 '>
          WHY CHOOSE MoveNPack
          <span className='w-40 border-customYellow border-[3px] rounded'></span>
        </div>
        <div className='text-xlmt-[1%] text-[#5b5b98] font-medium mx-[5%]'>
          We are leading in Moving Buisness
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-10 py-12 px-4'>
        <div
          data-aos='fade-up'
          data-aos-once='false'
          data-aos-delay='1000'
          className='md:w-[350px] group flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white'
        >
          <div className='pl-[7%] flex gap-5 items-center group-hover:bg-gradient-to-r from-customYellow to-customBlue text-[white] py-3 rounded-t-[20px] bg-customBlue   text-center font-semibold text-xl  '>
            <FaStar size={40} />
            <span> 5 Star Rating</span>
          </div>
          <div className='py-3 mx-8 text-justify leading-7 tracking-normal text-[#30353a] font-medium'>
            We Proudly hold a 5-Star from our satisfied customers.
          </div>{" "}
        </div>
        <div
          data-aos='fade-up'
          data-aos-once='false'
          data-aos-delay='1000'
          className='md:w-[350px] group flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white'
        >
          <div className='pl-[7%] flex gap-5 items-center group-hover:bg-gradient-to-r from-customYellow to-customBlue text-[white] py-3 rounded-t-[20px] bg-customBlue   text-center font-semibold text-xl  '>
            <VscWorkspaceTrusted size={40} />
            <span>1+ Year of Trust</span>
          </div>
          <div className='py-3 mx-8 text-justify leading-7 tracking-normal text-[#30353a] font-medium'>
            With over 1+ years of trust, we are your reliable partner for all
            your moving needs.
          </div>{" "}
        </div>
        <div
          data-aos='fade-up'
          data-aos-once='false'
          data-aos-delay='1000'
          className='md:w-[350px] group flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white'
        >
          <div className='pl-[7%] flex gap-5 items-center group-hover:bg-gradient-to-r from-customYellow to-customBlue text-[white] py-3 rounded-t-[20px] bg-customBlue   text-center font-semibold text-xl  '>
            <IoMdHappy size={40} />
            <span>50+ Happy Client</span>
          </div>
          <div className='py-3 mx-8 text-justify leading-7 tracking-normal text-[#30353a] font-medium'>
            We Proudly hold a 50+ happy Custmers.
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Choose;
