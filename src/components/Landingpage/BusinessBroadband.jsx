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
          <div className="md:max-w-[280px] w-full flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white">
            <h1 className="pl-[7%] group-hover:bg-gradient-to-r from-[#DE466C] to-[#004281] text-[white] py-3 rounded-t-[20px] bg-[#004281]   text-center font-bold text-xl ">
              50 Mbps
            </h1>
            <div className="pl-[7%] text-xl text-center font-bold">
              Business Broadband
            </div>
            <div className="flex mx-3 gap-3">
              <BiRupee size={60} />
              <span className="text-5xl font-bold">1000/</span>
            </div>
            <div className=" mx-8 text-justify leading-7 tracking-normal text-[#30353a] font-medium">
              download + upload speed
            </div>
            <Link
              to={"https://my.ultranet.co.in/enquiry?src=website"}
              className="flex justify-center"
            >
              <button className="group-hover:bg-gradient-to-r from-[#DE466C] to-[#004281] bg-[#004281] px-5 rounded-full text-lg py-2  text-white font-medium  transition duration-300">
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
          <div className="md:max-w-[280px] w-full flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white">
            <h1 className=" pl-[7%] group-hover:bg-gradient-to-r from-[#DE466C] to-[#004281] text-[white] py-3 rounded-t-[20px] bg-[#004281]   text-center font-bold text-xl ">
              100 Mbps
            </h1>{" "}
            <div className="pl-[7%] text-xl text-center font-bold">
              Business Broadband
            </div>
            <div className="flex mx-3 gap-3">
              <BiRupee size={60} />
              <span className="text-5xl font-bold">1500/</span>
            </div>
            <div className=" mx-8 text-justify leading-7 tracking-normal text-[#30353a] font-medium">
              download + upload speed
            </div>
            <Link
              to={"https://my.ultranet.co.in/enquiry?src=website"}
              className="flex justify-center"
            >
              <button className="group-hover:bg-gradient-to-r from-[#DE466C] to-[#004281] bg-[#004281] px-5 rounded-full text-lg py-2  text-white font-medium  transition duration-300">
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
          <div className="md:max-w-[280px] w-full flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white">
            <h1 className=" pl-[7%] group-hover:bg-[#DE466C] text-[white] py-3 rounded-t-[20px] bg-[#004281]   text-center font-bold text-xl ">
              200 Mbps
            </h1>{" "}
            <div className="pl-[7%] text-xl text-center font-bold">
              Business Broadband
            </div>
            <div className="flex mx-3 gap-3">
              <BiRupee size={60} />
              <span className="text-5xl font-bold">2000/</span>
            </div>
            <div className=" mx-8 text-justify leading-7 tracking-normal text-[#30353a] font-medium">
              download + upload speed
            </div>
            <Link
              to={"https://my.ultranet.co.in/enquiry?src=website"}
              className="flex justify-center"
            >
              <button className="group-hover:bg-gradient-to-r from-[#DE466C] to-[#004281] bg-[#004281] px-5 rounded-full text-lg py-2  text-white font-medium  transition duration-300">
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
          <div className="md:max-w-[280px] w-full flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white">
            <h1 className=" pl-[7%] group-hover:bg-gradient-to-r from-[#DE466C] to-[#004281] text-[white] py-3 rounded-t-[20px] bg-[#004281]   text-center font-bold text-xl ">
              500 Mbps
            </h1>{" "}
            <div className="pl-[7%] text-xl text-center font-bold">
              Business Broadband
            </div>
            <div className="flex mx-3 gap-3">
              <BiRupee size={60} />
              <span className="text-5xl font-bold">3500/</span>
            </div>
            <div className="mx-8 text-justify leading-7 tracking-normal text-[#30353a] font-medium">
              download + upload speed
            </div>
            <Link
              to={"https://my.ultranet.co.in/enquiry?src=website"}
              className="flex justify-center"
            >
              <button className="group-hover:bg-gradient-to-r from-[#DE466C] to-[#004281] bg-[#004281] px-5 rounded-full text-lg py-2  text-white font-medium  transition duration-300">
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