import React from 'react'

const HeroPage = () => {
  return (
    <div
      className="bg-black h-[20vh] md:h-[85vh]  "
      style={{
        backgroundImage: `url("/banner1.png")`,
        backgroundSize: "contain",
        //  background-repeat: repeat-y;
        backgroundRepeat:"no-repeat"
      }}
    ></div>
  );
}

export default HeroPage