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
                    1524: { slidesPerView: 6 },
                  }}
                  modules={[Autoplay]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <div
                      data-aos="zoom-in-left"
                      data-aos-once="false"
                      className=" w-48 h-48"
                    >
                      <img
                        src="kailash.png"
                        alt=""
                        className="object-fill -mt-3  "
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div
                      data-aos="zoom-in-left"
                      data-aos-once="false"
                      className="w-48 h-48 "
                    >
                      <img
                        src="aditya.png"
                        alt=""
                        className="object-cover   mt-5"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div
                      data-aos="zoom-in-left"
                      data-aos-once="false"
                      className="w-48 h-48"
                    >
                      <img
                        src="siemens.jpeg"
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
                      className="w-48 h-48 "
                    >
                      <img src="hcl.png" alt="" className="object-cover " />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      data-aos="zoom-in-left"
                      data-aos-once="false"
                      className="w-48 h-48 "
                    >
                      <img src="dixon.png" alt="" className="object-cover " />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      data-aos="zoom-in-left"
                      data-aos-once="false"
                      className="w-48 h-48 "
                    >
                      <img
                        src="car24.jpeg"
                        alt=""
                        className="object-cover -mt-5"
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div
                      data-aos="zoom-in-left"
                      data-aos-once="false"
                      className="w-48 h-48 "
                    >
                      <img
                        src="rotopump.jpeg"
                        alt=""
                        className="object-cover -mt-1"
                      />
                    </div>
                  </SwiperSlide>

                  {/* <SwiperSlide>
                    <div
                      data-aos="zoom-in-left"
                      data-aos-once="false"
                      className="w-48 h-48 "
                    >
                      <img src="bharat.png" alt="" className="object-cover  " />
                    </div>
                  </SwiperSlide> */}

                  <SwiperSlide>
                    <div
                      data-aos="zoom-in-left"
                      data-aos-once="false"
                      className="w-48 h-48 "
                    >
                      <img
                        src="countyestate.png"
                        alt=""
                        className="object-cover "
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div
                      data-aos="zoom-in-left"
                      data-aos-once="false"
                      className="w-48 h-48 "
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
                      className="w-48 h-48 "
                    >
                      <img
                        src="aakash.png"
                        alt=""
                        className="object-cover -mt-3  "
                      />
                    </div>
                  </SwiperSlide>
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
