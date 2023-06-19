import React,{useRef} from "react";
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
      <div className="bg-gray-100">
        <div className="py-14 px-3">
          <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] w-full mx-auto">
            <div className="bg-white lg:px-10 md:px-6 px-4 py-12">
              <div
                data-aos="zoom-in-up"
                data-aos-delay="8000"
                className="text-5xl font-bold text-center mx-1 md:mx-0 bg-gradient-to-r from-teal-500 via-blue-500 to-pink-500 text-transparent bg-clip-text "
              >
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
                      <img
                        // src="kailash.png"
                        src="11.jpg"
                        alt=""
                        // className="object-fill -mt-3  "
                        className="object-cover "
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="mx-[5%] ">
                      <img
                        // src="aditya.png"
                        src="22.jpg"
                        alt=""
                        // className="object-cover   mt-5"
                        className="object-cover "
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="mx-[5%]">
                      <img
                        // src="siemens.jpeg"
                        src="33.jpg"
                        alt=""
                        className="object-cover "
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    {" "}
                    <div className="mx-[5%]  ">
                      <img
                        // src="hcl.png"
                        src="44.jpg"
                        alt=""
                        className="object-cover "
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className=" mx-[5%]">
                      <img
                        //  src="dixon.png"
                        src="55.jpg"
                        alt=""
                        className="object-cover "
                      />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    {" "}
                    <div className="mx-[5%] ">
                      <img
                        // src="rotopump.jpeg"
                        src="77.jpg"
                        alt=""
                        className="object-cover "
                        // className="object-cover -mt-1"
                      />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="mx-[5%] ">
                      <img
                        // src="bharat.png"
                        src="88.jpg"
                        alt=""
                        className="object-cover  "
                      />
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div
                      className="mx-[5%] "
                      // className=" "
                    >
                      <img
                        // src="countyestate.png"
                        src="99.jpg"
                        alt=""
                        className="object-cover "
                      />
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="mx-[5%] h-10 ">
                      <img
                        // src="car24.jpeg"
                        src="666.jpg"
                        alt=""
                        // className="object-cover -mt-5"
                        className="object-cover "
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
