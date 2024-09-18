"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import logoGBG from "../assets/logo-gbg.svg";
import Image from "next/image";
import { useState, CSSProperties } from "react";
import React from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuStyle: CSSProperties = {
    transition: "transform 0.5s ease-in-out",
    transform: isOpen ? "translateY(0)" : "translateY(-100%)",
  };
  return (
    <div>
      <div style={menuStyle} className="absolute pb-9 pt-3 gap-4 w-full lg:w-[30%] text-black rounded-b-3xl bg-slate-500">
        <div className="grid grid-cols-6">

            <IoClose onClick={toggleMenu} size={50} className="  mx-auto my-2 rounded-lg "/>

          <ul className="flex flex-col col-span-4 my-2 gap-3">
            <li className="w-full h-[50px] content-center rounded-full  text-center mx-auto bg-slate-200">Hem</li>
            <li className="w-full h-[50px] content-center rounded-full  text-center mx-auto bg-slate-200">Badges</li>
            <li className="w-full h-[50px] content-center rounded-full  text-center mx-auto bg-slate-200">Parker</li>
          </ul>
        </div>
      </div>
      <div className=" flex flex-row align-top gap-10">
        <div className="px-4 py-8">
          <RxHamburgerMenu
            color="black"
            size={40}
            onClick={function () {toggleMenu(); console.log("menu is open")}}
          />
        </div>
        <div className="px-2 py-10 pt-14">
          <Image src={logoGBG} alt="Logo" width={150} height={50} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;

