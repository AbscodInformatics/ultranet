import React from 'react'

const Features = () => {
  return (
    <div className=" py-[5%] text-white bg-black">
      <div className=" flex justify-center gap-5 flex-col items-center">
        <div className="text-3xl text-center mx-1 md:mx-0 text-white">
          HOW ULTRANET IS DIFFERENT
        </div>
        <div className="text-xl text-justify mt-[2%] mx-[5%]">
          We are voted the best broadband service provider in the India, and our
          speeds are one of the unmatched in the industry. Most fibre broadband
          services are usually fibre and copper, fibre optic cables from the
          exchange to your street and then copper wires into your dwelling. This
          negatively impacts the speed. Besides, there is more attenuation with
          copper wiring. Our mission is to ensure that our customers enjoy high
          bandwidth HD quality video streaming line.
        </div>
        <button className="text-xl text-center bg-gradient-to-r px-7 py-2 rounded-3xl from-[#e10000] via-[#f03e3e] to-[#1c0303] ">
          Find Out More
        </button>
        <img src="/BroadbandBg.png" alt="" className="mt-2" />
        <button className="text-xl text-center bg-gradient-to-r px-7 py-2 rounded-3xl from-[#e10000] via-[#f03e3e] to-[#1c0303] ">
       See Our Price Plans & Order Now
        </button>
      </div>
      <div></div>
    </div>
  );
}

export default Features