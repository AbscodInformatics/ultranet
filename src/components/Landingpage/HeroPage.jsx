import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper";
import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination, Autoplay]);

const HeroPage = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const slides = [
    {
      image: "/b11.jpg",
      heading: "ULTRA SMART FIBER",
      subheading: "fiber plan anytime ",
      title:
        "Stream, Game, Repeat Get Lost in a World of Blazing-Fast Internet",
    },
    {
      image: "/b12.jpg",
      heading: "upgrade your ultranet ",
      subheading: "fiber plan anytime ",
      title: "Just by paying the balance amount",
    },
    {
      image: "/b13.jpg",
      heading: "India's fastest Fiber ",
      subheading: " plan near you",
      title:
        "Stream videos, work and learn online, connect with anyone anywhere, and do much more with UltraNet",
    },
  ];

  const handleSlideChange = (swiper) => {
    setCurrentSlideIndex(swiper.realIndex);
  };

  return (
    <div>
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        slidesPerView={1}
        effect={"fade"}
        className="mySwiper"
        onSlideChangeTransitionEnd={handleSlideChange} // Use onSlideChangeTransitionEnd instead of onSlideChange
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{
                scale: currentSlideIndex === index ? 1.2 : 1.1,
              }}
              transition={{ duration: 1 }}
              className="h-[30vh] md:h-[80vh] w-full relative overflow-hidden"
            >
              {/* Background Image */}
              <motion.div
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "absolute",
                  top: "-10%",
                  left: "-10%",
                  right: "-10%",
                  bottom: "-10%",
                  zIndex: "-1",
                  scale: currentSlideIndex === index ? 1.2 : 1.1,
                }}
                initial={{ scale: 1.1 }}
                animate={{
                  scale: currentSlideIndex === index ? 1.2 : 1.1,
                }}
                transition={{ duration: 1 }}
              />

              {/* Text Content */}
              <div className="absolute top-1/2 md:left-1/3 left-1/2 md:w-[40%] md:text-start text-center  transform -translate-x-1/2 -translate-y-1/2 text-white">
                <h1 className="md:text-5xl text-xl mx-auto  md:my-3 uppercase font-bold">
                  {slide.heading}
                </h1>
                <h1 className="md:text-3xl text-lg md:my-3 font-bold">{slide.subheading}</h1>
                <p className="md:text-xl text-base font-semibold">{slide.title}</p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroPage;
