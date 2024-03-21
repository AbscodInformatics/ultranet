import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { Link as Links, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className='bg-white shadow fixed z-50 w-full  '>
      <div className='container mx-auto px-4 py-1 md:flex md:items-center md:justify-between '>
        <div className='flex justify-between items-center md:ml-[3%]'>
          <Link onClick={() => scroll.scrollToTop()} to='/'>
            <img src='moveNPackLogo.jpg' className='h-[66px] md:w-40 ' />
          </Link>
          <button className='md:hidden focus:outline-none' onClick={toggleMenu}>
            {isMenuOpen ? <MdClose size={30} /> : <BiMenuAltRight size={30} />}
          </button>
        </div>

        <div
          onClick={closeMenu}
          className={`md:flex items-center justify-around gap-10 md:mr-[3%] ${
            isMenuOpen ? "block" : "hidden"
          } md:block`}
        >
          <ul className='md:flex gap-10 mt-[5%] md:mt-0 md:justify-end'>
            <li onClick={() => scroll.scrollToTop()}>
              <Link
                to='/'
                className='focus:outline-none text-base border-transparent font-bold  cursor-pointer h-full flex items-center hover:text-customYellow  text-customBlue tracking-normal border-b-2'
              >
                Home
              </Link>
            </li>
            <li onClick={() => scroll.scrollToTop()}>
              <Link
                to='/about'
                className='focus:outline-none text-base border-transparent font-bold  cursor-pointer h-full flex items-center hover:text-customYellow  text-customBlue tracking-normal border-b-2'
              >
                About Us
              </Link>
            </li>
            <li onClick={() => scroll.scrollToTop()}>
              <Link
                to='/services'
                className='focus:outline-none text-base border-transparent font-bold  cursor-pointer h-full flex items-center hover:text-customYellow  text-customBlue tracking-normal border-b-2'
              >
                {" "}
                Our Services
              </Link>
            </li>
            {/*  <li onClick={() => scroll.scrollToTop()}>
              <Link
                to='/FAQs'
                className='focus:outline-none text-base border-transparent font-bold  cursor-pointer h-full flex items-center hover:text-customYellow  text-customBlue tracking-normal border-b-2'
              >
                FAQ's
              </Link>
            </li>*/}

            {/*<li onClick={() => scroll.scrollToTop()}>
            <Link
              to="/myUltranet"
              className="focus:outline-none text-base border-transparent font-bold  cursor-pointer h-full flex items-center hover:text-customYellow  text-customBlue tracking-normal border-b-2"
            >
              My Ultranet
            </Link>
        </li>*/}
            <li onClick={() => scroll.scrollToTop()}>
              <Link
                to={"/contact"}
                // activeClass="active"
                // offset={-20}
                // duration={1500}
                // smooth={true}
                className='  focus:outline-none text-base border-transparent font-bold  cursor-pointer h-full md:flex items-center hover:text-customYellow  text-customBlue tracking-normal border-b-2'
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <div className='md:flex items-center mt-4 md:mt-0 '>
            <Link to={"https://web.whatsapp.com/"} target='_blank'>
              <button className='hover:bg-gradient-to-r from-customYellow to-customBlue bg-customYellow px-5 text-lg py-2  text-white font-medium rounded-full transition duration-300'>
                Request a Free Quote
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
