import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const HeroPage = () => {
  return (
    <div >
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
            src="/banner31.png"
            alt=""
            className="object-fill h-[30vh] md:h-[80vh] w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/banner21.png"
            alt=""
            className="object-fill h-[30vh] md:h-[80vh] w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroPage;
