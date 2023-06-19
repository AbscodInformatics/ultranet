import React, { useState, useEffect } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const ArrowUpAndDown = () => {
  const [showArrow, setShowArrow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowArrow(true);
    } else {
      setShowArrow(false);
    }
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {showArrow && (
        <FaArrowAltCircleUp size={40}
          onClick={scrollToTop}
          className="fixed right-[7%] z-10 md:right-[4%] top-[50%] bg-[#071343] text-white rounded-full transform -translate-y-1/2 animate-bounce cursor-pointer"
        />
      )}
    </div>
  );
};

export default ArrowUpAndDown;
