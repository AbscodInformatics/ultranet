import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
      AOS.init();
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-delay="8000"
      data-aos-once="false"
      className=" py-[5%]  "
    >
      <div className=" flex justify-center gap-5 flex-col items-center">
        <div
          data-aos="zoom-in-up"
          data-aos-delay="8000"
          data-aos-once="false"
          className="text-5xl font-bold text-center mx-1 md:mx-0 bg-gradient-to-r from-teal-500 via-blue-500 to-pink-500 text-transparent bg-clip-text "
        >
          HOW ULTRANET IS DIFFERENT
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-delay="8000"
          data-aos-once="false"
          className="text-xl text-justify font-semibold mt-[2%] mx-[8%]"
        >
          We are voted the best broadband service provider in the India, and our
          speeds are one of the unmatched in the industry. Most fibre broadband
          services are usually fibre and copper, fibre optic cables from the
          exchange to your street and then copper wires into your dwelling. This
          negatively impacts the speed. Besides, there is more attenuation with
          copper wiring. Our mission is to ensure that our customers enjoy high
          bandwidth HD quality video streaming line.
        </div>
        {/* <button
          data-aos="zoom-in-up"
          data-aos-delay="8000"
          data-aos-once="false"
          className="text-lg mt-5 bg-gradient-to-r font-semibold from-red-500 via-yellow-500 to-red-500   px-10 py-4 text-center uppercase transition duration-500 ease-in-out bg-no-repeat bg-size-200% text-white hover:bg-gradient-to-r hover:from-red-300 hover:via-yellow-400 hover:to-red-500 shadow-lg rounded-lg "
        >
          Find Out More
        </button> */}
      </div>
    </div>
  );
}

export default Features