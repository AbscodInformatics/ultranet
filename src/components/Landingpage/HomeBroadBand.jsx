import React,{useEffect} from 'react'
import { BiRupee } from "react-icons/bi";
import AOS from "aos";
import "aos/dist/aos.css";

const HomeBroadBand = () => {
    useEffect(() => { AOS.init({
       duration: 3000,
       offset: 0,
     });})
  return (
    <div className="flex md:flex-row flex-col ">
      <div
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-delay="200"
        className="  flex md:flex-row justify-around  flex-col  gap-10 mt-3"
      >
        <div className="group flex items-center  justify-center py-8 px-4">
          <div className="md:w-[350px] flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white">
            <h1 className=" pl-[7%] group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-t-[20px] bg-[#071343]   text-center font-bold text-xl ">
              200 Mbps
            </h1>
            <div className="pl-[7%] text-lg">Fibre Home Broadband</div>
            <div className="flex mx-3 gap-3">
              <BiRupee size={60} />
              <span className="text-5xl font-bold">499</span>
              <span className="text-xl mt-5">+ GST</span>
            </div>
            <div className="text-lg py-3 text-black mx-8 text-left font-normal flex items-center  ">
              The INDIA′s fastest broadband 200Mbps download & upload speed
              Unlimited usage, no data limits Free Activation
            </div>

            <div className="flex justify-center">
              <button className="group-hover:bg-gradient-to-r bg-[#071343] px-8 text-lg py-3 group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-white font-medium rounded transition duration-300 ">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-delay="200"
        className="group flex justify-center md:flex-row flex-col mx-auto gap-10 mt-3"
      >
        <div className="flex items-center  justify-center py-8 px-4">
          <div className="md:w-[350px] flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white">
            <h1 className=" pl-[7%] group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-t-[20px] bg-[#071343]   text-center font-bold text-xl ">
              500 Mbps
            </h1>
            <div className="pl-[7%] text-lg">Fibre Home Broadband</div>
            <div className="flex mx-3 gap-3">
              <BiRupee size={60} />
              <span className="text-5xl font-bold">799</span>
              <span className="text-xl mt-5">+ GST</span>
            </div>
            <div className="text-lg  text-black mx-8 text-left font-normal flex items-center  ">
              The INDIA′s fastest broadband 500Mbps download & upload speed
              Unlimited usage, no data limits Free Activation And Free 5 + OTT
              Apps.
            </div>
            <div className="flex justify-center">
              <button className="group-hover:bg-gradient-to-r bg-[#071343] px-8 text-lg py-3 group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-white font-medium rounded transition duration-300 ">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-once="false"
        data-aos-delay="200"
        className="group flex justify-center md:flex-row flex-col mx-auto gap-10 mt-3"
      >
        <div className="flex items-center  justify-center py-8 px-4">
          <div className="md:w-[350px] flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white">
            <h1 className=" pl-[7%] group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-t-[20px] bg-[#071343]   text-center font-bold text-xl ">
              750 Mbps
            </h1>
            <div className="pl-[7%] text-lg">Fibre Home Broadband</div>
            <div className="flex mx-3 gap-3">
              <BiRupee size={60} />
              <span className="text-5xl font-bold">999</span>
              <span className="text-xl mt-5">+ GST</span>
            </div>
            <div className="text-lg  text-black mx-8 text-left font-normal flex items-center  ">
              The INDIA′s fastest broadband 750Mbps download & upload speed
              Unlimited usage, no data limits Free Activation And Free 5 + OTT
              Apps.
            </div>

            <div className="flex justify-center">
              <button className="group-hover:bg-gradient-to-r bg-[#071343] px-8 text-lg py-3 group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-white font-medium rounded transition duration-300 ">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeBroadBand