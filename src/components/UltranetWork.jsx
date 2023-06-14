import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const UltranetWork = () => {
     AOS.init();
  return (
    <div data-aos="zoom-in-up" data-aos-once="false" id="work" className="mx-[8%] md:mx-0">
      <img src="/BroadbandBg2.png" alt="" className="mt-[5%]" />
    </div>
  );
};

export default UltranetWork;
