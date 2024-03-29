import React, { useState, useEffect } from "react";
import { MdOutlineSpeed } from "react-icons/md";
import { BsFiles, BsSpeedometer } from "react-icons/bs";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import {TbTargetArrow} from "react-icons/tb"
import {LuHeartHandshake} from "react-icons/lu"
import AOS from "aos";
import "aos/dist/aos.css";

const Index = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div>
      <div>
        <img
          src='/aboutus.jpg'
          alt=''
          className='object-fill h-[30vh] md:h-[80vh] w-full'
        />
      </div>
      <div>
        <div
          data-aos='zoom-in-up'
          data-aos-once='false'
          data-aos-duration='3000'
          className='mx-auto my-[5%]  rounded w-full'
        >
          <div className=' rounded-3xl hover:bg-gradient-to-r  hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 text-[white] py-3  bg-[#071343]    font-bold  md:text-lg md:text-center text-justify  mx-[7%] p-[5%]'>
            <div className='py-6 text-3xl font-bold text-center xl:px-8  lg:px-8 md:px-8 px-4 '>
              About Us{" "}
            </div>

            <div className='p-5 grid grid-cols-1 gap-8 rounded mb-6  '>
              <div className=''>
                {" "}
                UltraNet is a world class Broadband Internet Service Provider.
                We bring the power of fiber optics direct to your home with our
                FTTH services in Delhi-NCR region.
              </div>
              <div className=''>
                {" "}
                Most fiber broadband services are usually fiber and copper,
                fiber optic cables from the exchange to your street and then
                copper phone wires into your dwelling. This negatively impacts
                the speed. Besides, there is more attenuation with copper
                wiring.
              </div>
              <div className=''>
                {" "}
                We are voted the best broadband service provider in the India,
                and our speeds are one of the unmatched in the industry.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex md:flex-row flex-col justify-center items-center md:items-stretch gap-14'>
        <div
          data-aos='zoom-in-up'
          data-aos-once='false'
          data-aos-duration='3000'
          className='w-[350px] md:w-[500px] group flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white'
        >
          <div className='flex justify-center items-center text-center group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-t-[20px] bg-[#071343]  text-xl  '>
            <LuHeartHandshake size={40} />
          </div>
          <div className='text-lg py-3 text-justify mx-[7%] text-black'>
            Our <span className='font-bold text-lg'>PROMISE</span> is the same
            Promising reliability and peace of mind, we vow to redefine your
            moving and packing experience with personalized care and exceptional
            service.
          </div>
        </div>
        <div
          data-aos='zoom-in-up'
          data-aos-once='false'
          data-aos-duration='3000'
          className='w-[350px] md:w-[500px] group flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white'
        >
          <div className='flex justify-center items-center text-center group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-t-[20px] bg-[#071343]  text-xl  '>
            <TbTargetArrow size={40} />
          </div>
          <div className='text-lg    py-3 text-justify mx-[7%] text-black   font-normal '>
            Our <span className='font-bold text-lg'>MISSION</span> is to ensure
            that our s to ensure that Simplify transitions and elevate
            experiences - we're dedicated to providing seamless moving and
            packing solutions tailored to your needs.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
