import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FairUsePolicy = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <div className="px-4 ">
        <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto bg-white ">
          <div className="  w-full px-4 py-4 bg-[#071343] md:h-full md:px-6  ">
            <div
              data-aos="zoom-in-up"
              data-aos-duration="3000"
              className="lg:max-w-[842px] bg-white py-6 mx-auto mt-36 md:mt-24 mb-10 w-full"
            >
              <div className="flex items-center justify-between px-4 lg:px-10 md:px-6 ">
                <svg
                  width={40}
                  height={40}
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 3.33203C21.19 3.33203 22.365 3.45703 23.51 3.70203C23.7297 3.74907 23.9326 3.85446 24.0975 4.00709C24.2623 4.15973 24.383 4.35398 24.4468 4.56941C24.5106 4.78483 24.5152 5.01347 24.46 5.23126C24.4048 5.44905 24.292 5.64795 24.1333 5.80703C23.6091 6.33334 23.2351 6.99018 23.0499 7.70955C22.8648 8.42893 22.8752 9.18471 23.0802 9.89869C23.2852 10.6127 23.6772 11.2589 24.2158 11.7705C24.7543 12.2822 25.4198 12.6406 26.1433 12.8087C26.4412 12.8775 26.7035 13.053 26.8807 13.302C27.0579 13.5511 27.1377 13.8564 27.105 14.1604C27.0162 15.0376 27.2079 15.9204 27.6527 16.6818C28.0974 17.4431 28.7722 18.0437 29.58 18.3972C30.3878 18.7507 31.2869 18.8388 32.1479 18.6489C33.0089 18.459 33.7875 18.0009 34.3716 17.3404C34.5314 17.1595 34.7402 17.0287 34.9727 16.9638C35.2052 16.899 35.4515 16.9028 35.6818 16.9749C35.9122 17.047 36.1167 17.1842 36.2708 17.3701C36.4249 17.5559 36.5218 17.7823 36.55 18.022C36.6283 18.672 36.6666 19.3337 36.6666 19.9987C36.6666 29.2037 29.205 36.6654 20 36.6654C10.795 36.6654 3.33331 29.2037 3.33331 19.9987C3.33331 10.7937 10.795 3.33203 20 3.33203ZM20 5.83203C17.2525 5.83219 14.5643 6.6313 12.2628 8.13202C9.96136 9.63275 8.14596 11.7703 7.03772 14.2844C5.92948 16.7985 5.57622 19.5806 6.02098 22.2919C6.46573 25.0032 7.6893 27.5267 9.54267 29.5549C11.396 31.5832 13.7992 33.0288 16.4595 33.7156C19.1198 34.4024 21.9224 34.3008 24.526 33.4232C27.1296 32.5456 29.4218 30.9298 31.1234 28.7726C32.8251 26.6155 33.8627 24.0101 34.11 21.2737L34.1416 20.8454L34.1533 20.5837L33.83 20.7304C33.28 20.962 32.6966 21.1187 32.0916 21.197L31.635 21.237L31.25 21.2487C29.6544 21.2487 28.1117 20.6767 26.9019 19.6363C25.6922 18.5959 24.8955 17.1563 24.6566 15.5787L24.615 15.2437L24.5916 14.932L24.35 14.832C23.2859 14.3528 22.3661 13.6029 21.6823 12.6571C20.9986 11.7113 20.5748 10.6027 20.4533 9.44203L20.425 9.08203L20.4166 8.7487C20.4166 8.0037 20.54 7.2787 20.7733 6.59536L20.925 6.19036L21.0666 5.8737L20.6066 5.84536L20 5.83203ZM25 26.6654C25.442 26.6654 25.8659 26.841 26.1785 27.1535C26.4911 27.4661 26.6666 27.89 26.6666 28.332C26.6666 28.7741 26.4911 29.198 26.1785 29.5105C25.8659 29.8231 25.442 29.9987 25 29.9987C24.558 29.9987 24.134 29.8231 23.8215 29.5105C23.5089 29.198 23.3333 28.7741 23.3333 28.332C23.3333 27.89 23.5089 27.4661 23.8215 27.1535C24.134 26.841 24.558 26.6654 25 26.6654ZM13.3333 24.9987C13.7753 24.9987 14.1993 25.1743 14.5118 25.4869C14.8244 25.7994 15 26.2233 15 26.6654C15 27.1074 14.8244 27.5313 14.5118 27.8439C14.1993 28.1564 13.7753 28.332 13.3333 28.332C12.8913 28.332 12.4674 28.1564 12.1548 27.8439C11.8422 27.5313 11.6666 27.1074 11.6666 26.6654C11.6666 26.2233 11.8422 25.7994 12.1548 25.4869C12.4674 25.1743 12.8913 24.9987 13.3333 24.9987ZM20 18.332C20.442 18.332 20.8659 18.5076 21.1785 18.8202C21.4911 19.1327 21.6666 19.5567 21.6666 19.9987C21.6666 20.4407 21.4911 20.8646 21.1785 21.1772C20.8659 21.4898 20.442 21.6654 20 21.6654C19.558 21.6654 19.134 21.4898 18.8215 21.1772C18.5089 20.8646 18.3333 20.4407 18.3333 19.9987C18.3333 19.5567 18.5089 19.1327 18.8215 18.8202C19.134 18.5076 19.558 18.332 20 18.332ZM11.6666 13.332C12.1087 13.332 12.5326 13.5076 12.8452 13.8202C13.1577 14.1327 13.3333 14.5567 13.3333 14.9987C13.3333 15.4407 13.1577 15.8646 12.8452 16.1772C12.5326 16.4898 12.1087 16.6654 11.6666 16.6654C11.2246 16.6654 10.8007 16.4898 10.4881 16.1772C10.1756 15.8646 9.99998 15.4407 9.99998 14.9987C9.99998 14.5567 10.1756 14.1327 10.4881 13.8202C10.8007 13.5076 11.2246 13.332 11.6666 13.332Z"
                    fill="#1F2937"
                  />
                </svg>
                <img src="ulranetlogo.png" alt="" className="w-40" />
              </div>
              <hr className="mt-6 mb-8 border-gray-200" />
              <div className="px-4 lg:px-10 md:px-6">
                <p className="mb-6 text-xl font-semibold leading-normal text-gray-800 md:text-2xl">
                  Fair Use Policy
                </p>
                <ul className="ml-5 list-decimal">
                  <li className="text-base leading-normal text-gray-600">
                    Some broadband FTTH plans involve an FUP (Fair use policy).
                    This is to ensure that all our customers get to experience
                    our bandwidth and speeds without disruption.
                  </li>
                  <li className="text-base leading-normal text-gray-600">
                    Under this Fair Usage Policy, levels have been defined for
                    fair usage such that most customers will face no limitation
                    to using our FTTH services what so ever. A very few number
                    of people with much more than normal usage needs will be
                    bound by the cap so that all can have the fun of broadband
                    services without an overload.
                  </li>
                  <li className="text-base leading-normal text-gray-600">
                    All our plans, after the exhaustion of their individual
                    usage limits will be capped at a speed of 1 Mbps.
                  </li>
                  <li className="text-base leading-normal text-gray-600">
                    For further details on our plans, please refer to the
                    packages on below Contact Us
                  </li>
                </ul>
                <h1>
                  Please note that the capped limit will be defaulted to the
                  speed of the chosen plan of the customer at the start of the
                  next billing cycle.
                </h1>
              </div>
              <hr className="my-8 border-gray-200" />
              <div className="flex flex-col-reverse items-center justify-end px-4 lg:px-10 md:px-6 gap-y-4 gap-x-4 lg:flex-row"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FairUsePolicy;
