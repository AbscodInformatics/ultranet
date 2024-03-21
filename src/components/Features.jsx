import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  AOS.init();
  return (
    <div className='w-full flex justify-center py-[5%] gap-5 flex-col items-center bg-[#f5f5f5] mt-8'>
      <div className='flex flex-col items-center'>
        <div className='text-[3rem] leading-[60px] text-customBlue tracking-[-0.04em]  font-[800] text-center mx-1 md:mx-0  '>
          HOW MOVENPACK IS DIFFERENT
        </div>
        <span className='w-40 border-customYellow border-[3px] rounded'></span>
      </div>
      <div className='flex md:flex-row flex-col  gap-4 p-8'>
        <img src='/card1.jpeg' className='border-4 rounded' />
        <div className=' text-xl font-medium leading-8 text-[#818487] text-justify  mt-[2%] px-2 md:px-14'>
          To hire movers in Dubai, you can find out from your surroundings, your
          colleagues or your friends may already have used a professional moving
          company in Dubai. Of course, all moving companies have detailed
          profiles on the Internet to give a precise idea of the cost that will
          involve your departure. In order to avoid unpleasant surprises, it is
          advised to prefer professional movers Dubai who are certified like
          Expert Mover.
        </div>
      </div>
    </div>
  );
};

export default Features;
