import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const TermsConditinons = () => {
  AOS.init();
  return (
    <div className='2xl:container pt-[40%] md:pt-[3%] 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4'>
      <p
        data-aos='fade-down'
        data-aos-duration='2000'
        data-aos-once='false'
        className='font-normal mt-8 text-sm leading-3 text-indigo-700 hover:text-indigo-800 cursor-pointer pb-2'
      >
        Packing Tips
      </p>
      <div
        data-aos='fade-up'
        data-aos-duration='2000'
        data-aos-once='false'
        className='flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12'
      >
        <div className='w-full lg:w-6/12 '>
          <h2 className='w-full font-bold lg:text-3xl text-2xl lg:leading-10 leading-9'>
            Please read these Packing Tips carefully
          </h2>
          <p className='font-normal text-base text-justify  leading-6 text-gray-600 mt-6'>
            <p class='aku-mp-20'>
              When packing your belongings, make sure to use strong materials
              like corrugated cartons with covers. MoveNPack Packers and Movers
              can provide you with specially made cartons for items like
              mattresses, clothing, and mirrors to prevent any damages that
              could occur from poor-quality packing materials. It's also best to
              avoid using old newspapers, as the ink can leave stains on your
              belongings.
            </p>
          </p>
        </div>
        <div
          data-aos='zoom-in-down'
          data-aos-duration='2000'
          data-aos-once='false'
          className='w-full lg:w-6/12'
        >
          <img
            className='lg:block hidden w-full'
            src='https://i.ibb.co/RjNH7QB/Rectangle-122-1.png'
            alt='people discussing on board'
          />
          <img
            className='lg:hidden sm:block hidden w-full'
            src='https://i.ibb.co/16fPqrg/Rectangle-122-2.png'
            alt='people discussing on board'
          />
          <img
            className='sm:hidden block w-full'
            src='https://i.ibb.co/Jxhpxh6/Rectangle-122.png'
            alt='people discussing on board'
          />
        </div>
      </div>
      <div className='w-full mt-10 '>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12 gap-10'>
          <div
            data-aos='fade-up'
            data-aos-once='false'
            data-aos-duration='1000'
            className='flex p-4 shadow-md'
          >
            <div className='md:mr-6'>
              <svg
                className='mr-2 md:mr-6'
                width='36'
                height='36'
                viewBox='0 0 36 36'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M18 15C20.4853 15 22.5 12.9853 22.5 10.5C22.5 8.01472 20.4853 6 18 6C15.5147 6 13.5 8.01472 13.5 10.5C13.5 12.9853 15.5147 15 18 15Z'
                  stroke='#1F2937'
                  strokeWidth='2.75'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M25.5 28.5C27.9853 28.5 30 26.4853 30 24C30 21.5147 27.9853 19.5 25.5 19.5C23.0147 19.5 21 21.5147 21 24C21 26.4853 23.0147 28.5 25.5 28.5Z'
                  stroke='#1F2937'
                  strokeWidth='2.75'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M10.5 28.5C12.9853 28.5 15 26.4853 15 24C15 21.5147 12.9853 19.5 10.5 19.5C8.01472 19.5 6 21.5147 6 24C6 26.4853 8.01472 28.5 10.5 28.5Z'
                  stroke='#1F2937'
                  strokeWidth='2.75'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <div className='md:text-justify md:pr-4'>
              <p className='font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800'>
                Week Before Moving Tips
              </p>
              <p className='mt-2 text-justify  font-normal text-base leading-6 text-gray-600'>
                To ensure a smooth moving process, make sure to mark which items
                you will be taking with you and let the movers know so they
                don't accidentally take them. At MoveNPack Packers and Movers,
                we have all types of vehicles available, including LCV vans for
                smaller loads and properties with tight access. We also have a
                non-slip ramp system for safe access onto the lorry, and we're
                fully insured.
              </p>
            </div>
          </div>
          <div
            data-aos='fade-up'
            data-aos-once='false'
            data-aos-duration='2000'
            className='flex p-4 shadow-md'
          >
            <div className='mr-2 md:mr-6'>
              <svg
                width='36'
                height='36'
                viewBox='0 0 36 36'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10.5 10.5C12.1569 10.5 13.5 9.15685 13.5 7.5C13.5 5.84315 12.1569 4.5 10.5 4.5C8.84315 4.5 7.5 5.84315 7.5 7.5C7.5 9.15685 8.84315 10.5 10.5 10.5Z'
                  stroke='#1F2937'
                  strokeWidth='2.75'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M7.5 33V25.5L6 24V18C6 17.6022 6.15804 17.2206 6.43934 16.9393C6.72064 16.658 7.10218 16.5 7.5 16.5H13.5C13.8978 16.5 14.2794 16.658 14.5607 16.9393C14.842 17.2206 15 17.6022 15 18V24L13.5 25.5V33'
                  stroke='#1F2937'
                  strokeWidth='2.75'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M25.5 10.5C27.1569 10.5 28.5 9.15685 28.5 7.5C28.5 5.84315 27.1569 4.5 25.5 4.5C23.8431 4.5 22.5 5.84315 22.5 7.5C22.5 9.15685 23.8431 10.5 25.5 10.5Z'
                  stroke='#1F2937'
                  strokeWidth='2.75'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M22.5 33V27H19.5L22.5 18C22.5 17.6022 22.658 17.2206 22.9393 16.9393C23.2206 16.658 23.6022 16.5 24 16.5H27C27.3978 16.5 27.7794 16.658 28.0607 16.9393C28.342 17.2206 28.5 17.6022 28.5 18L31.5 27H28.5V33'
                  stroke='#1F2937'
                  strokeWidth='2.75'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <div className='md:text-justify md:pr-4'>
              <p className='font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800'>
                Moving Out Day
              </p>
              <p className='mt-2 font-normal text-justify text-base leading-6 text-gray-600'>
                To ensure a smooth moving process, make sure to mark which items
                you will be taking with you and let the movers know so they
                don't accidentally take them. At MoveNPack Packers and Movers,
                we have all types of vehicles available, including LCV vans for
                smaller loads and properties with tight access. We also have a
                non-slip ramp system for safe access onto the lorry, and we're
                fully insured.
              </p>
            </div>
          </div>
          <div
            data-aos='fade-up'
            data-aos-once='false'
            data-aos-duration='3000'
            className='flex p-4 shadow-md'
          >
            <div className='mr-2 md:mr-6'>
              <svg
                width='36'
                height='36'
                viewBox='0 0 36 36'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M28.5 7.5H7.5C5.84315 7.5 4.5 8.84315 4.5 10.5V25.5C4.5 27.1569 5.84315 28.5 7.5 28.5H28.5C30.1569 28.5 31.5 27.1569 31.5 25.5V10.5C31.5 8.84315 30.1569 7.5 28.5 7.5Z'
                  stroke='#1F2937'
                  strokeWidth='2.75'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M4.5 10.5L18 19.5L31.5 10.5'
                  stroke='#1F2937'
                  strokeWidth='2.75'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <div className='md:text-justify md:pr-4'>
              <p className='font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800'>
                Moving In Day
              </p>
              <p className='mt-2 text-justify font-normal text-base leading-6 text-gray-600'>
                When you arrive at your new home, it's best to be there a day
                ahead of time to make sure that utilities are connected and to
                plan the placement of major items. Be present to pay the driver
                with cash, traveler's check, certified check, or money order
                before your belongings are unloaded.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TermsConditinons;
