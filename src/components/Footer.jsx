import React, { useState, useEffect } from "react";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Link as Links, animateScroll as scroll } from "react-scroll";
import { ImLinkedin2, ImFacebook } from "react-icons/im";
import { BsYoutube } from "react-icons/bs"; // BsTwitter
import { FaRegCopyright } from "react-icons/fa";
import PrivacyPolicy from "./Landingpage/PrivacyPolicy";
import { SiHandshake } from "react-icons/si";
import { FaRegLifeRing } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

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
    <div className=''>
      <div className=' '>
        <div className=' mx-auto py-12 lg:px-10  md:px-6 px-4  bg-white'>
          {isOpen && <PrivacyPolicy closePopup={closePopup} />}
          <div className=''>
            <div className=' py-12'>
              <div className=' w-full mx-auto hover:bg-gradient-to-r from-customYellow to-customBlue text-lg bg-yellow-500  text-white font-medium  transition duration-300  lg:px-10 md:px-6 px-4 py-7'>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1'>
                  <div
                    data-aos='zoom-in-up'
                    data-aos-once='false'
                    className='text-white '
                  >
                    <img
                      src='/moveNPackLogo.jpg'
                      alt='logo'
                      className='h-20 rounded'
                    />
                    <p className='text-base pt-7 pr-4'>
                      Shop No. 7, Al Fahidi Round About, Bur Dubai (Sharaf DG
                      Metro station)
                    </p>
                  </div>
                  <div
                    data-aos='fade-down'
                    data-aos-easing='linear'
                    data-aos-once='false'
                    className='lg:pt-0 text-white md:pt-0 pt-8'
                  >
                    <p className='text-lg font-semibold e '>Support</p>
                    <ul className='pt-3'>
                      <li className='pt-4'>
                        <Link
                          onClick={() => scroll.scrollToTop()}
                          activeClass='active'
                          to='/'
                          offset={-30}
                          duration={500}
                          smooth={true}
                        >
                          Home
                        </Link>
                      </li>
                      <li className='pt-4'>
                        <Link
                          activeClass='active'
                          to='/contact'
                          offset={-30}
                          duration={500}
                          smooth={true}
                        >
                          Contact Us
                        </Link>
                      </li>
                      <li className='pt-4'>
                        <Link to='/about' className='text-base e'>
                          About Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div
                    data-aos='fade-down'
                    data-aos-once='false'
                    data-aos-easing='linear'
                    className='lg:pt-0 md:pt-0 pt-8'
                  >
                    <p className='text-lg font-semibold e text-white '>Legal</p>
                    <ul className='pt-3'>
                      <li className='pt-4'>
                        <Link
                          onClick={openPopup}
                          className='text-base e text-white'
                        >
                          Privacy Policy
                        </Link>
                      </li>
                      <li className='pt-4'>
                        <Link
                          to='/packingTips'
                          className='text-base e text-white'
                        >
                          Packing Tips
                        </Link>
                      </li>
                      <li className='pt-4'>
                        <Link
                          to='/TermsOfService'
                          className='text-base e text-white'
                        >
                          Terms Of Service
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className='lg:pt-0 md:pt-16 pt-8 lg:flex-col md:flex block lgLw-0 md:w-96 lg:justify-start md:justify-between'>
                    <div
                      data-aos='zoom-out'
                      data-aos-once='false'
                      className='lg:pt-10 md:pt-0 pt-8 cursor-pointer'
                    >
                      <p className='text-lg font-semibold e text-white'>
                        Follow Us
                      </p>
                      <div className='flex gap-4 pt-4'>
                        <div className='my-auto '>
                          <ul className='flex gap-4 '>
                            <li className='w-10 hover:scale-[1.55]  duration-500 h-10 rounded-full bg-[#0077B5]  flex justify-center content-center items-center text-white '>
                              <Link to='' className='mx-5'>
                                <ImLinkedin2 className='' />
                              </Link>
                            </li>
                            <li className='hover:scale-[1.55]  duration-500 w-10 h-10 rounded-full bg-[#3b5998]  flex justify-center items-center text-white '>
                              <Link to='' className='mx-5'>
                                <ImFacebook className='' />
                              </Link>
                            </li>
                            <li className='hover:scale-[1.55]  duration-500 w-10 h-10 rounded-full bg-[#c4302b]  flex justify-center items-center text-white '>
                              <Link to='' className='mx-5 '>
                                <BsYoutube className='text-white' />
                              </Link>
                            </li>
                            <li
                              className='hover:scale-[1.55]  duration-500 w-10 h-10 rounded-full   flex justify-center items-center text-white'
                              style={{
                                background:
                                  "radial-gradient(circle farthest-corner at 35% 90%, #fec564, transparent 50%), radial-gradient(circle farthest-corner at 0 140%, #fec564, transparent 50%), radial-gradient(ellipse farthest-corner at 0 -25%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 20% -50%, #5258cf, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 0, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 60% -20%, #893dc2, transparent 50%), radial-gradient(ellipse farthest-corner at 100% 100%, #d9317a, transparent), linear-gradient(#6559ca, #bc318f 30%, #e33f5f 50%, #f77638 70%, #fec66d 100%)",
                              }}
                            >
                              <Link to='' className=' '>
                                <FaInstagramSquare className='text-white' />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex items-center lg:justify-between md:justify-center lg:gap-0 md:gap-10 gap-3 flex-wrap lg:pt-32 md:pt-16 pt-16'>
                  <div
                    data-aos='fade-down'
                    data-aos-once='false'
                    className='flex md:flex-row flex-col gap-6'
                  >
                    <p className='text-sm  text-white '>
                      +971-44471565 +971-542436037(Support)
                    </p>

                    <p className='text-sm  text-white'>
                      movenpackdxb@gmail.com
                    </p>
                  </div>
                  <div
                    data-aos='fade-down'
                    data-aos-once='false'
                    className='flex lg:gap-4 gap-2 lg:pt-0 md:pt-0  lg:pr-20'
                  >
                    <FaRegCopyright />
                    <p className='text-sm e text-white'>
                      Copyright : 2024, MoveNPack. All Rights Reserved.
                    </p>
                  </div>
                </div>
                <div
                  data-aos='fade-down'
                  data-aos-once='false'
                  className='flex justify-end lg:gap-4 gap-2 lg:pt-0 md:pt-0  lg:pr-20'
                >
                  <p className='text-sm e text-white'>
                    <a href='https://theopensoft.com' target='_blank'>
                      @developedBy:TheOpenSoft
                    </a>
                  </p>
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
