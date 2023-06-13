import React, { useRef } from "react";
import Footer from "../Footer";
import { ImCross } from "react-icons/im";

const PrivacyPolicy = ({  closePopup }) => {
  const menu_cookies_14 = useRef(null);
  const showMenu_cookies_14 = (flag) => {
    menu_cookies_14.current.classList.toggle("hidden");
  };
  return (
    <>
      <div className="px-4 shadow-2xl ">
        <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto bg-white relative">
          <div className="relative">
            <div
              ref={menu_cookies_14}
              id="menu_cookies_14"
              className="absolute  top-0 z-10 w-full px-4  "
            >
              <div className="lg:max-w-[842px] rounded-3xl bg-white mt-80 md:mt-14 lg:py-6 md:py-3 py-4 mx-auto  overflow-y-auto max-h-[700px] md:max-h-[500px] w-full">
                <div className="lg:py-4 xl:px-10 lg:px-12 md:px-8 px-4">
                  <div className="flex justify-between my-5">
                    {" "}
                    <p className="text-xl font-semibold leading-normal text-gray-800 md:text-2xl">
                      Privacy Policy
                    </p>
                    <button className="cancel" onClick={closePopup}>
                      <ImCross />
                    </button>
                  </div>
                  <div className="flex flex-col gap-5 ">
                    <div className="flex flex-col gap-5 text-[#535d6b]">
                      <p>
                        UltraNet is committed to protect any information you as
                        a customer share with us and provide you the best
                        quality services.
                      </p>
                      <p>
                        During the process of registration with UltraNet, we
                        collect personally identifiable details such as your
                        name, address, mobile number and other applicable KYC
                        documentation to setup and activate your FTTH broadband
                        services with us.
                      </p>
                      <p>
                        We also collect details such as your IP address, type
                        and version of browser, access time and usage details of
                        our website including links clicked for quality purposes
                        and statistical analysis to maintain the website and
                        keep the quality of our services up to the highest
                        standards.
                      </p>
                      <p>
                        Our privacy and cookie policy will enable you to
                        understand how we collect, store and process your
                        personal information at UltraNet. It also includes
                        details on the sharing of such information collected
                        with other third party service providers.
                      </p>
                    </div>
                    <ul className="list-outside list-disc marker:text-[#4B5563] px-5">
                      <li className="pt-6">
                        <p className="text-base leading-normal text-[#4B5563]">
                          Customers are required to note that we are liable to
                          provide any or all relevant information to legal
                          agencies and government authorities as defined under
                          law.
                        </p>
                      </li>
                      <li className="pt-6">
                        <p className="text-base leading-normal text-[#4B5563]">
                          When you login to our site for registration, some
                          client side cookies may be stored on your computer to
                          enable you to experience better services and have
                          easier communication with our website. This will
                          enable you to access our services at a faster rate, as
                          well as store your preferences for providing better
                          services to you in the future.
                        </p>
                      </li>
                      <li className="pt-6">
                        <p className="text-base leading-normal text-[#4B5563]">
                          Any information collected by us may have to be shared
                          in an as is needed basis with third party vendors in
                          part, or as a whole to maintain services and data
                          integrity on our website.
                        </p>
                      </li>
                      <li className="pt-6">
                        <p className="text-base leading-normal text-[#4B5563]">
                          Personally identifiable information such as names,
                          addresses, phone numbers or details regarding your
                          credit card are stored and protected in a controlled
                          environment. Any payment related details are secured
                          with encryption through SSL (Secure Socket Layer)
                          protocol.
                        </p>
                      </li>
                      <li className="pt-6">
                        <p className="text-base leading-normal text-[#4B5563]">
                          This policy may be updated with or without prior
                          notice as may be required from time to time
                        </p>
                      </li>
                    </ul>
                    <div className="text-[#30343a] text-lg font-semibold">
                      In case of any further help or queries with the policy,
                      you may contact us on our customer support helpline.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PrivacyPolicy;
