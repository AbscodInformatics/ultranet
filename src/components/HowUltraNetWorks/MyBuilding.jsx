import React from "react";

const MyBuilding = () => {
  return (
    <div className='text-[#071343]'>
      <div className='text-lg '>
        <p className='text-xl  font-semibold '>
          Follow these simple steps to get hyperfast broadband to your building
        </p>
        <ul className='list-decimal font-semibold ml-7 mt-5'>
          <li>
            <span className='text-xl font-bold'>Register an interest</span>
            <p className='font-semibold'>
              Check your address/postcode to make sure UltraNet is currently
              available in your building or area. If not, go to My Building tab.
            </p>
          </li>
          <li>
            <span className='text-xl font-bold'>
              Building or area to be assessed
            </span>
            <p className='font-semibold'>
              UltraNet will assess the building or area to see if it can receive
              UltraNet hyperfast full fiber broadband.
            </p>
          </li>
          <li>
            <span className='text-xl font-bold'>
              {" "}
              Building or area will be surveyed
            </span>
            <p className='font-semibold'>
              A building or street survey will be conducted to review the access
              and building type(s) to see how our services could be installed.
            </p>
          </li>
          <li>
            <span className='text-xl font-bold'>Building permission</span>
            <p className='font-semibold'>
              Permission to install UltraNet to larger buildings will need to be
              provided from the Freeholder or Building Management company
              (Wayleave signing). Smaller buildings may not require this.
            </p>
          </li>
          <li>
            <span className='text-xl font-bold'> Fiber to be ordered</span>
            <p className='font-semibold'>
              The fiber connection for your building will then need to be
              ordered and delivered.
            </p>
          </li>
          <li>
            <span className='text-xl font-bold'>
              {" "}
              Installation of network to be started
            </span>
            <p className='font-semibold'>
              Our engineers will then install our network cables within your
              building or street.
            </p>
          </li>{" "}
          <li>
            <span className='text-xl font-bold'> UltraNet installed</span>
            <p className='font-semibold'>
              Installation of our network cables are now complete, and home
              installations can now take place (see How to bring UltraNet to my
              home).
            </p>
          </li>
        </ul>
      </div>
      <div className='mt-[5%]'>
        <div className='text-5xl leading-[60px] text-customBlue tracking-[-0.04em]  font-[800] text-center mx-1 md:mx-0  '>
          HOW MOVENPACK IS DIFFERENT
        </div>
        <p className='text-lg mt-[3%] font-semibold'>
          We are voted the best broadband service provider in the India, and our
          speeds are one of the unmatched in the industry. Most fiber broadband
          services are usually fiber and copper, fiber optic cables from the
          exchange to your street and then copper phone wires into your
          dwelling. This negatively impacts the speed. Besides, there is more
          attenuation with copper wiring. Our mission is to ensure that our
          customers enjoy high bandwidth HD quality video streaming online.
        </p>
      </div>
    </div>
  );
};

export default MyBuilding;
