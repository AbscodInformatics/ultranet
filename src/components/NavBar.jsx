import React, { useState } from "react";
import {BsRouterFill} from "react-icons/bs"
import { IoMdArrowDropup } from "react-icons/io";
import { Link } from "react-router-dom";

const NavBar = () => {
  let arr = [true, false, false, false, false, false];
  const [style, setStyle] = useState(arr);
  const [dropDown, setDropDown] = useState(true);
  const [text, setText] = useState("");
 const [showDialog, setShowDialog] = useState(false);
  const [showDialog1, setShowDialog1] = useState(false);
   const [showDialog2, setShowDialog2] = useState(false);
  
  const selected = (props) => {
    let newArr = [...arr];
    for (let i = 0; i < newArr.length; i++) {
      newArr[i] = false;
    }
    newArr[props] = true;
    setStyle(newArr);
  };
  const handleHover = () => {
    setShowDialog(true);
  };
    const handleHover1 = () => {
      setShowDialog1(true);
    };

      const handleHover2 = () => {
        setShowDialog2(true);
      };


  const handleLeave = () => {
    setShowDialog(false);
  };
  const handleLeave1 = () => {
    setShowDialog1(false);
  };
  const handleLeave2 = () => {
    setShowDialog2(false);
  };

  const setSelectedText = (txt) => {
    setText(txt);
    setDropDown(true);
  };

  return (
    <div className="fixed w-full z-10">
      <div className="2xl:container bg-white 2xl:mx-auto">
        <div className="rounded bg-white shadow-lg py-2 px-7">
          <nav className="flex justify-between   md:justify-around items-center ">
            <div className="flex items-center  lg:pr-16 pr-6">
              <Link to="/">
                <img src="ulranetlogo.png" className="w-36 md:w-40 " />
              </Link>
            </div>
            <ul className="pr-12 md:flex items-center justify-evenly gap-10 h-full hidden">
              <li>
                <Link
                  to="/"
                  onMouseEnter={handleHover1}
                  onMouseLeave={handleLeave1}
                  className="focus:outline-none text-lg border-transparent font-medium cursor-pointer h-full flex items-center hover:text-[#e10000]  text-black tracking-normal border-b-2"
                >
                  Home
                </Link>
                {/* {showDialog1 && (
                  <div className="absolute flex mt-5 justify-evenly text-lg px-10 py-7 w-[500px] bg-white p-4 rounded-3xl shadow-lg">
                    <div className="-mt-10 text-black  -ml-10">
                      <IoMdArrowDropup size={30} />
                    </div>
                    <p className="flex items-center gap-3">
                      <BsRouterFill /> Delhi
                    </p>
                    <p>|</p>
                    <p className="flex items-center gap-3">
                      {" "}
                      <BsRouterFill />
                      Rest Of India
                    </p>
                  </div>
                )} */}
              </li>
              <li>
                <Link
                  to="/Offers"
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                  className="focus:outline-none text-lg border-transparent font-medium cursor-pointer h-full flex items-center hover:text-[#e10000]  text-black tracking-normal border-b-2 "
                >
                  Offers
                </Link>
                {/* {showDialog && (
                  <div className="absolute flex mt-5 justify-evenly text-lg px-10 py-7 w-[500px] bg-white p-4 rounded-3xl shadow-lg">
                    <div className="-mt-10 text-black  -ml-10">
                      <IoMdArrowDropup size={30} />
                    </div>
                    <p className="flex items-center gap-3">
                      <BsRouterFill /> Delhi
                    </p>
                    <p>|</p>
                    <p className="flex items-center gap-3">
                      {" "}
                      <BsRouterFill />
                      Rest Of India
                    </p>
                  </div>
                )} */}
              </li>

              <li>
                <Link
                  to="/Business"
                  onMouseEnter={handleHover2}
                  onMouseLeave={handleLeave2}
                  className="focus:outline-none text-lg border-transparent font-medium cursor-pointer h-full flex items-center hover:text-[#e10000]  text-black tracking-normal border-b-2"
                >
                  Business
                </Link>
                {/* {showDialog2 && (
                  <div className="absolute flex mt-5 justify-evenly text-lg px-10 py-7 w-[500px] bg-white p-4 rounded-3xl shadow-lg">
                    <div className="-mt-10 text-black  -ml-10">
                      <IoMdArrowDropup size={30} />
                    </div>
                    <p className="flex items-center gap-3">
                      <BsRouterFill /> Business Broadband
                    </p>
                    <p>|</p>
                    <p className="flex items-center gap-3">
                      {" "}
                      <BsRouterFill />
                      Leased Line's Plans
                    </p>
                  </div>
                )} */}
              </li>
              <li>
                <Link
                  to="/FAQs"
                  className="focus:outline-none text-lg border-transparent font-medium cursor-pointer h-full flex items-center hover:text-[#e10000]  text-black tracking-normal border-b-2"
                >
                  FAQ's
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="contact"
                  // spy={true}
                  // smooth={true}
                  // offset={-200}
                  duration={500}
                  className="focus:outline-none text-lg border-transparent font-medium cursor-pointer h-full flex items-center hover:text-[#e10000]  text-black tracking-normal border-b-2"
                >
                  How UltraNet Works
                </Link>
              </li>
            </ul>
            <Link
              activeClass="active"
              spy={true}
              smooth={true}
              offset={150}
              duration={500}
              to="contact"
            >
              <button className="text-base md:text-lg font-semibold bg-[#071343] hover:to-yellow-500  hover:via-red-500 hover:bg-gradient-to-r hover:from-pink-500  px-5 py-1  md:py-2 text-center uppercase transition duration-500 ease-in-out bg-no-repeat bg-size-200% text-white  shadow-lg rounded-lg">
                Contact Us
              </button>
            </Link>
          </nav>
          {/* for smaller devcies */}
          <div className="block md:hidden  mt-5 ">
            <div
              onClick={() => setDropDown(!dropDown)}
              className="cursor-pointer px-4 py-3 text-black bg-[#e10000] rounded flex justify-between items-center w-full"
            >
              <div className="flex space-x-2">
                <span
                  id="s1"
                  className={`${
                    text.length != 0 ? "" : "hidden"
                  } font-semibold text-lg leading-3`}
                >
                  Ultranet
                </span>
                <p
                  id="textClicked"
                  className="font-normal text-lg leading-3 focus:outline-none hover:bg-gray-800 duration-100 cursor-pointer "
                >
                  {text ? text : "Home"}
                </p>
              </div>
              <svg
                id="ArrowSVG"
                className={`${
                  dropDown ? "" : "rotate-180"
                } transform duration-100`}
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9L12 15L18 9"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className=" relative">
              <ul
                id="list"
                className={`${
                  dropDown ? "hidden" : "block"
                } font-normal text-base leading-4 absolute top-2  w-full rounded shadow-md`}
              >
                <li
                  // onClick={() => setSelectedText("Business")}
                  className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
                >
                  <Link to="/Business">Business</Link>
                </li>
                <li
                  // onClick={() => setSelectedText("Offers")}
                  className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
                >
                  <Link to="/Offers">Offers</Link>
                </li>
                <li
                  // onClick={() => setSelectedText(" FAQ's")}
                  className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
                >
                  <Link to="/FAQs">FAQ's</Link>
                </li>
                <li
                  // onClick={() => setSelectedText(" How To UltraNet Work's")}
                  className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
                >
                  <Link
                    activeClass="active"
                    to="contact"
                    offset={-200}
                    duration={500}
                  >
                    {" "}
                    How UltraNet Works
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NavBar;
