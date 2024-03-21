import React, { useState, useEffect } from "react";
import { MdOutlineSpeed } from "react-icons/md";
import { BsFiles, BsSpeedometer } from "react-icons/bs";
import { CgArrowsExchangeAlt } from "react-icons/cg";
// import { BsSpeedometer } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

const Feature = () => {
  useEffect(() => {
    AOS.init();
  });
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div
        data-aos='zoom-in-up'
        data-aos-once='false'
        className='mx-auto   p-3 w-full'
      >
        <div className='flex flex-col justify-center items-center py-2'>
          <h2 className='text-3xl font-[700] text-center'>Our Services</h2>
          <span className='w-20 border-customYellow border-2 text-center'></span>
          <p className='text-yellow-500'>We have provide these services</p>
        </div>
        <div className='flex md:flex-row flex-col gap-6 md:gap-40 items-center md:mx-40 my-6'>
          <img
            src='/trolly.png'
            className='w-full md:w-[34rem] h-[24rem]  object-cover'
          />
          <div>
            <h2 className='text-4xl text-center font-[700]'>
              Moving and Packing Services in Dubai
            </h2>
            <p className='pt-8 text-justify'>
              Best movers and packers in Dubai are successful in the
              implementation of a brand for clients in Dubai, Abu-Dhabi and the
              Middle East. We are the best movers in Dubai and offer a number of
              services to meet the needs of everyone, from individuals and
              families to businesses and organizations. It makes us one of the
              Expert Movers in UAE for all demands with the help of the best
              movers and packers in Dubai. So we can surely be a good option for
              you.
            </p>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-6 w-full '>
          <div className='rounded-lg shadow-xl border-[1px]'>
            <img src='/card1.jpeg' className='w-full h-[40vh]' />
            <div className='p-4 flex flex-col items-center pb-8'>
              <h2 className='text-2xl font-[600] text-center '>
                House Movers in Dubai
              </h2>
              <span className='w-20 border-yellow-500 border-2 text-center'></span>
              <p className='py-4 text-justify text-gray-600'>
                Our house shifting company helps you to relocate a single item
                or an entire apartment relocation.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className='bg-yellow-500 rounded-full px-6 py-3 text-white hover:shadow-xl'
              >
                Book Service
              </button>
            </div>
          </div>
          <div className='rounded-lg shadow-xl border-[1px]'>
            <img src='/card2.webp' className='w-full h-[40vh]' />
            <div className='p-4 flex flex-col items-center pb-8'>
              <h2 className='text-2xl font-[600] text-center '>Storage</h2>
              <span className='w-20 border-yellow-500 border-2 text-center'></span>
              <p className='py-4 text-justify text-gray-600'>
                Looking for a storage company? Our secure and climate-controlled
                storage facilities provide the perfect solution for your
                short-term or long-term storage needs.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className='bg-yellow-500 rounded-full px-6 py-3 text-white hover:shadow-xl'
              >
                Book Service
              </button>
            </div>
          </div>
          <div className='rounded-lg shadow-xl border-[1px]'>
            <img src='/card3.avif' className='w-full h-[40vh]' />
            <div className='p-4 flex flex-col items-center pb-8'>
              <h2 className='text-2xl font-[600] text-center '>
                Cheap Movers in Dubai
              </h2>
              <span className='w-20 border-yellow-500 border-2 text-center'></span>
              <p className='py-4 text-justify text-gray-600'>
                Our efficient and cheap movers in Dubai offer you cheap moving
                prices in Dubai and provide competitive rates for your move to
                Dubai, Abu-Dhabi, and all over UAE.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className='bg-yellow-500 rounded-full px-6 py-3 text-white hover:shadow-xl'
              >
                Book Service
              </button>
            </div>
          </div>
          <div className='rounded-lg shadow-xl border-[1px]'>
            <img src='/card4.avif' className='w-full h-[40vh]' />
            <div className='p-4 flex flex-col items-center pb-8'>
              <h2 className='text-2xl font-[600] text-center '>
                Safe Movers in Dubai
              </h2>
              <span className='w-20 border-yellow-500 border-2 text-center'></span>
              <p className='py-4 text-justify text-gray-600'>
                Do you have to move your heavy safe in Dubai? First, contact
                professional large safe movers in Dubai. Together, we can assess
                the different levels of accessibility.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className='bg-yellow-500 rounded-full px-6 py-3 text-white hover:shadow-xl'
              >
                Book Service
              </button>
            </div>
          </div>
          <div className='rounded-lg shadow-xl border-[1px]'>
            <img src='/card6.jpeg' className='w-full h-[40vh]' />
            <div className='p-4 flex flex-col items-center pb-8'>
              <h2 className='text-2xl font-[600] text-center '>
                Move out Painting Services in Dubai
              </h2>
              <span className='w-20 border-yellow-500 border-2 text-center'></span>
              <p className='py-4 text-justify text-gray-600'>
                Our professional painting services offer a variety of options to
                enhance and refresh the look of your home or business to ensure
                long-lasting durability and beauty.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className='bg-yellow-500 rounded-full px-6 py-3 text-white hover:shadow-xl'
              >
                Book Service
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Feature;
