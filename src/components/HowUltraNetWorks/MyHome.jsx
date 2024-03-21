import React from "react";

const MyHome = () => {
  return (
    <div className='text-[#071343]'>
      <div className='text-lg '>
        <p className='text-xl  font-bold '>
          Follow these simple steps to get hyperfast broadband to your home
        </p>
        <ul className='list-decimal  ml-7 mt-5'>
          <li className='font-semibold'>
            Check your address/postcode to make sure UltraNet is currently
            available in your building or area. If not, go to My Building tab.
          </li>
          <li className='font-semibold '>Choose your product</li>
          <li className='font-semibold'>
            Review our installation procedure here
          </li>
          <li className='font-semibold'>
            Place an order on our website or call +91-02262581800
          </li>
        </ul>
      </div>
      <div className='mt-[5%]'>
        <div className='text-5xl leading-[60px] text-customBlue tracking-[-0.04em]  font-[800] text-center mx-1 md:mx-0  '>
          HOW MOVENPACK IS DIFFERENT
        </div>
        <p className='text-lg mt-[3%] font-semibold'>
          We are voted the best broadband service provider in the India, and our
          speeds are one of the unmatched in the industry. Most fiber broadband
          services are usually fiber and copper, fiber optic cables from the
          exchange to your street and then copper phone wires into your
          dwelling. This negatively impacts the speed. Besides, there is more
          attenuation with copper wiring. Our mission is to ensure that our
          customers enjoy high bandwidth HD quality video streaming online.
        </p>
      </div>
    </div>
  );
};

export default MyHome;
