import React, { useState } from "react";
import {BsRouterFill} from "react-icons/bs"
import { IoMdArrowDropup } from "react-icons/io";

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
    <div>
      <div className="bg-white h-16">
        <div className="bg-[#e10000] h-1"></div>
        <ul className="pr-12 md:flex items-center justify-center h-full hidden">
          <li>
            <a
              href=""
              className="focus:outline-none  border-transparent font-medium cursor-pointer h-full flex items-center hover:text-[#e10000] text-lg text-gray-800 tracking-normal border-b-2 border-white"
            >
              New Connetion
            </a>
          </li>
          <li>
            <a
              href=""
              className="focus:outline-none border-b-2 border-transparent font-medium cursor-pointer h-full flex items-center hover:text-[#e10000] text-lg text-gray-800 mx-6 tracking-normal"
            >
              Speed Test
            </a>
          </li>
          <li>
            <a
              href=""
              className="focus:outline-none border-b-2 border-transparent font-medium cursor-pointer h-full flex items-center hover:text-[#e10000] text-lg text-gray-800 mr-6 tracking-normal"
            >
              Contact Us
            </a>
          </li>
          <li>
            <a
              href=""
              className="focus:outline-none border-b-2 border-transparent font-medium cursor-pointer h-full flex items-center hover:text-[#e10000] text-lg text-gray-800 mr-6 tracking-normal"
            >
              My Account
            </a>
          </li>
          <li>
            <a
              href=""
              className="focus:outline-none border-b-2 border-transparent font-medium cursor-pointer h-full flex items-center hover:text-[#e10000] text-lg text-gray-800 mr-6 tracking-normal"
            >
              Quick Pay!
            </a>
          </li>
        </ul>
      </div>
      <div className="2xl:container bg-black 2xl:mx-auto">
        <div className="rounded bg-black shadow-lg py-5 px-7">
          <nav className="flex justify-between ">
            <div className="flex items-center  lg:pr-16 pr-6">
              <img src="/UltranetLogo.png" className="w-40 " />
            </div>
            {/* For medium and plus sized devices */}
            <ul className="pr-12 md:flex items-center  gap-10 h-full hidden">
              <li>
                <a
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                  className="focus:outline-none text-lg border-transparent font-medium cursor-pointer h-full flex items-center hover:text-[#e10000]  text-white tracking-normal border-b-2 border-white"
                >
                  Offers
                </a>
                {showDialog && (
                  <div className="absolute flex mt-5 justify-evenly text-lg px-10 py-7 w-[500px] bg-white p-4 rounded-3xl shadow-lg">
                    <div className="-mt-10 text-white  -ml-10">
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
                )}
              </li>
              <li>
                <a
                  href=""
                  onMouseEnter={handleHover1}
                  onMouseLeave={handleLeave1}
                  className="focus:outline-none border-b-2 border-transparent font-medium cursor-pointer h-full flex items-center hover:text-[#e10000] text-lg text-white mx-6 tracking-normal"
                >
                  Home
                </a>
                {showDialog1 && (
                  <div className="absolute flex mt-5 justify-evenly text-lg px-10 py-7 w-[500px] bg-white p-4 rounded-3xl shadow-lg">
                    <div className="-mt-10 text-white  -ml-10">
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
                )}
              </li>
              <li>
                <a
                  href=""
                  onMouseEnter={handleHover2}
                  onMouseLeave={handleLeave2}
                  className="focus:outline-none border-b-2 border-transparent font-medium cursor-pointer h-full flex items-center hover:text-[#e10000] text-lg text-white mr-6 tracking-normal"
                >
                  Business
                </a>
                {showDialog2 && (
                  <div className="absolute flex mt-5 justify-evenly text-lg px-10 py-7 w-[500px] bg-white p-4 rounded-3xl shadow-lg">
                    <div className="-mt-10 text-white  -ml-10">
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
                )}
              </li>
              <li>
                <a
                  href=""
                  className="focus:outline-none border-b-2 border-transparent font-medium cursor-pointer h-full flex items-center hover:text-[#e10000] text-lg text-white mr-6 tracking-normal"
                >
                  FAQ's
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="focus:outline-none border-b-2 border-transparent font-medium cursor-pointer h-full flex items-center hover:text-[#e10000] text-lg text-white mr-6 tracking-normal"
                >
                  How To UltraNet Work's
                </a>
              </li>
            </ul>
          </nav>
          {/* for smaller devcies */}
          <div className="block md:hidden w-full mt-5 ">
            <div
              onClick={() => setDropDown(!dropDown)}
              className="cursor-pointer px-4 py-3 text-black bg-[white] rounded flex justify-between items-center w-full"
            >
              <div className="flex space-x-2">
                <span
                  id="s1"
                  className={`${
                    text.length != 0 ? "" : "hidden"
                  } font-semibold text-lg leading-3`}
                >
                  DashBoard:{" "}
                </span>
                <p
                  id="textClicked"
                  className="font-normal text-lg leading-3 focus:outline-none hover:bg-gray-800 duration-100 cursor-pointer "
                >
                  {text ? text : "Dashboard"}
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
                  onClick={() => setSelectedText("Arts")}
                  className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
                >
                  Offers
                </li>
                <li
                  onClick={() => setSelectedText("Space")}
                  className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
                >
                  Home
                </li>
                <li
                  onClick={() => setSelectedText("Game")}
                  className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
                >
                  Business
                </li>
                <li
                  onClick={() => setSelectedText("Utility")}
                  className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
                >
                  FAQ's
                </li>
                <li
                  onClick={() => setSelectedText("Cards")}
                  className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
                >
                  How To UltraNet Work's
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
