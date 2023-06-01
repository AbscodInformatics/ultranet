import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import "swiper/css";

const Testimonials = () => {
  return (
    <div className="py-10 bg-black">
      <div className='text-3xl text-white text-center font-semibold py-5'>Testimonials</div>

      <div className="">
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
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="lg:max-w-[784px] mt-20 py-10 md:max-w-[716px] max-w-[475px] mx-auto bg-[#e10000] text-white lg:px-10 md:px-6 px-4  rounded-lg">
              <div className="flex justify-center  text-3xl text-[#e10000]  -mt-[12%] items-center">
                <div className="w-28 h-28 rounded-full  text-center pt-[5%] font-bold bg-white">
                  S G
                </div>
              </div>
              <div className=" px-4 py-12">
                <FaQuoteLeft size={30} />
                <p className="text-xl">
                  Whether you need to binge-watching your favorite shows or need
                  top-notch upload speeds for remote work, Ultranet has got you
                  covered!{" "}
                </p>
                <div className="flex justify-end flex-end">
                  <FaQuoteRight size={30} />
                </div>
              </div>
              <div
                className="text-2xl font-semi
          "
              >
                Shivangi Gupta
              </div>
              <div className="text-center">
                <button className="bg-white text-sm py-3 text-[#e10000] hover:text-[] lg:max-w-[175px] mx-auto w-full text-center rounded font-medium mt-6 hover:bg-[white] transition duration-300 ease-in-out">
                  Back to Homepage
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:max-w-[784px] mt-20 py-10 md:max-w-[716px] max-w-[475px] mx-auto bg-[#e10000] text-white lg:px-10 md:px-6 px-4  rounded-lg">
              <div className="flex justify-center  text-3xl text-[#e10000]  -mt-[12%] items-center">
                <div className="w-28 h-28 rounded-full  text-center pt-[5%] font-bold bg-white">
                 N B
                </div>
              </div>
              <div className=" px-4 py-12">
                <FaQuoteLeft size={30} />
                <p className="text-xl">
                  For my online course, I need a dependable internet connection.
                  Ultranet has been a dependable and affordable broadband
                  provider for a college student like me. I am overjoyed to have
                  picked this broadband. I'd give it a 10/10!
                </p>
                <div className="flex justify-end flex-end">
                  <FaQuoteRight size={30} />
                </div>
              </div>
              <div
                className="text-2xl font-semi
          "
              >
                Neeraj Bhajwa
              </div>
              <div className="text-center">
                <button className="bg-white text-sm py-3 text-[#e10000] hover:text-[] lg:max-w-[175px] mx-auto w-full text-center rounded font-medium mt-6 hover:bg-[white] transition duration-300 ease-in-out">
                  Back to Homepage
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:max-w-[784px] mt-20 py-10 md:max-w-[716px] max-w-[475px] mx-auto bg-[#e10000] text-white lg:px-10 md:px-6 px-4  rounded-lg">
              <div className="flex justify-center  text-3xl text-[#e10000]  -mt-[12%] items-center">
                <div className="w-28 h-28 rounded-full  text-center pt-[5%] font-bold bg-white">
                 R R
                </div>
              </div>
              <div className=" px-4 py-12">
                <FaQuoteLeft size={30} />
                <p className="text-xl">
                  The internet connection is also stable and consistent Customer
                  service is also excellent they rest. I recommend this
                  broadband service to anyone searching for an affordable,
                  consistent connection. ecstatic to have chosen this broadband.
                </p>
                <div className="flex justify-end flex-end">
                  <FaQuoteRight size={30} />
                </div>
              </div>
              <div
                className="text-2xl font-semi
          "
              >
                Rahul Rai
              </div>
              <div className="text-center">
                <button className="bg-white text-sm py-3 text-[#e10000] hover:text-[] lg:max-w-[175px] mx-auto w-full text-center rounded font-medium mt-6 hover:bg-[white] transition duration-300 ease-in-out">
                  Back to Homepage
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:max-w-[784px] mt-20 py-10 md:max-w-[716px] max-w-[475px] mx-auto bg-[#e10000] text-white lg:px-10 md:px-6 px-4  rounded-lg">
              <div className="flex justify-center  text-3xl text-[#e10000]  -mt-[12%] items-center">
                <div className="w-28 h-28 rounded-full  text-center pt-[5%] font-bold bg-white">
                 R S
                </div>
              </div>
              <div className=" px-4 py-12">
                <FaQuoteLeft size={30} />
                <p className="text-xl">
                  I am amazed by the customer service and connection speed of
                  Ultranet broadband. I wholeheartedly endorse this broadband to
                  anyone Iooking for a dependable connection at a reasonable
                  price. so happy to selected this broadband.
                </p>
                <div className="flex justify-end flex-end">
                  <FaQuoteRight size={30} />
                </div>
              </div>
              <div
                className="text-2xl font-semi
          "
              >
                Ravi Sain
              </div>
              <div className="text-center">
                <button className="bg-white text-sm py-3 text-[#e10000] hover:text-[] lg:max-w-[175px] mx-auto w-full text-center rounded font-medium mt-6 hover:bg-[white] transition duration-300 ease-in-out">
                  Back to Homepage
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:max-w-[784px] mt-20 py-10 md:max-w-[716px] max-w-[475px] mx-auto bg-[#e10000] text-white lg:px-10 md:px-6 px-4  rounded-lg">
              <div className="flex justify-center  text-3xl text-[#e10000]  -mt-[12%] items-center">
                <div className="w-28 h-28 rounded-full  text-center pt-[5%] font-bold bg-white">
                S V
                </div>
              </div>
              <div className=" px-4 py-12">
                <FaQuoteLeft size={30} />
                <p className="text-xl">
                  If you're looking for fast and reliable internet connectivity,
                  Ultranet might be an excellent choice for you. You can feel
                  assured that your connection won't falter thanks to their
                  advanced infrastructure, which includes fiber-optic cables and
                  other cutting-edge technologies.
                </p>
                <div className="flex justify-end flex-end">
                  <FaQuoteRight size={30} />
                </div>
              </div>
              <div
                className="text-2xl font-semi
          "
              >
                Sanjeev Vasu
              </div>
              <div className="text-center">
                <button className="bg-white text-sm py-3 text-[#e10000] hover:text-[] lg:max-w-[175px] mx-auto w-full text-center rounded font-medium mt-6 hover:bg-[white] transition duration-300 ease-in-out">
                  Back to Homepage
                </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:max-w-[784px] mt-20 py-10 md:max-w-[716px] max-w-[475px] mx-auto bg-[#e10000] text-white lg:px-10 md:px-6 px-4  rounded-lg">
              <div className="flex justify-center  text-3xl text-[#e10000]  -mt-[12%] items-center">
                <div className="w-28 h-28 rounded-full  text-center pt-[5%] font-bold bg-white">
                T J
                </div>
              </div>
              <div className=" px-4 py-12">
                <FaQuoteLeft size={30} />
                <p className="text-xl">
                  Their customer service team was attentive and knowledgeable,
                  and solved any issues or concerns that I had.
                </p>
                <div className="flex justify-end flex-end">
                  <FaQuoteRight size={30} />
                </div>
              </div>
              <div
                className="text-2xl font-semi
          "
              >
                Tanisha Jain
              </div>
              <div className="text-center">
                <button className="bg-white text-sm py-3 text-[#e10000] hover:text-[] lg:max-w-[175px] mx-auto w-full text-center rounded font-medium mt-6 hover:bg-[white] transition duration-300 ease-in-out">
                  Back to Homepage
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials