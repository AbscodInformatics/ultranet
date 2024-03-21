import React from "react";

const Productsss = () => {
  const images = [
    "mdLogo.jpeg",
    "excelLogo.png",
    "admacLogo.jpeg",
    "mdLogo.jpeg",
  ];

  return (
    <div className='mx-[5%] py-[5%]'>
      <div
        data-aos='zoom-in-up'
        data-aos-delay='8000'
        data-aos-once='false'
        className='text-5xl mb-[3%] font-bold text-center mx-1 md:mx-0 bg-gradient-to-r from-teal-500 via-blue-500 to-pink-500 text-transparent bg-clip-text '
      >
        Few Of Our Customers Showcase Client
      </div>
      <div className='grid grid-cols-3 mx-[5%]  gap-5'>
        {images.map((image, index) => (
          <div key={index} className=''>
            <img
              data-aos='zoom-in-up'
              data-aos-delay='8000'
              data-aos-once='false'
              className='object-cover  shadow-lg bg-[#a91717] rounded-2xl'
              src={image}
              alt={`Image ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Productsss;
