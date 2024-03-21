import React, { useEffect } from "react";
import { Link } from "react-scroll";
import Partners from "../Partners";
import AOS from "aos";
import "aos/dist/aos.css";

const Partner = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <>
      <div
        data-aos='zoom-in-up'
        data-aos-once='false'
        data-aos-delay='1200'
        className='pt-[40%] md:pt-[7%] group hover:bg-gradient-to-r bg-[#071343]  text-lg  hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 text-white font-medium  transition duration-300  p-[5%] xl:px-20 md:px-6 px-4 md:py-20 py-14 w-full flex flex-col items-center justify-center'
      >
        <h1
          data-aos='zoom-in'
          data-aos-once='false'
          className='text-gray-100 lg:text-4xl md:text-2xl text-xl lg:leading-9 md:leading-6  font-semibold leading-10'
        >
          Partner
        </h1>
        <p
          data-aos='zoom-in-up'
          data-aos-once='false'
          className='text-base leading-6 text-justify mt-4 md:text-center text-gray-200 '
        >
          MoveNPack packers and movers do not rent, sell, or give out your
          information to anyone outside of the company or its authorized agents.
          Only MoveNPack packers &amp; movers or an agent working on behalf of
          MoveNPack &amp; movers may have access to information gathered through
          this web site.MoveNPack &amp; movers uses this information to provide
          services tailored to the interests of our users. One of the uses of
          your information may be for mailing purposes. You may request any time
          to be removed from our mailing list or email list by using the
          procedures described below.
        </p>
        <h1
          data-aos='zoom-in-up'
          data-aos-once='false'
          className='text-white text-lg font-semibold my-5'
        >
          customer support helpline at 02262581800.
        </h1>
        <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-24 gap-y-11 mt-11'>
          <div
            data-aos='zoom-in-up'
            data-aos-once='false'
            className='flex flex-col md:items-start items-center md:justify-start justify-center'
          >
            <img
              src='https://tuk-cdn.s3.amazonaws.com/can-uploader/svg-vector-1.svg'
              className='w-14 h-14'
              alt='Vector-1'
            />
            <p className='text-base font-bold leading-4 mt-6 text-white'>
              Automatic Network Monitoring
            </p>
            <p className='w-72 lg:text-base text-sm lg:leading-6 leading-5 mt-4 text-white md:text-left text-center'>
              We monitor actively our partner networks and open tickets in case
              of issues.
            </p>
          </div>
          <div
            data-aos='zoom-in-up'
            data-aos-once='false'
            className='flex flex-col md:items-start items-center md:justify-start justify-center'
          >
            <img
              src='https://tuk-cdn.s3.amazonaws.com/can-uploader/svg-vector-2.png'
              className='w-14 h-14'
              alt='Vector-1'
            />
            <p className='text-base font-bold leading-4 mt-6 text-white'>
              Dedicated & Protected Fiber Ring
            </p>
            <p className='w-72 lg:text-base text-sm lg:leading-6 leading-5 mt-4 text-white md:text-left text-center'>
              Bandwidth capacity is never a problem. We have unlimited bandwidth
              on our ring. Reliability is also not an issue. We keep 3
              independent International Internet Connections and fiber is always
              protected by two routes.
            </p>
          </div>
          <div
            data-aos='zoom-in-up'
            data-aos-once='false'
            className='flex flex-col md:items-start items-center md:justify-start justify-center'
          >
            <img
              src='https://tuk-cdn.s3.amazonaws.com/can-uploader/svg-vector-3.png'
              className='w-14 h-14'
              alt='Vector-1'
            />
            <p className='text-base font-bold leading-4 mt-6 text-white'>
              Online Payments
            </p>
            <p className='w-72 lg:text-base text-sm lg:leading-6 leading-5 mt-4 text-white md:text-left text-center'>
              Go cashless.Pay Online on UltraNet.co.in to save time and renew
              instantly.
            </p>
          </div>
          <div
            data-aos='zoom-in-up'
            data-aos-once='false'
            className='lg:hidden flex flex-col md:items-start items-center md:justify-start justify-center'
          >
            <div className='w-14 h-14 flex items-center justify-center'>
              <img
                src='https://tuk-cdn.s3.amazonaws.com/can-uploader/svg-vector-4.png'
                className='w-14 h-10'
                alt='Vector-1'
              />
            </div>
            <p className='text-base font-bold leading-4 mt-6 text-white'>
              Continue Growth Guaranteed
            </p>
            <p className='w-72 lg:text-base text-sm lg:leading-6 leading-5 mt-4 text-white md:text-left text-center'>
              Our partner program is tailor made to ensure maximum profits to
              the partners. Grow big time with UltraNet.
            </p>
          </div>
        </div>
        <div
          data-aos='zoom-in-up'
          data-aos-once='false'
          className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-24 gap-y-11 mt-11'
        >
          <div className='lg:block hidden'>
            <div className='w-14 h-14 flex items-center justify-center'>
              <img
                src='https://tuk-cdn.s3.amazonaws.com/can-uploader/svg-vector-4.png'
                className='w-14 h-10'
                alt='Vector-1'
              />
            </div>
            <p className='text-base font-bold leading-4 mt-6 text-white'>
              Dedicated Account Manager
            </p>
            <p className='w-72 lg:text-base text-sm lg:leading-6 leading-5 mt-4 text-white md:text-left text-center'>
              We always assign a dedicated account manager to handle all your
              queries. It makes process smooth and faster.
            </p>
          </div>
          <div
            data-aos='zoom-in-up'
            data-aos-once='false'
            className='flex flex-col md:items-start items-center md:justify-start justify-center'
          >
            <img
              src='https://tuk-cdn.s3.amazonaws.com/can-uploader/svg-vector-5.png'
              className='w-14 h-14'
              alt='Vector-1'
            />
            <p className='text-base font-bold leading-4 mt-6 text-white'>
              Unlimited for a Single Household
            </p>
            <p className='w-72 lg:text-base text-sm lg:leading-6 leading-5 mt-4 text-white md:text-left text-center'>
              Our service are truly unlimited for single household. So user will
              enjoy high speed internet 24*7*365.
            </p>
          </div>
          <div
            data-aos='zoom-in-up'
            data-aos-once='false'
            className='flex flex-col md:items-start items-center md:justify-start justify-center'
          >
            <div className='w-14 h-14 flex items-center justify-center'>
              <img
                src='https://tuk-cdn.s3.amazonaws.com/can-uploader/svg-vector-6.png'
                className='w-14 h-12'
                alt='Vector-1'
              />
            </div>
            <p className='text-base font-bold leading-4 mt-6 text-white'>
              Continue Growth Guaranteed
            </p>
            <p className='w-72 lg:text-base text-sm lg:leading-6 leading-5 mt-4 text-white md:text-left text-center'>
              Our partner program is tailor made to ensure maximum profits to
              the partners. Grow big time with UltraNet.
            </p>
          </div>
        </div>
        <Link
          data-aos='zoom-in-up'
          data-aos-once='false'
          activeClass='active'
          smooth={true}
          offset={-20}
          to='contact'
          className='group-hover:bg-gradient-to-r mt-10 bg-[white] text-[#071343] px-8 text-lg py-3 group-hover:from-pink-500 group-hover:via-red-500 group-hover:to-yellow-500  font-medium rounded transition duration-300'
        >
          Contact Us
        </Link>
        <div className='mt-[5%]'>
          <Partners />
        </div>
      </div>
    </>
  );
};

export default Partner;
