import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Businessbroadband from "./Businessbroadband";
import LeasedLinres from "./LeasedLinres";
import { LuHeartHandshake } from "react-icons/lu";
import { TbTargetArrow } from "react-icons/tb";

const Home = () => {
  useEffect(() => {
    // AOS.init();
  });
  const [activeTab, setActiveTab] = useState("monthly");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "monthly":
        return <Businessbroadband />;
      case "threemonth":
        return <LeasedLinres />;

      default:
        return null;
    }
  };
  return (
    <div>
      <div>
        <Swiper
          loop={true}
          autoplay={{
            delay: 3000,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            778: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
            1224: { slidesPerView: 1 },
            1324: { slidesPerView: 1 },
            1524: { slidesPerView: 1 },
          }}
          modules={[Autoplay]}
          className='mySwiper'
        >
          <SwiperSlide className='relative'>
            <img
              src='/img.jpg'
              alt=''
              className='object-fill h-[30vh] md:h-[80vh] w-full'
            />
            <div className='absolute top-[470px] left-20 font-[700] text-3xl text-white'>
              <h1 className='text-black'>
                Hasle-Free Move & Pack Service in UAE
              </h1>
              <h4 className='text-xl font-normal text-center text-gray-500 py-2'>
                Our Custmer support services in 24 * 7
              </h4>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className='flex flex-col justify-between items-center p-10'>
        <h2 className='text-red-500'>ABOUT US</h2>
        <h1>
          <h2 class='text-[24px] font-[600] text-center flex flex-col items-center justify-center'>
            We Are The Top Packers And Movers In Dubai
            <span className='border-customYellow w-40 border-[3px] rounded'></span>
          </h2>
          <div className='flex flex-col md:flex-row  py-10 gap-2 md:gap-8'>
            <img
              src='/aboutImage.jpeg'
              alt=''
              className='md:w-[50%] border-[4px] wmax-w-full rounded'
            />
            <div className='md:w-[50%]'>
              <h2 className='text-[20px] font-[600] text-center text-gray-600'>
                We Are The Top Packers And Movers In UAE
              </h2>
              <p class='py-3 text-justify text-gray-500'>
                Welcome to MoveNPack Packers and Movers, the leading packers and
                movers in Dubai. With years of experience in the industry, we
                take pride in offering efficient and hassle-free moving
                solutions to our esteemed clientele. Whether you are planning to
                move locally within Dubai or want to relocate to another city,
                MoveNPack Packers and Movers has got you covered. We aim to
                ensure a smooth transition for our customers, making their
                moving experience as seamless as possible.
              </p>
              <p class='pb-8 text-justify text-gray-500'>
                At MoveNPack Packers and Movers in Dubai, we understand that
                moving can be a stressful and overwhelming task. That's why we
                are here to take the burden off your shoulders and handle every
                aspect of your relocation professionally. Our team of highly
                skilled and trained packers and movers in Dubai is dedicated to
                delivering exceptional services tailored to meet your specific
                needs and expectations.
              </p>
            </div>
          </div>
        </h1>
      </div>
      <div className='flex md:flex-row flex-col justify-center items-center md:items-stretch gap-14'>
        <div
          data-aos='zoom-in-up'
          data-aos-once='false'
          data-aos-duration='3000'
          className='w-[350px] md:w-[500px] group flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white'
        >
          <div className='flex justify-center items-center text-center group-hover:bg-gradient-to-r bg-customYellow group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-t-[20px] bg-[#071343]  text-xl  '>
            <LuHeartHandshake size={40} />
          </div>
          <div className='text-lg py-3 text-justify mx-[7%] text-black'>
            Our <span className='font-bold text-lg'>PROMISE</span> is the same for
            Promising reliability and peace of mind, we vow to redefine your
            moving and packing experience with personalized care and exceptional
            service.
          </div>
        </div>
        <div
          data-aos='zoom-in-up'
          data-aos-once='false'
          data-aos-duration='3000'
          className='w-[350px] md:w-[500px] group flex flex-col gap-7 shadow-lg  rounded-[20px] pb-10  bg-white'
        >
          <div className='flex justify-center items-center text-center group-hover:bg-gradient-to-r  bg-customYellow group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500 text-[white] py-3 rounded-t-[20px] bg-[#071343]  text-xl  '>
            <TbTargetArrow size={40} />
          </div>
          <div className='text-lg    py-3 text-justify mx-[7%] text-black   font-normal '>
            Our <span className='font-bold text-lg'>MISSION</span> is to ensure
            that Simplify transitions and elevate experiences - we're dedicated
            to providing seamless moving and packing solutions tailored to your
            needs.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
