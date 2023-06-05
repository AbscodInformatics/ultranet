import React,{useState} from 'react'
import {MdOutlineSpeed} from "react-icons/md"
import { BsFiles, BsSpeedometer } from "react-icons/bs";
import {CgArrowsExchangeAlt} from "react-icons/cg"
// import { BsSpeedometer } from "react-icons/io";

const Feature = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>
      <div className="mx-auto my-[3%]  rounded w-full">
        <div className=" rounded-3xl hover:bg-gradient-to-r  hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 text-[white] py-3  bg-[#071343] dark:text-gray-100  text-center font-bold text-xl  mx-[7%] p-[5%]">
          <div className="py-6 xl:px-8 text-center lg:px-8 md:px-8 px-4 flex justify-between items-center">
            <p className="font-bold text-center text-lg xl:text-xl lg:text-xl md:text-xl text-white dark:text-gray-100">
              THIS GIVES YOU THE FOLLOWING CLEAR BENEFITS WHEN YOU ARE CONNECTED
              WITH ULTRANET:
            </p>
          </div>

          <div className="p-5 grid grid-cols-2 gap-8 rounded mb-6  dark:bg-gray-700">
            <div className="">
              <ul className="flex gap-5">
                <MdOutlineSpeed size={60} color="white" />
                <li className="mb-2 text-lg text-white dark:text-gray-400">
                  The fastest speeds – this ensures that your upload and
                  download speeds will not suffer no matter how much the load.
                </li>
              </ul>
            </div>
            <div className="">
              <ul className="flex gap-5">
                <BsFiles size={80} color="white" />
                <li className="mb-2 text-lg text-white dark:text-gray-400">
                  The data load capacity is the highest when you use full fiber
                  networks, because fiber optic lines have much more load
                  capacity compared to any other type of cabling. Also, the
                  attention is considerably very low.
                </li>
              </ul>
            </div>
            <div className="">
              <ul className="flex gap-5">
                <CgArrowsExchangeAlt size={80} color="white" />
                <li className="mb-2 text-lg text-white dark:text-gray-400">
                  Our broadband is not just fiber till the exchange, but fiber
                  to your premises- home or office. Now you can sit back and
                  relax as the network will never fail you.
                </li>
              </ul>
            </div>
            <div className="">
              <ul className="flex gap-5">
                <BsSpeedometer size={80} color="white" />
                <li className="mb-2 text-lg text-white dark:text-gray-400">
                  Our promise is the same for uploads and downloads – unmatched
                  speeds of 1GB at affordable prices. So now you can choose our
                  plans of up to 100 Mbps per connection and enjoy Internet
                  broadband services in a whole new way.
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <ul className="">
              <li className="mb-2 text-xl text-center text-white dark:text-gray-400">
                Our speeds and connectivity are not affected no matter how many
                connections are made to the network and how many active users
                are on the network using up the bandwidth.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Card code block end */}
    </>
  );
}
export default Feature