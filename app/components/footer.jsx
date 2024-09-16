import React from "react";
import logoGBG from "../assets/logo-gbg.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className=" bg-gray-500 px-6 py-3 flex flex-col gap-6">
       <Image src={logoGBG} alt="Logo" width={150} height={50} />
      <div className="flex flex-row">
        <div className="w-1/2">
            <div className=" underline underline-offset-1">d</div>
            <div className=" underline underline-offset-1">d</div>
        </div>
        <div className="w-1/2">
            <div className=" underline underline-offset-1">d</div>
            <div className=" underline underline-offset-1">d</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
