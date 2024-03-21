import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const TermsOfService = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <div className='2xl:mx-auto pt-[40%] md:pt-[3%] 2xl:container xl:px-20 md:px-6 p-4 py-28 lg:flex items-stretch  justify-between'>
        <div className='lg:w-2/4  pr-4'>
          <div data-aos='fade-up' data-aos-once='false' className>
            <h1
              data-aos='fade-up'
              data-aos-once='false'
              data-aos-duration='2000'
              className='lg:text-5xl text-3xl font-bold text-gray-800'
            >
              Terms Of Service
            </h1>
            <p
              data-aos='fade-up'
              data-aos-once='false'
              data-aos-duration='2000'
              className='text-base leading-6 text-justify text-gray-600 mt-4'
            >
              MoveNPack &amp; movers is the sole owner of the information
              collected on this site. We will not sell, share, or rent this
              information to others in any way different from what is disclosed
              in this statement. MoveNPack packers &amp; movers collects
              information from our users at several different points on our
              website. The purpose of this information is outlined on the page
              where this information is collected. Information collected via
              this website is used to provide the services offered on that area
              of the site.
            </p>
          </div>

          <ul className='mt-12 text-justify list-decimal ml-5'>
            <li
              data-aos='fade-up'
              data-aos-once='false'
              data-aos-duration='2000'
              className='text-base leading-6 text-gray-600 mt-4'
            >
              In Services of our site where sensitive information may be
              transferred, all transmissions between client and server are
              encrypted using the industry standard SSL protocol. We also
              restrict the level of access that our employees have to user's
              information, based on their responsibilities and hold them to high
              levels of confidentiality.
            </li>
            <li
              data-aos='fade-up'
              data-aos-once='false'
              data-aos-duration='2000'
              className='text-base leading-6 text-gray-600 mt-4'
            >
              A cookie is a piece of data stored on the user's hard drive
              containing information about the user. MoveNPack packers &amp;
              movers uses cookies for security, session continuity, and
              customization purposes. If a user rejects a cookie, he/she may
              still use most of the Web Site, but may not be able to gain access
              to some Services or use some features of the site.
            </li>
            <li
              data-aos='fade-up'
              data-aos-once='false'
              data-aos-duration='2000'
              className='text-base leading-6 text-gray-600 mt-4'
            >
              MoveNPack packers &amp; movers uses client IP addresses to analyze
              site usage trends, administer the site, track users' movements
              within the Web Site, and gather broad demographic information for
              aggregate use.
            </li>
            <li
              data-aos='fade-up'
              data-aos-once='false'
              data-aos-duration='2000'
              className='text-base leading-6 text-gray-600 mt-4'
            >
              This site contains links to other sites. MoveNPack packers &amp;
              movers is not responsible for the privacy practices or the content
              of such web sites.
            </li>
            <li
              data-aos='fade-up'
              data-aos-once='false'
              data-aos-duration='2000'
              className='text-base leading-6 text-gray-600 mt-4'
            >
              If for any reason, the ground inspection is not favorable for
              providing our services, we will provide you a full refund of the
              installation charges within 15 working days.
            </li>
            <li
              data-aos='fade-up'
              data-aos-once='false'
              data-aos-duration='2000'
              className='text-base leading-6 text-gray-600 mt-4'
            >
              Invoices will have to be paid on or before the due date and
              failure to do so would incur penal charges or late fee. We also
              reserve the right to discontinue the provision of our services if
              we deem it necessary.
            </li>
          </ul>
        </div>
        <div
          data-aos='zoom-in-down'
          data-aos-once='false'
          data-aos-duration='2000'
          className='xl:w-1/2  sm:w-8/12 relative lg:mt-0 mt-12 lg:flex hidden items-center lg:justify-end justify-center '
        >
          <img
            src='https://i.ibb.co/GcW89gm/img1.png'
            className='w-8/12 h-full object-cover object-center md:flex hidden'
            alt='group meeting'
          />
          <img
            src='https://i.ibb.co/ZYYffvx/img2.png'
            className='md:w-auto w-full md:absolute top-0 h-full py-8 left-0 md:ml-10 object-cover object-center'
            alt='lady working'
          />
        </div>
        <div className='lg:mt-0 mt-12 lg:hidden md:block hidden w-full'>
          <img
            src='https://i.ibb.co/L9RDbBd/Group-811183.png'
            alt='lady workin'
            className='w-full'
          />
        </div>
        <div className='mt-12 md:hidden w-full'>
          <img
            src='https://i.ibb.co/ZYYffvx/img2.png'
            alt='woman working'
            className='w-full'
          />
        </div>
      </div>
      <div className=' mx-[5%] pt-16'>
        <div
          data-aos='zoom-in-down'
          data-aos-once='false'
          data-aos-duration='2000'
          className='relative bg-center bg-cover bg-no-repeat mb-10  mx-auto  h-64'
        >
          <img
            src='https://tuk-cdn.s3.amazonaws.com/assets/components/blog/b_3_0.png'
            alt=''
            className='h-full w-full object-cover overflow-hidden absolute rounded'
          />
        </div>
        <div
          data-aos='zoom-in-down'
          data-aos-once='false'
          className='  mx-auto '
        >
          <p className='mb-4 font-bold text-gray-800 text-base'>
            You can pay us by any of the following methods:
          </p>
          <ul
            data-aos='zoom-in-down'
            data-aos-once='false'
            data-aos-duration='2000'
            className='list-decimal ml-5'
          >
            <li>Credit cards</li>
            <li>Debit cards</li>
            <li>Standing instructions on your bank account</li>
            <li>Payment through cheque, demand draft or pay order</li>
            <li>Manual payment by cash at one of our branch offices</li>
            <li>Online payment through NEFT or IMPS clearance</li>
            <li>Through phone banking</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TermsOfService;
