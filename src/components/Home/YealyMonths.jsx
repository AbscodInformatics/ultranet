import React from "react";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";

const YealyMonths = () => {
    const Img = [
      "alt.jpg",
      "epic.jpg",
      "hum.jpg",
      "hungama.jpg",
      "play.jpg",
      "shemaro.jpg",
    ];
    const Img1 = [
      "alt.jpg",
      "sony1.png",
      "epic.jpg",
      "hum.jpg",
      "hungama.jpg",
      "play.jpg",
      "shemaro.jpg",
      "zee5.jpg",
    ];
    const Img2 = [
      "alt.jpg",
      "sony1.png",
      "disney.jpg",
      "epic.jpg",
      "hum.jpg",
      "hungama.jpg",
      "play.jpg",
      "shemaro.jpg",
      "zee5.jpg",
    ];
   
  return (
    <div className=" md:pb-5">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-[5%]  ">
        <div
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="200"
          className="group flex justify-center md:flex-row flex-col mx-auto gap-10 mt-3"
        >
          <div className="flex items-center  justify-center py-8 px-4">
            <div className="md:w-[400px] flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white">
              <h1 className="pl-[7%] group-hover:bg-gradient-to-r from-[#DE466C] to-[#004281] text-[white] py-3 rounded-t-[20px] bg-[#004281]   text-center font-bold text-xl ">
                50 Mbps
              </h1>
              <button className=" flex justify-evenly  group-hover:bg-gradient-to-r from-[#DE466C] to-[#004281] text-[white] py-3 rounded-3xl bg-[#004281]  mx-2 text-center font-bold text-lg">
                <span>₹ 3999 for Base Plan + ₹ 800 for OTT Apps</span>
              </button>
              <div className="flex items-center mx-3 gap-3">
                <div className="flex">
                  {" "}
                  <BiRupee size={50} />
                  <span className="text-5xl font-bold"> 4,799</span>
                  <span className="font-bold mt-5">+ GST</span>
                </div>
                <div className="flex gap-3 justify-center"></div>
              </div>
              <div className="py-3 mx-8 text-justify leading-7 tracking-normal text-[#30353a] font-medium">
                50 Mbps upload and download speed. Unlimited usage, no data
                limits. 99% Uptime Server. No complaints, EVER!
              </div>
              <div className="flex h-7 gap-2  w-7 mx-[5%]">
                {Img.map((imageName, index) => (
                  <img
                    key={index}
                    className="flex "
                    src={`${imageName}`}
                    alt={imageName}
                  />
                ))}
              </div>
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
        </div>
        <div
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="200"
          className="group flex justify-center md:flex-row flex-col mx-auto gap-10 mt-3"
        >
          <div className="flex items-center  justify-center py-8 px-4">
            <div className="md:w-[400px] flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white">
              <h1 className="pl-[7%] group-hover:bg-gradient-to-r from-[#DE466C] to-[#004281] text-[white] py-3 rounded-t-[20px] bg-[#004281]   text-center font-bold text-xl ">
                100 Mbps
              </h1>
              <button className=" flex justify-evenly  group-hover:bg-gradient-to-r from-[#DE466C] to-[#004281] text-[white] py-3 rounded-3xl bg-[#004281]  mx-2 text-center font-bold text-lg">
                <span>₹ 4799 for Base Plan + ₹ 1500 for OTT Apps</span>
              </button>
              <div className="flex items-center mx-3 gap-3">
                <div className="flex">
                  {" "}
                  <BiRupee size={50} />
                  <span className="text-5xl font-bold">6,299</span>
                  <span className="font-bold mt-5">+ GST</span>
                </div>
                <div className="flex gap-3 justify-center"></div>
              </div>
              <div className="py-3 mx-8 text-justify leading-7 tracking-normal text-[#30353a] font-medium">
                100 Mbps upload and download speed. Unlimited usage, no data
                limits. 99% Uptime Server. No complaints, EVER!
              </div>
              <div className="flex h-7 gap-2  w-7 mx-[5%]">
                {Img1.map((imageName, index) => (
                  <img
                    key={index}
                    className="flex "
                    src={`${imageName}`}
                    alt={imageName}
                  />
                ))}
              </div>
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
        </div>
        <div
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="200"
          className="group flex justify-center md:flex-row flex-col mx-auto gap-10 mt-3"
        >
          <div className="flex items-center  justify-center py-8 px-4">
            <div className="md:w-[400px] flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white">
              <h1 className="pl-[7%] group-hover:bg-gradient-to-r from-[#DE466C] to-[#004281] text-[white] py-3 rounded-t-[20px] bg-[#004281]   text-center font-bold text-xl ">
                100 Mbps
              </h1>
              <button className=" flex justify-evenly  group-hover:bg-gradient-to-r from-[#DE466C] to-[#004281] text-[white] py-3 rounded-3xl bg-[#004281]  mx-2 text-center font-bold text-lg">
                <span>₹ 4799 for Base Plan + ₹ 2000 for OTT Apps</span>
              </button>
              <div className="flex items-center mx-3 gap-3">
                <div className="flex">
                  {" "}
                  <BiRupee size={50} />
                  <span className="text-5xl font-bold"> 6,799</span>
                  <span className="font-bold mt-5">+ GST</span>
                </div>
              </div>
              <div className="py-3 mx-8 text-justify leading-7 tracking-normal text-[#30353a] font-medium">
                100 Mbps upload and download speed. Unlimited usage, no data
                limits. 99% Uptime Server. No complaints, EVER!
              </div>
              <div className="flex h-7 gap-2  w-7 mx-[5%]">
                {Img2.map((imageName, index) => (
                  <img
                    key={index}
                    className="flex "
                    src={`${imageName}`}
                    alt={imageName}
                  />
                ))}
              </div>
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
        </div>
        <div
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="200"
          className="group flex justify-center md:flex-row flex-col mx-auto gap-10 mt-3"
        >
          <div className="flex items-center  justify-center py-8 px-4">
            <div className="md:w-[400px] flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white">
              <h1 className="pl-[7%] group-hover:bg-gradient-to-r from-[#DE466C] to-[#004281] text-[white] py-3 rounded-t-[20px] bg-[#004281]   text-center font-bold text-xl ">
                200 Mbps
              </h1>
              <button className=" flex justify-evenly  group-hover:bg-gradient-to-r from-[#DE466C] to-[#004281] text-[white] py-3 rounded-3xl bg-[#004281]  mx-2 text-center font-bold text-lg">
                <span>₹ 4999 for Base Plan + ₹ 2000 for OTT Apps</span>
              </button>
              <div className="flex items-center mx-3 gap-3">
                <div className="flex">
                  {" "}
                  <BiRupee size={50} />
                  <span className="text-5xl font-bold"> 6,999</span>
                  <span className="font-bold mt-5">+ GST</span>
                </div>
              </div>
              <div className="py-3 mx-8 text-justify leading-7 tracking-normal text-[#30353a] font-medium">
                200 Mbps upload and download speed. Unlimited usage, no data
                limits. 99% Uptime Server. No complaints, EVER!
              </div>
              <div className="flex h-7 gap-2  w-7 mx-[5%]">
                {Img2.map((imageName, index) => (
                  <img
                    key={index}
                    className="flex "
                    src={`${imageName}`}
                    alt={imageName}
                  />
                ))}
              </div>
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
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="200"
          className="group flex justify-center md:flex-row flex-col mx-auto gap-10 mt-3"
        >
          <div className="flex items-center  justify-center py-8 px-4">
            <div className="md:w-[400px] flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white">
              <h1 className="pl-[7%] group-hover:bg-gradient-to-r from-[#DE466C] to-[#004281] text-[white] py-3 rounded-t-[20px] bg-[#004281]   text-center font-bold text-xl ">
                300 Mbps
              </h1>
              <button className=" flex justify-evenly  group-hover:bg-gradient-to-r from-[#DE466C] to-[#004281] text-[white] py-3 rounded-3xl bg-[#004281]  mx-2 text-center font-bold text-lg">
                <span>₹ 5999 for Base Plan + ₹ 2000 for OTT Apps</span>
              </button>
              <div className="flex items-center mx-3 gap-3">
                <div className="flex">
                  {" "}
                  <BiRupee size={50} />
                  <span className="text-5xl font-bold"> 7,999</span>
                  <span className="font-bold mt-5">+ GST</span>
                </div>
              </div>
              <div className="py-3 mx-8 text-justify leading-7 tracking-normal text-[#30353a] font-medium">
                300 Mbps upload and download speed. Unlimited usage, no data
                limits. 99% Uptime Server. No complaints, EVER!
              </div>
              <div className="flex h-7 gap-2  w-7 mx-[5%]">
                {Img2.map((imageName, index) => (
                  <img
                    key={index}
                    className="flex "
                    src={`${imageName}`}
                    alt={imageName}
                  />
                ))}
              </div>
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
        </div>
        <div
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="200"
          className="group flex justify-center md:flex-row flex-col mx-auto gap-10 mt-3"
        >
          <div className="flex items-center  justify-center py-8 px-4">
            <div className="md:w-[400px] flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white">
              <h1 className="pl-[7%] group-hover:bg-gradient-to-r from-[#DE466C] to-[#004281] text-[white] py-3 rounded-t-[20px] bg-[#004281]   text-center font-bold text-xl ">
                500 Mbps
              </h1>
              <button className=" flex justify-evenly  group-hover:bg-gradient-to-r from-[#DE466C] to-[#004281] text-[white] py-3 rounded-3xl bg-[#004281]  mx-2 text-center font-bold text-lg">
                <span>₹ 6999 for Base Plan + ₹ 2000 for OTT Apps</span>
              </button>
              <div className="flex items-center mx-3 gap-3">
                <div className="flex">
                  {" "}
                  <BiRupee size={50} />
                  <span className="text-5xl font-bold">8,999</span>
                  <span className="font-bold mt-5">+ GST</span>
                </div>
              </div>
              <div className="py-3 mx-8 text-justify leading-7 tracking-normal text-[#30353a] font-medium">
                500 Mbps upload and download speed. Unlimited usage, no data
                limits. 99% Uptime Server. No complaints, EVER!
              </div>
              <div className="flex h-7 gap-2  w-7 mx-[5%]">
                {Img2.map((imageName, index) => (
                  <img
                    key={index}
                    className="flex "
                    src={`${imageName}`}
                    alt={imageName}
                  />
                ))}
              </div>
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
        </div>
      </div>
    </div>
  );
};

export default YealyMonths;
