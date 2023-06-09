import React,{useEffect } from 'react'
import { BiRupee } from "react-icons/bi";
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const LeasedLinres = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div className=" md:pb-5">
      <div className="flex flex-wrap mx-[5%]  ">
        <div
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="200"
          className="group flex justify-center md:flex-row flex-col mx-auto gap-10 mt-3"
        >
          <div className="flex items-center  justify-center py-8 px-4">
            <div className="md:w-[300px] flex  flex-col gap-5 shadow-lg  rounded-[20px] pb-10  bg-white">
              <h1 className="pl-[7%] group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-t-[20px] bg-[#071343]   text-center font-bold text-xl">
                10 Mbps
              </h1>
              <div className="pl-4 text-lg">Fibre Broadband</div>
              <div className="flex mx-3 gap-3">
                <BiRupee size={60} />
                <span className="text-5xl font-bold">6500</span>
                <span className="text-xl mt-5">+ GST</span>
              </div>
              <div className="text-lg text-center ">For | Months + GST</div>
              <ul className="text-lg  list-disc pl-8 text-black   ">
                <li>Individual businesses</li>
                <li>10Mbps download & upload speed</li>
                <li>Unlimited usage</li>
              </ul>
              <Link
                to={"https://my.ultranet.co.in/enquiry?src=website"}
                className="flex justify-center"
              >
                <button className="group-hover:bg-gradient-to-r bg-[#071343] px-8 text-lg py-3 group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-white font-medium rounded transition duration-300">
                  Choose Plan
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="600"
          className="group flex justify-center md:flex-row flex-col mx-auto gap-10 mt-3"
        >
          <div className="flex items-center  justify-center py-8 px-4">
            <div className="md:w-[300px] flex  flex-col gap-5 shadow-lg  rounded-[20px] pb-10  bg-white">
              <h1 className="pl-[7%] group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-t-[20px] bg-[#071343]   text-center font-bold text-xl">
                20 Mbps
              </h1>
              <div className="pl-4 text-lg">Fibre Broadband</div>
              <div className="flex mx-3 gap-3">
                <BiRupee size={60} />
                <span className="text-5xl font-bold">12000</span>
                <span className="text-xl mt-5">+ GST</span>
              </div>
              <div className="text-lg text-center ">For | Months + GST</div>
              <ul className="text-lg  list-disc pl-8 text-black   ">
                <li>Individual businesses</li>
                <li>20 Mbps download + upload speed</li>
                <li>Unlimited usage, no data limits.</li>
              </ul>
              <Link
                to={"https://my.ultranet.co.in/enquiry?src=website"}
                className="flex justify-center"
              >
                <button className="group-hover:bg-gradient-to-r bg-[#071343] px-8 text-lg py-3 group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-white font-medium rounded transition duration-300">
                  Choose Plan
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="900"
          className="group flex justify-center md:flex-row flex-col mx-auto gap-10 mt-3"
        >
          <div className="flex items-center  justify-center py-8 px-4">
            <div className="md:w-[300px] flex  flex-col gap-5 shadow-lg  rounded-[20px] pb-10  bg-white">
              <h1 className="pl-[7%] group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-t-[20px] bg-[#071343]   text-center font-bold text-xl">
                30 Mbps
              </h1>
              <div className="pl-4 text-lg">Fibre Broadband</div>
              <div className="flex mx-3 gap-3">
                <BiRupee size={60} />
                <span className="text-5xl font-bold">18000</span>
                <span className="text-xl mt-5">+ GST</span>
              </div>
              <div className="text-lg text-center ">For | Months + GST</div>
              <ul className="text-lg  list-disc pl-8 text-black   ">
                <li>Individual businesses</li>
                <li>30 Mbps download + upload speed</li>
                <li>Unlimited usage, no data limits.</li>
              </ul>
              <Link
                to={"https://my.ultranet.co.in/enquiry?src=website"}
                className="flex justify-center"
              >
                <button className="group-hover:bg-gradient-to-r bg-[#071343] px-8 text-lg py-3 group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-white font-medium rounded transition duration-300">
                  Choose Plan
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="1200"
          className="group flex justify-center md:flex-row flex-col mx-auto gap-10 mt-3"
        >
          <div className="flex items-center  justify-center py-8 px-4">
            <div className="md:w-[300px] flex  flex-col gap-5 shadow-lg  rounded-[20px] pb-10  bg-white">
              <h1 className="pl-[7%] group-hover:bg-gradient-to-r  group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-t-[20px] bg-[#071343]   text-center font-bold text-xl">
                50 Mbps
              </h1>
              <div className="pl-4 text-lg">Fibre Broadband</div>
              <div className="flex mx-3 gap-3">
                <BiRupee size={60} />
                <span className="text-5xl font-bold">25000</span>
                <span className="text-xl mt-5">+ GST</span>
              </div>
              <div className="text-lg text-center ">For | Months + GST</div>
              <ul className="text-lg  list-disc pl-8 text-black   ">
                <li>Individual businesses</li>
                <li>50 Mbps download + upload speed</li>
                <li>Unlimited usage, no data limits.</li>
              </ul>
              <Link
                to={"https://my.ultranet.co.in/enquiry?src=website"}
                className="flex justify-center"
              >
                <button className="group-hover:bg-gradient-to-r bg-[#071343] px-8 text-lg py-3 group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-white font-medium rounded transition duration-300">
                  Choose Plan
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeasedLinres