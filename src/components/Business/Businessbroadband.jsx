import React, { useEffect } from "react";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
const Businessbroadband = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      offset: 0,
    });
  });

  return (
    <div className=' md:pb-5'>
      <div className='flex md:flex-row md:flex-nowrap flex-wrap flex-col md:mx-[5%]'>
        <div
          data-aos='fade-up'
          data-aos-once='false'
          data-aos-delay='200'
          className='group flex justify-center md:flex-row flex-col mx-auto gap-10 mt-3'
        >
          <div className='flex items-center  justify-center py-8 px-4'>
            <div className='md:max-w-[280px] w-full flex  flex-col gap-5 shadow-lg  rounded-[20px] pb-10  bg-white'>
              <h1 className='pl-[7%] group-hover:bg-gradient-to-r from-customYellow to-customBlue text-[white] py-3 rounded-t-[20px] bg-customBlue   text-center font-bold text-xl'>
                50 Mbps
              </h1>
              <div className='pl-[7%] text-xl text-center font-bold'>
                Fibre Broadband
              </div>
              <div className='flex mx-3 gap-3'>
                <BiRupee size={60} />
                <span className='text-5xl font-bold'>1000</span>
                <span className='font-bold mt-5'>Only</span>
              </div>
              <ul className='mb-5 list-disc pl-8 text-lg leading-7 tracking-normal text-[#30353a] font-medium'>
                <li>Individual businesses</li>
                <li>50Mbps download & upload speed</li>
                <li>Unlimited usage , no data limits.</li>
              </ul>
              <Link
                to={"https://my.ultranet.co.in/enquiry?src=website"}
                className='flex justify-center'
              >
                <button className='group-hover:bg-gradient-to-r from-customYellow to-customBlue bg-customBlue px-5 text-lg py-2  text-white font-medium rounded-full transition duration-300'>
                  Choose Plan
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          data-aos='fade-up'
          data-aos-once='false'
          data-aos-delay='600'
          className='group flex justify-center md:flex-row flex-col mx-auto gap-10 mt-3'
        >
          <div className='flex items-center  justify-center py-8 px-4'>
            <div className='md:max-w-[280px] w-full flex  flex-col gap-5 shadow-lg  rounded-[20px] pb-10  bg-white'>
              <h1 className='pl-[7%] group-hover:bg-gradient-to-r from-customYellow to-customBlue text-[white] py-3 rounded-t-[20px] bg-customBlue   text-center font-bold text-xl'>
                100 Mbps
              </h1>
              <div className='pl-[7%] text-xl text-center font-bold'>
                Fibre Broadband
              </div>
              <div className='flex mx-3 gap-3'>
                <BiRupee size={60} />
                <span className='text-5xl font-bold'>1500</span>
                <span className='font-bold mt-5'>Only</span>
              </div>
              <ul className=' mb-5 list-disc pl-8 text-lg leading-7 tracking-normal text-[#30353a] font-medium'>
                <li>Individual businesses</li>
                <li>100 Mbps download + upload speed</li>
                <li>Unlimited usage, no data limits.</li>
              </ul>
              <Link
                to={"https://my.ultranet.co.in/enquiry?src=website"}
                className='flex justify-center'
              >
                <button className='group-hover:bg-gradient-to-r from-customYellow to-customBlue bg-customBlue px-5 py-2 text-lg   text-white font-medium rounded-full transition duration-300'>
                  Choose Plan
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          data-aos='fade-up'
          data-aos-once='false'
          data-aos-delay='900'
          className='group flex justify-center md:flex-row flex-col mx-auto gap-10 mt-3'
        >
          <div className='flex items-center  justify-center py-8 px-4'>
            <div className='md:max-w-[280px] flex w-full flex-col gap-5 shadow-lg  rounded-[20px] pb-10  bg-white'>
              <h1 className='pl-[7%] group-hover:bg-gradient-to-r from-customYellow to-customBlue text-[white] py-3 rounded-t-[20px] bg-customBlue   text-center font-bold text-xl'>
                200 Mbps
              </h1>
              <div className='pl-[7%] text-xl text-center font-bold'>
                Fibre Broadband
              </div>
              <div className='flex mx-3 gap-3'>
                <BiRupee size={60} />
                <span className='text-5xl font-bold'>2000</span>
                <span className='font-bold mt-5'>Only</span>
              </div>
              <ul className=' mb-5 list-disc pl-8 text-lg leading-7 tracking-normal text-[#30353a] font-medium'>
                <li>Individual businesses</li>
                <li>200 Mbps download + upload speed</li>
                <li>Unlimited usage, no data limits.e</li>
              </ul>
              <Link
                to={"https://my.ultranet.co.in/enquiry?src=website"}
                className='flex justify-center'
              >
                <button className='group-hover:bg-gradient-to-r from-customYellow to-customBlue bg-customBlue px-5 text-lg py-2  text-white font-medium rounded-full transition duration-300'>
                  Choose Plan
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          data-aos='fade-up'
          data-aos-once='false'
          data-aos-delay='1200'
          className='group flex justify-center md:flex-row flex-col mx-auto gap-10 mt-3'
        >
          <div className='flex items-center  justify-center py-8 px-4'>
            <div className='md:max-w-[280px] flex w-full flex-col gap-5 shadow-lg  rounded-[20px] pb-10  bg-white'>
              <h1 className='pl-[7%] group-hover:bg-gradient-to-r from-customYellow to-customBlue text-[white] py-3 rounded-t-[20px] bg-customBlue   text-center font-bold text-xl'>
                500 Mbps
              </h1>
              <div className='pl-[7%] text-xl text-center font-bold'>
                Fibre Broadband
              </div>
              <div className='flex mx-3 gap-3'>
                <BiRupee size={60} />
                <span className='text-5xl font-bold'>3500</span>
                <span className='font-bold mt-5'>Only</span>
              </div>
              <ul className=' mb-5 list-disc pl-8 text-lg leading-7 tracking-normal text-[#30353a] font-medium'>
                <li>Individual businesses</li>
                <li>1 Gbps download + upload speed</li>
                <li>Unlimited usage, no data limits.</li>
              </ul>
              <Link
                to={"https://my.ultranet.co.in/enquiry?src=website"}
                className='flex justify-center'
              >
                <button className='group-hover:bg-gradient-to-r from-customYellow to-customBlue bg-customBlue px-5 text-lg py-2  text-white font-medium rounded-full transition duration-300'>
                  Choose Plan
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Businessbroadband;
