import React from 'react'

const Home = () => {
  return (
    <div className='pt-[3%]'>
      <div
        className="bg-black  w-auto mx-auto h-[20vh] md:h-[30vh] lg:h-[85vh] bg-contain bg-no-repeat"
        style={{ backgroundImage: `url("/HomeFttp.png")`}}
      ></div>
      <div className="py-[5%]">
        <div>
          <div className="text-3xl  text-center mx-1 md:mx-0 text-white">
            Home Broadband
          </div>
          <div className=" flex justify-center mt-[2%] items-center">
            <img src="/ChartPlan.png" alt="" className="w-[70%]" />
          </div>
          <div className='bg-white'>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home