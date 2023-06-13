import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {BsFillHddNetworkFill} from "react-icons/bs"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const FtthNetwork = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <div>
        <div className="pt-[40%] md:pt-[5%]">
          <div>
            <Swiper
              loop={true}
              autoplay={{
                delay: 3000,
              }}
              breakpoints={{
                640: { slidesPerView: 1 },
                778: { slidesPerView: 1 },
                1024: { slidesPerView: 1 },
                1224: { slidesPerView: 1 },
                1324: { slidesPerView: 1 },
                1524: { slidesPerView: 1 },
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img
                  src="/fttp1.jpg"
                  alt=""
                  className="object-fill h-[30vh] md:h-[80vh] w-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/fttp2.jpg"
                  alt=""
                  className="object-fill h-[30vh] md:h-[80vh] w-full"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/fttp3.jpg"
                  alt=""
                  className="object-fill h-[30vh] md:h-[80vh] w-full"
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <div className="px-4 mt-16 ">
          <div className="lg:max-w-[1440px] md:max-w-[744px] max-w-[375px] mx-auto bg-white ">
            <div className="  w-full px-4 py-4 bg-[#071343] md:h-full md:px-6  ">
              <div
                data-aos="zoom-in-up"
                data-aos-duration="3000"
                className="lg:max-w-[842px] bg-white py-6 mx-auto   my-10 w-full"
              >
                <div className="flex items-center justify-between px-4 lg:px-10 md:px-6 ">
                  <BsFillHddNetworkFill size={40} color="#071343" />
                  <img src="ulranetlogo.png" alt="" className="w-40" />
                </div>
                <hr className="mt-6 mb-8 border-gray-200" />
                <div className="px-4 lg:px-10 md:px-6 text-justify">
                  <p className="mb-6 text-xl font-semibold leading-normal text-gray-800 md:text-2xl">
                    FTTH Network
                  </p>
                  <p>
                    As the world gets busier by the day, communications over the
                    Internet get to be more heavily loaded. Routing all of the
                    data without attenuation and with fool proof encryption is
                    only part of the story. The rest of the service reliability
                    lies upon how fast this routing can be done and how
                    continuity of connectivity and speeds may be ensured.
                  </p>
                  <p className="my-4">
                    This is the whole reason why we have an FTTH network to
                    provide high speed broadband services to our customers.
                  </p>
                  <p>
                    Our FTTH (Fiver To The Home) services are a definite
                    differentiator as our cables are full fiber, and not part
                    fiber and part copper cabling as several other providers
                    offer.
                  </p>
                  <h1 className="my-4">
                    This gives you the following clear benefits when you are
                    connected with UltraNet:
                  </h1>
                  <ul className="ml-5 list-decimal">
                    <li className="text-base leading-normal text-gray-600">
                      The fastest speeds – this ensures that your upload and
                      download speeds will not suffer no matter how much the
                      load
                    </li>
                    <li className="text-base leading-normal text-gray-600">
                      The data load capacity is the highest when you use full
                      fiber networks, because fiber optic lines have much more
                      load capacity compared to any other type of cabling. Also,
                      the attention is considerably very low.
                    </li>
                    <li className="text-base leading-normal text-gray-600">
                      Our broadband is not just fiber till the exchange, but
                      fiber to your premises- home or office. Now you can sit
                      back and relax as the network will never fail you.
                    </li>
                    <li className="text-base leading-normal text-gray-600">
                      Our speeds and connectivity are not affected no matter how
                      many connections are made to the network and how many
                      active users are on the network using up the bandwidth.
                    </li>
                  </ul>
                  <h1 className="text-lg font-semibold my-4">
                    Besides, we are more than affordable with an array of
                    packages and data plans to suit your usage needs as well as
                    budget requirements.
                  </h1>
                </div>
                <hr className="my-8 border-gray-200" />
                <div className="flex flex-col-reverse items-center justify-end px-4 lg:px-10 md:px-6 gap-y-4 gap-x-4 lg:flex-row"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FtthNetwork;
