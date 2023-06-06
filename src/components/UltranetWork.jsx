import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const UltranetWork = () => {
   useEffect(() => {
     AOS.init();

     // Clean up the AOS instance when the component unmounts
     return () => {
       AOS.refresh();
     };
   });
  return (
    <div data-aos="zoom-in-up" id="work" className="mx-[8%] md:mx-0">
      <img src="/BroadbandBg1.png" alt="" className="mt-[5%]" />
    </div>
  );
};

export default UltranetWork;
