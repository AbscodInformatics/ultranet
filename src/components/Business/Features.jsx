import React, { useState, useEffect } from "react";
import { MdOutlineSpeed } from "react-icons/md";
import { BsFiles, BsSpeedometer } from "react-icons/bs";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { HiUserGroup } from "react-icons/hi";
import { AiOutlinePercentage } from "react-icons/ai";
import { RiArrowUpDownFill } from "react-icons/ri";
import { BiPhoneCall } from "react-icons/bi";
import { SiTimescale } from "react-icons/si";
import { SlBadge } from "react-icons/sl";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init();
  });
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <div
        data-aos='zoom-in-down'
        data-aos-once='false'
        className='mx-auto  mb-[5%] shadow rounded w-full'
      >
       
      </div>
      {/* Card code block end */}
    </>
  );
};

export default Features;
