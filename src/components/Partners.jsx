import React, { useRef } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
SwiperCore.use([Autoplay]);

const Partners = () => {
  const swiperRef = useRef(null);

  const handleSwiper = (swiper) => {
    swiperRef.current = swiper;
  };

  return (
    <>
      <h1></h1>
      <div className="bg-gray-100">
        <div className="py-14 px-3">
          <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] w-full mx-auto">
            <div className="bg-white lg:px-10 md:px-6 px-4 py-12">
              <div className="text-5xl leading-[60px] text-[#004281] tracking-[-0.04em]  font-[800] text-center mx-1 md:mx-0 ">
                Few Of Our Customers Showcase Client
              </div>
              <div className="mt-10 swiper mySwiper">
                <Swiper
                  loop={true}
                  autoplay={{ delay: 1500 }}
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
                  onSwiper={handleSwiper}
                >
                  <SwiperSlide>
                    <div className="mx-[5%] ">
                      <img src="11.jpg" alt="" className="object-cover " />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="mx-[5%] ">
                      <img src="22.jpg" alt="" className="object-cover " />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="mx-[5%]">
                      <img src="33.jpg" alt="" className="object-cover " />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="mx-[5%]  ">
                      <img src="44.jpg" alt="" className="object-cover " />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=" mx-[5%]">
                      <img src="55.jpg" alt="" className="object-cover " />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    {" "}
                    <div className="mx-[5%] ">
                      <img src="77.jpg" alt="" className="object-cover " />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="mx-[5%] ">
                      <img src="88.jpg" alt="" className="object-cover  " />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="mx-[5%] ">
                      <img src="99.jpg" alt="" className="object-cover " />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="mx-[5%] h-10 ">
                      <img src="666.jpg" alt="" className="object-cover " />
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
