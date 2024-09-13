import React from "react";
import { FaChevronDown } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="text-white flex flex-col h-full">
      <div className="w-full text-center flex items-center h-[80%] justify-center text-black text-3xl">
        "Enkelt att ha kul"
      </div>
      <div className="w-full flex items-center h-[20%] justify-center">
        <FaChevronDown size={45} color="black" />
      </div>
    </div>
  );
};

export default Hero;
