import React from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
      AOS.init();
  return (
    <div
      data-aos="zoom-in-up"
      data-aos-delay="8000"
      data-aos-once="false"
      className=" py-[5%]  "
    >
      <div className=" flex justify-center gap-5 flex-col items-center">
        <div
          data-aos="zoom-in-up"
          data-aos-delay="8000"
          data-aos-once="false"
          className="text-5xl font-bold text-center mx-1 md:mx-0 bg-gradient-to-r from-teal-500 via-blue-500 to-pink-500 text-transparent bg-clip-text "
        >
          HOW ULTRANET IS DIFFERENT
        </div>
        <div
          data-aos="zoom-in-up"
          data-aos-delay="8000"
          data-aos-once="false"
          className="text-xl text-justify font-semibold mt-[2%] mx-[8%]"
        >
          As <h2 className='inline font-bold'>India's finest broadband service provider</h2>, we are committed
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
    </div>
  );
}

export default Features