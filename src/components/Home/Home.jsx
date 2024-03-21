import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <div>
      <div
        className='bg-black  max-w-[100vw] md:mx-auto h-[20vh] md:h-[30vh] lg:h-[85vh] bg-contain bg-no-repeat'
        style={{
          backgroundImage: `url("/servicesBanner.jpg")`,
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

export default Home;
