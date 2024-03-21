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
      image: "/banner.jpg",
      heading: "PRICE AND EFFICIENCY OF EXPERT RELOCATION SERVICE",
      subheading: "fiber plan anytime ",
      title:
        "According to the pricing of relocation companies in Dubai, a financial strategy is essential, and this is one aspect that characterises the final decision before transfer.",
    },
    {
      image: "/card3.avif",
      heading: "Expert Relocation Company in Dubai",
      subheading: "PLAN NEAR YOU ",
      title:
        "Our relocation company in Dubai needs to know all the details of your project to give you a price according to your situation.",
    },
    {
      image: "/servicesBanner.jpg",
      heading: "BEST PACKERS AND MOVERS IN UAE ",
      subheading: " plan near you",
      title:
        "Best movers and packers in Dubai are successful in the implementation of a brand for clients in Dubai, Abu-Dhabi and the Middle East. ",
    },
  ];

  const handleSlideChange = (swiper) => {
    setCurrentSlideIndex(swiper.realIndex);
  };

  return (
    <div className="w-full">
      <Swiper
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        slidesPerView={1}
        effect={"fade"}
        className="mySwiper"
        onSlideChangeTransitionEnd={handleSlideChange}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ scale: 1.1 }}
              animate={{
                opacity: 1,
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
                  scale: currentSlideIndex === index ? 2 : 5.1,
                }}
                initial={{ scale: 1.1 }}
                animate={{
                  scale: currentSlideIndex === index ? 1.2 : 1.1,
                }}
                transition={{ duration: 5 }}
              />
            </motion.div>
            {/* Text Content */}
            <div className="absolute top-1/2 md:left-1/3 left-1/2 md:w-[40%] md:text-start text-center  transform -translate-x-1/2 -translate-y-1/2 text-white">
              <h1 className="md:text-5xl text-xl mx-auto mt-4  md:my-3 uppercase font-bold">
                {slide.heading}
              </h1>
              <h1 className="md:text-3xl text-lg md:my-3 font-bold">
                {slide.subheading}
              </h1>
              <p className="md:text-xl text-base font-semibold">
                {slide.title}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroPage;
