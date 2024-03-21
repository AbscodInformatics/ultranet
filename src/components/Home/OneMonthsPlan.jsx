import React, { useEffect } from "react";
import { BiRupee } from "react-icons/bi";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const OneMonthsPlan = () => {
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
  const Img3 = [
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
  const Img4 = [
    "alt.jpg",
    "sony1.png",
    "disney.jpg",
    "epic.jpg",
    "hum.jpg",
    "hungama.jpg",
    "play.jpg",
    "prime.jpg",
    "shemaro.jpg",
    "zee5.jpg",
  ];
  useEffect(() => {
    AOS.init({
      duration: 3000,
      offset: 0,
    });
  });
  return (
    <div className=' md:pb-5'>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-[5%]  '>
        {/* <div
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="200"
          className="group flex justify-center md:flex-row flex-col mx-auto gap-10 mt-3"
        >
          <div className="flex items-center  justify-center py-8 px-4">
            <div className="md:w-[400px] flex flex-col gap-7 shadow-lg  rounded-[5px] pb-10  bg-white">
              <h1 className="pl-[7%] group-hover:bg-customYellow  text-[white] py-3 rounded-t-[20px] bg-customBlue   text-center font-bold text-xl ">
                50 Mbps
              </h1>

              <div className="flex items-center justify-center my-2 mx-3 gap-3">
                <div className="flex items-center justify-center">
                  {" "}
                  <BiRupee size={50} />
                  <span className="text-5xl font-bold"> 499</span>
                 <span className="font-bold mt-5">+ GST</span>
                </div>
                <div className="flex gap-3 justify-center"></div>
              </div>
              <div className=" flex justify-evenly  text-customBlue py-3 -3xl mx-2 text-center font-bold text-lg ">
                <div className=''>
                  {" "}
                  <div>Base Plan</div>
                  <div>₹ 399 </div>
                </div>
                <div>
                  {" "}
                  <div>OTT Apps</div>
                  <div>₹ 100</div>
                </div>
              </div>

              <div className="flex text-center items-center justify-center">
                <div className="flex  gap-2 items-center my-2 ">
                  {Img.map((imageName, index) => (
                    <img
                      key={index}
                      className="flex w-14 h-14"
                      src={`${imageName}`}
                      alt={imageName}
                    />
                  ))}
                  <span className="text-[#818487] "> + 2 More</span>
                </div>
              </div>
              <Link
                to={"https://my.ultranet.co.in/enquiry?src=website"}
                className="flex justify-center"
              >
                <button className="group-hover:bg-gradient-to-r bg-customBlue px-5 text-lg py-3 group-hover:bg-customYellow text-white font-medium rounded-full transition duration-300">
                  Choose Plan
                </button>
              </Link>
            </div>
          </div>
        </div> */}
        {/* <div
          data-aos="fade-up"
          data-aos-once="false"
          data-aos-delay="200"
          className="group flex justify-center md:flex-row flex-col mx-auto gap-10 mt-3"
        >
          <div className="flex items-center  justify-center py-8 px-4">
            <div className="md:w-[400px] flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white">
              <h1 className="pl-[7%] group-hover:bg-gradient-to-r from-customYellow to-customBlue text-[white] py-3 rounded-t-[20px] bg-customBlue   text-center font-bold text-xl">
                100 Mbps
              </h1>
              <button className=" flex justify-evenly  group-hover:bg-customYellow text-[white] py-3 rounded-3xl bg-customBlue  mx-2 text-center font-bold text-lg">
                <span>₹ 499 for Base Plan + ₹ 150 for OTT Apps</span>
              </button>
              <div className="flex items-center mx-3 gap-3">
                <div className="flex">
                  {" "}
                  <BiRupee size={50} />
                  <span className="text-5xl font-bold"> 649</span>
                 <span className="font-bold mt-5">+ GST</span>
                </div>
                <div className="flex gap-3 justify-center"></div>
              </div> */}
        {/* <div className="py-3 mx-8 text-justify leading-7 tracking-normal text-[#30353a] font-medium">
                100 Mbps upload and download speed. Unlimited usage, no data
                limits. 99% Uptime Server. No complaints, EVER!
              </div> */}
        {/* <div className="flex h-7 gap-2  w-7 mx-[5%]">
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
                <button className="group-hover:bg-gradient-to-r bg-customBlue px-8 text-lg py-3 group-hover:bg-customYellow text-white font-medium rounded transition duration-300">
                  Choose Plan
                </button>
              </Link>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default OneMonthsPlan;
