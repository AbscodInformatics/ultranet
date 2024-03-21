import React, { useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
      offset: 0,
    });
  });
  return (
    <div
      data-aos='fade-up'
      data-aos-once='false'
      className='py-10 bg-[#ffc600] px-8 text-lg   text-white font-medium rounded transition duration-300'
    >
      <div className='text-3xl flex flex-col items-center text-white text-center font-semibold py-5'>
        Testimonials
        <span className='w-20 border-customYellow border-[3px] rounded'></span>
      </div>

      <div data-aos='flip-down' data-aos-once='false' className=''>
        <Swiper
          data-aos='flip-down'
          data-aos-once='false'
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
          <SwiperSlide>
            <div
              data-aos='flip-down'
              data-aos-once='false'
              className='lg:max-w-[784px] border-[2px] mt-20 py-10 md:max-w-[716px] max-w-[400px] mx-auto  hover:bg-gradient-to-r from-customYellow to-customBlue  bg-customBlue text-white font-medium  transition duration-300  lg:px-10 md:px-6 px-4  rounded-xl'
            >
              <div className='flex justify-center  text-3xl text-[#071343] -mt-[35%] md:-mt-[14%] items-center'>
                <div className='w-28 h-28 rounded-full  text-center pt-[10%] md:pt-[5%] font-bold bg-white'>
                  M D
                </div>
              </div>
              <div className=' px-4 py-12'>
                <FaQuoteLeft size={30} />
                <p className='text-xl'>
                  <p>
                    I had a wonderful experience with MoverNPack Packers and
                    Movers during my recent move in Dubai. Their team was highly
                    skilled and well-equipped. They packed and transported all
                    my belongings safely and securely. They were also flexible
                    with my schedule and accommodated all my requests. I would
                    definitely use their services again and recommend them to
                    others.
                  </p>
                </p>
                <div className='flex justify-end flex-end'>
                  <FaQuoteRight size={30} />
                </div>
              </div>
              <div
                className='text-2xl font-semi
          '
              >
                Modern Development Building Contracting LLC
              </div>
              <div className='text-center'>
                <button className='bg-white text-base py-3 text-[#071343] hover:text-[] lg:max-w-[175px] mx-auto w-full text-center rounded font-medium mt-6 hover:bg-[white] transition duration-300 ease-in-out'>
                  Back to Homepage
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              data-aos='flip-down'
              data-aos-once='false'
              // data-aos-delay="800"
              className='lg:max-w-[784px] border-[2px] mt-20 py-10 md:max-w-[716px] max-w-[400px] mx-auto  hover:bg-gradient-to-r from-customYellow to-customBlue  bg-customBlue text-white font-medium  transition duration-300  lg:px-10 md:px-6 px-4  rounded-xl'
            >
              <div className='flex justify-center  text-3xl text-[#071343]  -mt-[35%] md:-mt-[14%] items-center'>
                <div className='w-28 h-28 rounded-full  text-center pt-[10%] md:pt-[5%] font-bold bg-white'>
                  A Z L
                </div>
              </div>
              <div className=' px-4 py-12'>
                <FaQuoteLeft size={30} />
                <p className='text-xl'>
                  <p>
                    MoveNPack Packers and Movers provided exceptional service
                    during my relocation in Dubai. Their team was professional,
                    courteous, and worked efficiently. They took great care of
                    my fragile items and ensured that everything arrived intact
                    at the new location. Their pricing was reasonable, and
                    overall, it was a stress-free experience. I highly recommend
                    their services.
                  </p>
                </p>
                <div className='flex justify-end flex-end'>
                  <FaQuoteRight size={30} />
                </div>
              </div>
              <div
                className='text-2xl font-semi
          '
              >
                ADMAC FZE LLC
              </div>
              <div className='text-center'>
                <button className='bg-white text-base py-3 text-[#071343] hover:text-[] lg:max-w-[175px] mx-auto w-full text-center rounded font-medium mt-6 hover:bg-[white] transition duration-300 ease-in-out'>
                  Back to Homepage
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              data-aos='flip-down'
              data-aos-once='false'
              // data-aos-delay="1000"
              className='lg:max-w-[784px] border-[2px] mt-20 py-10 md:max-w-[716px] max-w-[400px] mx-auto  hover:bg-gradient-to-r from-customYellow to-customBlue  bg-customBlue text-white font-medium  transition duration-300  lg:px-10 md:px-6 px-4  rounded-xl'
            >
              <div className='flex justify-center  text-3xl text-[#071343]  -mt-[35%] md:-mt-[14%] items-center'>
                <div className='w-28 h-28 rounded-full  text-center pt-[10%] md:pt-[5%] font-bold bg-white'>
                  J E S
                </div>
              </div>
              <div className=' px-4 py-12'>
                <FaQuoteLeft size={30} />
                <p className='text-xl'>
                  <p>
                    MoveNPack Packers and Movers are highly professional and
                    reliable. I recently availed their services for my intercity
                    move in Dubai, and they exceeded my expectations. The team
                    was punctual, efficient, and handled my valuables with great
                    care.
                  </p>
                </p>
                <div className='flex justify-end flex-end'>
                  <FaQuoteRight size={30} />
                </div>
              </div>
              <div
                className='text-2xl font-semi
          '
              >
                Just Excel Contracting
              </div>
              <div className='text-center'>
                <button className='bg-white text-base py-3 text-[#071343] hover:text-[] lg:max-w-[175px] mx-auto w-full text-center rounded font-medium mt-6 hover:bg-[white] transition duration-300 ease-in-out'>
                  Back to Homepage
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
