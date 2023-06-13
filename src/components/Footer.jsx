import React, { useState, useEffect } from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ImLinkedin2, ImFacebook } from "react-icons/im";
import { BsYoutube, BsTwitter } from "react-icons/bs";
import {FaRegCopyright} from "react-icons/fa"
import PrivacyPolicy from "./Landingpage/PrivacyPolicy";
import { motion } from "framer-motion";
import {ImCross} from "react-icons/im"
import {SiHandshake} from "react-icons/si"
import {FaRegLifeRing} from "react-icons/fa"
import AOS from "aos";
import "aos/dist/aos.css";
import { Button } from "react-scroll";



const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openPopup = () => {
    setIsOpen(true);
  };
  const closePopup = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    AOS.init();
  });
  return (
    <div id="contact" className="pt-[3%] ">
      <div className=" px-4">
        <div className=" mx-auto py-12 lg:px-20  md:px-6 px-4  bg-white">
          {/* {  lg:max-w-[1440px] md:max-w-[744px] max-w-[375px]} */}
          <div className="flex lg:flex-row md:flex-col flex-col gap-8 w-full">
            <div
              data-aos="zoom-in-up"
              data-aos-duration="3000"
              className="w-full"
            >
              <img
                className=" w-full mt-5 object-cover "
                src="/contactus1.png"
                alt="map-lg"
              />
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-duration="5000"
              className="lg:max-w-[624px] w-full"
            >
              <div className="text-5xl font-bold text-center mx-1 md:mx-0 bg-gradient-to-r from-teal-500 via-blue-500 to-pink-500 text-transparent bg-clip-text ">
                Contact Us
              </div>
              <div className="text-xl my-[2%] text-[#5b5b98] font-medium text-center">
                We are always here to help in whatever way we can
              </div>
              <input
                className="w-full bg-transparent  p-2 pl-4 border border-gray-300 outline-none"
                type="text"
                name
                id
                placeholder="Full Name"
              />
              <input
                className="w-full bg-transparent p-2 pl-4 border border-gray-300 outline-none mt-6 mb-6"
                type="text"
                name
                id
                placeholder="Email Address"
              />
              <input
                className="w-full bg-transparent p-2 pl-4 border border-gray-300 outline-none mb-6"
                type="text"
                name
                id
                placeholder="Phone Number"
              />
              <textarea
                className="border border-gray-300 bg-transparent p-3 pl-4 outline-none  lg:block md:hidden hidden resize-none w-full mb-10"
                name
                id
                cols={0}
                rows={5}
                placeholder="Type your message here."
                defaultValue={""}
              />
              <textarea
                className="border border-gray-300 bg-transparent p-3 pl-4 outline-none mb-4 lg:hidden md:block hidden resize-none w-full"
                name
                id
                cols={0}
                rows={5}
                placeholder="Type your message here."
                defaultValue={""}
              />
              <textarea
                className="border border-gray-300 bg-transparent p-3 pl-4 outline-none mb-4 lg:hidden md:hidden block resize-none w-full"
                name
                id
                cols={0}
                rows={5}
                placeholder="Type your message here."
                defaultValue={""}
              />

              <button className="hover:bg-gradient-to-r bg-[#071343] px-8 text-lg py-3 hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 text-white font-medium rounded transition duration-300 ">
                Send
              </button>
            </div>
          </div>
          {isOpen && <PrivacyPolicy closePopup={closePopup} />}
          <div className="">
            <div className=" py-12">
              <div className=" w-full mx-auto  bg-[#071343] text-lg   text-white font-medium  transition duration-300  lg:px-10 md:px-6 px-4 py-7">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1">
                  <div data-aos="zoom-in-up" className="text-white ">
                    <p className="text-lg font-semibold e ">ULTRANET</p>
                    <p className="text-base pt-7 pr-4">
                      GROUND FLOOR, H NO-58-A, KH NO 28/19, GALI NO 4, RADHEY
                      SHYAM PARK, East Delhi, Delhi, 110051.
                    </p>
                  </div>
                  <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="lg:pt-0 text-white md:pt-0 pt-8"
                  >
                    <p className="text-lg font-semibold e ">Support</p>
                    <ul className="pt-3">
                      <li className="pt-4">
                        <Link
                          to="/"
                          href="javascript:void(0)"
                          className="text-base e "
                        >
                          Home
                        </Link>
                      </li>
                      <li className="pt-4">
                        <Link
                          activeClass="active"
                          to="contact"
                          className="text-base e "
                        >
                          Contact Us
                        </Link>
                      </li>
                      <li className="pt-4">
                        <Link to="/AboutUs" className="text-base e">
                          About Us
                        </Link>
                      </li>
                      <li className="pt-4">
                        <Link to="/FAQs" className="text-base e text-white">
                          FAQs
                        </Link>
                      </li>
                      <li className="pt-4">
                        <Link
                          to="/FtthNetwork"
                          className="text-base e text-white"
                        >
                          FTTH Network
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div
                    data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500"
                    className="lg:pt-0 md:pt-0 pt-8"
                  >
                    <p className="text-lg font-semibold e text-white ">Legal</p>
                    <ul className="pt-3">
                      <li className="pt-4">
                        <Link
                          onClick={openPopup}
                          className="text-base e text-white"
                        >
                          Privacy Policy
                        </Link>
                      </li>
                      <li className="pt-4">
                        <Link
                          to="/TermsAndConditions"
                          className="text-base e text-white"
                        >
                          Terms & Conditions
                        </Link>
                      </li>
                      <li className="pt-4">
                        <Link
                          to="/TermsOfService"
                          className="text-base e text-white"
                        >
                          Terms Of Service
                        </Link>
                      </li>
                      <li className="pt-4">
                        <Link
                          to="/FairUsePolicy"
                          className="text-base e text-white"
                        >
                          Fair Use Policy
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="lg:pt-0 md:pt-16 pt-8 lg:flex-col md:flex block lgLw-0 md:w-96 lg:justify-start md:justify-between">
                    <div data-aos="zoom-in-down">
                      <p className="text-lg font-semibold e text-white">
                        Features
                      </p>
                      <div className="flex gap-3 pt-4 cursor-pointer">
                        <FaRegLifeRing />
                        <p className="text-base e text-white">Careers</p>
                      </div>
                      <Link
                        to="/Partner"
                        className="flex gap-3 pt-4 cursor-pointer"
                      >
                        <SiHandshake />
                        <p className="text-base e text-white"> Partner</p>
                      </Link>
                    </div>
                    <div
                      data-aos="zoom-out"
                      className="lg:pt-10 md:pt-0 pt-8 cursor-pointer"
                    >
                      <p className="text-lg font-semibold e text-white">
                        Follow Us
                      </p>
                      <div className="flex gap-4 pt-4">
                        <div className="my-auto ">
                          <ul className="flex  ">
                            <li className="w-10 hover:scale-[1.55]  duration-500 h-10 rounded-full bg-[#0077B5]  flex justify-center content-center items-center text-white m-2">
                              <Link to="" className="mx-5">
                                <ImLinkedin2 className="" />
                              </Link>
                            </li>
                            <li className="hover:scale-[1.55]  duration-500 w-10 h-10 rounded-full bg-[#3b5998]  flex justify-center items-center text-white m-2">
                              <Link to="" className="mx-5">
                                <ImFacebook className="" />
                              </Link>
                            </li>
                            <li className="hover:scale-[1.55]  duration-500 w-10 h-10 rounded-full bg-[#00acee]  flex justify-center items-center text-white m-2">
                              <Link to="" className="mx-5">
                                <BsTwitter className="" />
                              </Link>
                            </li>
                            <li className="hover:scale-[1.55]  duration-500 w-10 h-10 rounded-full bg-[#c4302b]  flex justify-center items-center text-white m-2">
                              <Link to="" className="mx-5 ">
                                <BsYoutube className="text-white" />
                              </Link>
                            </li>
                            <li
                              className="hover:scale-[1.55]  duration-500 w-10 h-10 rounded-full   flex justify-center items-center text-white m-2"
                              style={{
                                background:
                                  "radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)",
                              }}
                            >
                              <Link to="" className="mx-5 ">
                                <FaInstagramSquare className="text-white" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center lg:justify-between md:justify-center lg:gap-0 md:gap-10 gap-3 flex-wrap lg:pt-32 md:pt-16 pt-16">
                  <div
                    data-aos="fade-down"
                    className="flex md:flex-row flex-col gap-6"
                  >
                    <p className="text-sm  text-white ">+91-7065000280</p>
                    <p className="text-sm  text-white ">+91-7065000960</p>
                    <p className="text-sm  text-white">
                      Corp.support@Ultranet.co.in
                    </p>
                  </div>
                  <div
                    data-aos="fade-down"
                    className="flex lg:gap-4 gap-2 lg:pt-0 md:pt-0  lg:pr-20"
                  >
                    <FaRegCopyright />
                    <p className="text-sm e text-white">
                      Copyright : 2021, UltraNet. All Rights Reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
