import React,{useEffect} from 'react'
import { BiRupee } from "react-icons/bi";
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const BusinessBroadband = () => {
    useEffect(() => {
     
     AOS.init({
       duration: 3000,
       offset: 0,
     });
    })
  return (
    <div className="flex md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className="group flex justify-center md:flex-row flex-col mx-auto gap-10 mt-3"
      >
        <div className="flex items-center  justify-center py-8 px-4">
          <div className="md:w-[350px] flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white">
            <h1 className=" pl-[7%] group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-t-[20px] bg-[#071343]   text-center font-bold text-xl ">
              50 Mbps
            </h1>
            <div className="pl-[7%] text-lg">Business Broadband</div>
            <div className="flex mx-3 gap-3">
              <BiRupee size={60} />
              <span className="text-5xl font-bold">2000</span>
              <span className="text-xl mt-5">+ GST</span>
            </div>
            <div className="text-lg  text-black mx-8 text-left font-normal flex items-center  ">
              10+ employees 50Mbps download + upload speed
            </div>
            <Link
              to={"https://my.ultranet.co.in/enquiry?src=website"}
              className="flex justify-center"
            >
              <button className="group-hover:bg-gradient-to-r bg-[#071343] px-8 text-lg py-3 group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-white font-medium rounded transition duration-300">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className="group flex justify-center md:flex-row flex-col mx-auto gap-10 mt-3"
      >
        <div className="flex items-center  justify-center py-8 px-4">
          <div className="md:w-[350px] flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white">
            <h1 className=" pl-[7%] group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-t-[20px] bg-[#071343]   text-center font-bold text-xl ">
              100 Mbps
            </h1>
            <div className="pl-[7%] text-lg">Business Broadband</div>
            <div className="flex mx-3 gap-3">
              <BiRupee size={60} />
              <span className="text-5xl font-bold">3000</span>
              <span className="text-xl mt-5">+ GST</span>
            </div>
            <div className="text-lg  text-black mx-8 text-left font-normal flex items-center  ">
              2-9 employees 100Mbps download + upload speed
            </div>
            <Link
              to={"https://my.ultranet.co.in/enquiry?src=website"}
              className="flex justify-center"
            >
              <button className="group-hover:bg-gradient-to-r bg-[#071343] px-8 text-lg py-3 group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-white font-medium rounded transition duration-300">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
        className="group flex justify-center md:flex-row flex-col mx-auto gap-10 mt-3"
      >
        <div className="flex items-center  justify-center py-8 px-4">
          <div className="md:w-[350px] flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white">
            <h1 className=" pl-[7%] group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-t-[20px] bg-[#071343]   text-center font-bold text-xl ">
              200 Mbps
            </h1>
            <div className="pl-[7%] text-lg">Business Broadband</div>
            <div className="flex mx-3 gap-3">
              <BiRupee size={60} />
              <span className="text-5xl font-bold">3500</span>
              <span className="text-xl mt-5">+ GST</span>
            </div>
            <div className="text-lg  text-black mx-8 text-left font-normal flex items-center  ">
              1-2 employees 200Mbps download + upload speed
            </div>

            <Link
              to={"https://my.ultranet.co.in/enquiry?src=website"}
              className="flex justify-center"
            >
              <button className="group-hover:bg-gradient-to-r bg-[#071343] px-8 text-lg py-3 group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-white font-medium rounded transition duration-300">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessBroadband