import React from "react";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className=" px-4">
        <div className=" mx-auto py-12 lg:px-20  md:px-6 px-4 lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] bg-white">
          <div className="flex lg:flex-row md:flex-col flex-col gap-8 w-full">
            <div className="w-full">
              <img
                className="lg:block md:hidden hidden w-full   "
                src="/contactus.png"
                alt="map-lg"
              />
              <img
                className="lg:hidden md:block hidden"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/mp09.png"
                alt="map-md"
              />
              <img
                className="lg:hidden md:hidden block"
                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sm888.png"
                alt="map-sm"
              />
            </div>
            <div className="lg:max-w-[624px] w-full">
              <p className="lg:text-4xl text-3xl font-semibold leading-9 text-gray-800 mb-6 ">
                Contact Us
              </p>
              <p className="text-base leading-none text-white mb-8">
                We are always here to help in whatever way we can
              </p>
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
              <button className="bg-gradient-to-r rounded-3xl from-[#e10000] via-[#f03e3e] to-[#1c0303] text-base font-medium leading-none text-white bg-gray-800 w-full py-4 hover:bg-gray-700 bg-transform duration-300">
                Send
              </button>
            </div>
          </div>
          <div className="bg-black mt-10">
            <div className="px-3 py-12">
              <div className="lg:max-w-[1280px] md:max-w-[696px] w-full mx-auto bg-[#e10000] lg:px-10 md:px-6 px-4 py-7">
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1">
                  <div className="text-white ">
                    <p className="text-xl font-semibold e ">About us</p>
                    <p className="text-2xl">ULTRANET</p>
                    <p className="text-lg">
                      GROUND FLOOR, H NO-58-A, KH NO 28/19, GALI NO 4, RADHEY
                      SHYAM PARK, East Delhi, Delhi, 110051.
                    </p>
                  </div>
                  <div className="lg:pt-0 text-white md:pt-0 pt-8">
                    <p className="text-lg font-semibold e ">Support</p>
                    <ul className="pt-3">
                      <li className="pt-4">
                        <a href="javascript:void(0)" className="text-base e ">
                          Contact Us
                        </a>
                      </li>
                      <li className="pt-4">
                        <a href="javascript:void(0)" className="text-base e">
                          Size guide
                        </a>
                      </li>
                      <li className="pt-4">
                        <a
                          href="javascript:void(0)"
                          className="text-base e text-white"
                        >
                          Shipping
                        </a>
                      </li>
                      <li className="pt-4">
                        <a
                          href="javascript:void(0)"
                          className="text-base e text-white"
                        >
                          Payment Security
                        </a>
                      </li>
                      <li className="pt-4">
                        <a
                          href="javascript:void(0)"
                          className="text-base e text-white"
                        >
                          Our Services
                        </a>
                      </li>
                      <li className="pt-4">
                        <a
                          href="javascript:void(0)"
                          className="text-base e text-white"
                        >
                          Promotion Deals
                        </a>
                      </li>
                      <li className="pt-4">
                        <a
                          href="javascript:void(0)"
                          className="text-base e text-white"
                        >
                          Special Order
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="lg:pt-0 md:pt-0 pt-8">
                    <p className="text-lg font-semibold e text-white ">Legal</p>
                    <ul className="pt-3">
                      <li className="pt-4">
                        <a
                          href="javascript:void(0)"
                          className="text-base e text-white"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li className="pt-4">
                        <a
                          href="javascript:void(0)"
                          className="text-base e text-white"
                        >
                          Trade Mark
                        </a>
                      </li>
                      <li className="pt-4">
                        <a
                          href="javascript:void(0)"
                          className="text-base e text-white"
                        >
                          Terms of use
                        </a>
                      </li>
                      <li className="pt-4">
                        <a
                          href="javascript:void(0)"
                          className="text-base e text-white"
                        >
                          Cookie Policy
                        </a>
                      </li>
                      <li className="pt-4">
                        <a
                          href="javascript:void(0)"
                          className="text-base e text-white"
                        >
                          Promotion Terms
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="lg:pt-0 md:pt-16 pt-8 lg:flex-col md:flex block lgLw-0 md:w-96 lg:justify-start md:justify-between">
                    <div className>
                      <p className="text-lg font-semibold e text-white">
                        Features
                      </p>
                      <div className="flex gap-3 pt-4 cursor-pointer">
                        <svg
                          className="text-white hover:text-gray-900"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.5 8.67188C4.5 4.67875 7.89479 1.5 12 1.5C16.1052 1.5 19.5 4.67875 19.5 8.67188C19.5 10.923 18.2829 13.7082 16.9495 16.1155C15.5963 18.559 14.0377 20.7603 13.2019 21.8891C13.064 22.0776 12.8837 22.231 12.6755 22.337C12.4663 22.4435 12.2348 22.499 12 22.499C11.7652 22.499 11.5337 22.4435 11.3245 22.337C11.1163 22.231 10.9359 22.0776 10.798 21.889C9.96224 20.7598 8.40373 18.5577 7.05043 16.1139C5.71719 13.7064 4.5 10.9214 4.5 8.67188ZM12 3C8.65209 3 6 5.57656 6 8.67188C6 10.5004 7.03281 12.9859 8.36265 15.3872C9.66887 17.746 11.1818 19.886 12 20.9917C12.8181 19.8865 14.3311 17.7473 15.6374 15.3888C16.9671 12.9878 18 10.5021 18 8.67188C18 5.57656 15.3479 3 12 3Z"
                            fill="currentColor"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 7.5C11.1716 7.5 10.5 8.17157 10.5 9C10.5 9.82843 11.1716 10.5 12 10.5C12.8284 10.5 13.5 9.82843 13.5 9C13.5 8.17157 12.8284 7.5 12 7.5ZM9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9Z"
                            fill="currentColor"
                          />
                        </svg>
                        <p className="text-base e text-white">
                          Track Your Orders
                        </p>
                      </div>
                      <div className="flex gap-3 pt-4 cursor-pointer">
                        <svg
                          className="text-white hover:text-gray-900"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2.25 12C2.25 6.61704 6.61704 2.25 12 2.25C17.383 2.25 21.75 6.61704 21.75 12C21.75 17.383 17.383 21.75 12 21.75C6.61704 21.75 2.25 17.383 2.25 12ZM12 3.75C7.44546 3.75 3.75 7.44546 3.75 12C3.75 16.5545 7.44546 20.25 12 20.25C16.5545 20.25 20.25 16.5545 20.25 12C20.25 7.44546 16.5545 3.75 12 3.75ZM10.7454 6.90025C11.778 6.6498 12.8623 6.71813 13.8553 7.09626C14.8484 7.47439 15.7035 8.14456 16.308 9.01842C16.7964 9.7245 17.1027 10.5368 17.2042 11.3832C17.4965 11.1804 17.9008 11.2092 18.1613 11.4696C18.4543 11.7624 18.4544 12.2373 18.1615 12.5302L17.0558 13.6365C16.7675 13.9249 16.3015 13.9301 16.0069 13.6482L14.8505 12.542C14.5511 12.2556 14.5406 11.7809 14.827 11.4816C15.0527 11.2456 15.3955 11.1891 15.6771 11.316C15.5803 10.8001 15.3759 10.3076 15.0744 9.87177C14.6423 9.24725 14.0312 8.76831 13.3215 8.49807C12.6119 8.22783 11.837 8.17899 11.099 8.35799C10.361 8.53698 9.69458 8.93541 9.18757 9.50074C8.91102 9.80911 8.43684 9.8349 8.12847 9.55835C7.82011 9.2818 7.79431 8.80762 8.07087 8.49926C8.7803 7.70821 9.71279 7.15071 10.7454 6.90025ZM6.94425 10.3635C7.23254 10.0751 7.69846 10.0699 7.99313 10.3518L9.14954 11.458C9.44885 11.7444 9.45938 12.2191 9.17305 12.5184C8.94326 12.7587 8.59211 12.8129 8.30768 12.6769C8.40399 13.197 8.60944 13.6935 8.91337 14.1325C9.34616 14.7577 9.95829 15.237 10.669 15.5071C11.3798 15.7773 12.1557 15.8257 12.8945 15.6458C13.6333 15.466 14.3002 15.0664 14.8072 14.4998C15.0834 14.1912 15.5576 14.1649 15.8662 14.4411C16.1749 14.7173 16.2012 15.1915 15.925 15.5002C15.2157 16.2928 14.2827 16.8517 13.2492 17.1033C12.2158 17.3548 11.1303 17.2872 10.1361 16.9093C9.1418 16.5313 8.28549 15.8609 7.68007 14.9863C7.19205 14.2814 6.88554 13.4705 6.78307 12.6255C6.49187 12.8187 6.09542 12.7871 5.83869 12.5304C5.54573 12.2376 5.54563 11.7627 5.83846 11.4698L6.94425 10.3635Z"
                            fill="currentColor"
                          />
                        </svg>
                        <p className="text-base e text-white">
                          Free &amp; Easy Return
                        </p>
                      </div>
                      <div className="flex gap-3 pt-4 cursor-pointer">
                        <svg
                          className="text-white hover:text-gray-900"
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M2.25 12C2.25 6.61704 6.61704 2.25 12 2.25C17.383 2.25 21.75 6.61704 21.75 12C21.75 17.383 17.383 21.75 12 21.75C6.61704 21.75 2.25 17.383 2.25 12ZM12 3.75C7.44546 3.75 3.75 7.44546 3.75 12C3.75 16.5545 7.44546 20.25 12 20.25C16.5545 20.25 20.25 16.5545 20.25 12C20.25 7.44546 16.5545 3.75 12 3.75ZM8.46967 8.46967C8.76256 8.17678 9.23744 8.17678 9.53033 8.46967L12 10.9393L14.4697 8.46967C14.7626 8.17678 15.2374 8.17678 15.5303 8.46967C15.8232 8.76256 15.8232 9.23744 15.5303 9.53033L13.0607 12L15.5303 14.4697C15.8232 14.7626 15.8232 15.2374 15.5303 15.5303C15.2374 15.8232 14.7626 15.8232 14.4697 15.5303L12 13.0607L9.53033 15.5303C9.23744 15.8232 8.76256 15.8232 8.46967 15.5303C8.17678 15.2374 8.17678 14.7626 8.46967 14.4697L10.9393 12L8.46967 9.53033C8.17678 9.23744 8.17678 8.76256 8.46967 8.46967Z"
                            fill="currentColor"
                          />
                        </svg>
                        <p className="text-base e text-white">
                          Online cancellations
                        </p>
                      </div>
                    </div>
                    <div className="lg:pt-10 md:pt-0 pt-8 cursor-pointer">
                      <p className="text-lg font-semibold e text-white">
                        Follow Us
                      </p>
                      <div className="flex gap-4 pt-4">
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Facebook.png"
                          alt="facebook"
                        />
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Instagram%20%281%29.png"
                          alt="insta"
                        />
                        <img
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/Twitter.png"
                          alt="twitter"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center lg:justify-between md:justify-center lg:gap-0 md:gap-10 gap-3 flex-wrap lg:pt-32 md:pt-16 pt-16">
                  <div className="flex gap-6">
                    <p className="text-sm  text-white ">+91-7065000280</p>
                    <p className="text-sm  text-white ">+91-7065000960</p>
                    <p className="text-sm  text-white">
                      Corp.support@Ultranet.co.in
                    </p>
                  </div>
                  <div className="flex lg:gap-4  gap-2 lg:pt-0 md:pt-0  lg:pr-20">
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/la_copyright-solid.png"
                      alt="copywrite"
                      className="text-white"
                    />
                    <p className="text-sm e text-white">All Rights Reserved</p>
                    <p className="text-sm e text-white">@ ULTRANET.</p>
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