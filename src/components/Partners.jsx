import React from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
SwiperCore.use([Autoplay]);

const Partners = () => {
  AOS.init();
  return (
    <>
      <div className="bg-gray-100">
        <div className="py-14 px-3">
          <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] w-full mx-auto">
            <div className="bg-white lg:px-10 md:px-6 px-4 py-12">
              <div
                data-aos="zoom-in-up"
                data-aos-delay="8000"
                data-aos-once="false"
                className="text-5xl font-bold text-center mx-1 md:mx-0 bg-gradient-to-r from-teal-500 via-blue-500 to-pink-500 text-transparent bg-clip-text "
              >
                Few Of Our Customers Showcase Client
              </div>
              <div className="mt-10 swiper mySwiper">
                <Swiper
                  loop={true}
                  autoplay={{
                    delay: 1500,
                  }}
                  breakpoints={{
                    640: { slidesPerView: 1 },
                    778: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1224: { slidesPerView: 4 },
                    1324: { slidesPerView: 4 },
                    1524: { slidesPerView: 5 },
                  }}
                  modules={[Autoplay]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div
                      data-aos="zoom-in-left"
                      data-aos-once="false"
                      className=" "
                    >
                      <img
                        // src="kailash.png"
                        src="1.jpg"
                        alt=""
                        // className="object-fill -mt-3  "
                          className="object-cover "
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div
                      data-aos="zoom-in-left"
                      data-aos-once="false"
                      className=" "
                    >
                      <img
                        // src="aditya.png"
                        src="2.jpg"
                        alt=""
                        // className="object-cover   mt-5"
                        className="object-cover "
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div
                      data-aos="zoom-in-left"
                      data-aos-once="false"
                      className=""
                    >
                      <img
                        // src="siemens.jpeg"
                        src="3.jpg"
                        alt=""
                        className="object-cover "
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div
                      data-aos="zoom-in-left"
                      data-aos-once="false"
                      className=" "
                    >
                      <img
                        // src="hcl.png"
                        src="4.jpg"
                        alt=""
                        className="object-cover "
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      data-aos="zoom-in-left"
                      data-aos-once="false"
                      className=" "
                    >
                      <img
                        //  src="dixon.png"
                        src="5.jpg"
                        alt=""
                        className="object-cover "
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      data-aos="zoom-in-left"
                      data-aos-once="false"
                      className=" "
                    >
                      <img
                        // src="car24.jpeg"
                        src="6.jpg"
                        alt=""
                        // className="object-cover -mt-5"
                        className="object-cover "
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div
                      data-aos="zoom-in-left"
                      data-aos-once="false"
                      className=" "
                    >
                      <img
                        // src="rotopump.jpeg"
                        src="7.jpg"
                        alt=""
                        className="object-cover "
                        // className="object-cover -mt-1"
                      />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div
                      data-aos="zoom-in-left"
                      data-aos-once="false"
                      // className=" "
                      className="object-cover "
                    >
                      <img
                        // src="bharat.png"
                        src="8.jpg"
                        alt=""
                        className="object-cover  "
                      />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div
                      data-aos="zoom-in-left"
                      data-aos-once="false"
                      className="object-cover "
                      // className=" "
                    >
                      <img
                        // src="countyestate.png"
                        src="9.jpg"
                        alt=""
                        className="object-cover "
                      />
                    </div>
                  </SwiperSlide>
                  {/* <SwiperSlide>
                    <div
                      data-aos="zoom-in-left"
                      data-aos-once="false"
                      className=" "
                    >
                      <img
                        src="abacrop.jpeg"
                        alt=""
                        className="object-cover -mt-4 w-full"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div
                      data-aos="zoom-in-left"
                      data-aos-once="false"
                      className=" "
                    >
                      <img
                        src="aakash.png"
                        alt=""
                        className="object-cover -mt-3  "
                      />
                    </div>
                  </SwiperSlide> */}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partners;
