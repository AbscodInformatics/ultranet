import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  AOS.init();
  return (
      <div className=" flex justify-center py-[5%] gap-5 flex-col items-center">
        <div className="text-5xl leading-[60px] text-[#004281] tracking-[-0.04em]  font-[800] text-center mx-1 md:mx-0  ">
          HOW ULTRANET IS DIFFERENT
        </div>
        <div className="text-xl font-medium leading-8 text-[#818487] text-justify  mt-[2%] mx-[8%]">
          As <b>India's finest broadband service provider</b>, we are committed
          to delivering an unparalleled internet experience with
          <b> high-speed wifi connections</b>. Unlike other services, we use an
          all-fiber setup, ensuring no speed loss or attenuation issues caused
          by copper wiring. Our focus is on providing seamless, high-quality
          internet to valued customers through our cutting-edge fiber optic
          technology. With our top-notch <b> wifi broadband service</b>, you can
          enjoy HD-quality video streaming, smooth online gaming, and efficient
          remote work. Choose us as your <b> internet service provider</b> to
          unlock the full potential of the digital world and experience the
          best-in-class broadband service right at your home or business. Join
          us today and take your online experience to the next level.
        </div>
      </div>
  );
};

export default Features;
