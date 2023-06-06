import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const HeroPage = () => {
  return (
    // <div
    //   className="bg-black  w-auto mx-auto h-[20vh] md:h-[30vh] lg:h-[85vh] bg-contain bg-no-repeat"
    //   style={{ backgroundImage: `url("/banner2.png")` }}
    // ></div>
    <div className="pt-[23%] md:pt-[3%]">
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
          <img
            src="/banner2.png"
            alt=""
            className="object-fill h-[30vh] md:h-[80vh] w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/businesshome2.jpg"
            alt=""
            className="object-fill h-[30vh] md:h-[80vh] w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroPage;
