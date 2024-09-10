"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import logoGBG from "./assets/logo-gbg.svg";
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
      <div style={menuStyle} className="absolute flex flex-col pb-9 pt-3 gap-4 w-[384px] text-black rounded-b-3xl bg-slate-500">
        <IoClose onClick={toggleMenu} size={50} className="mx-4"/>
        <ul className=" py-2 rounded-full w-3/5 text-center mx-auto bg-slate-200">Hem</ul>
        <ul className=" py-2 rounded-full w-3/5 text-center mx-auto bg-slate-200">Badges</ul>
        <ul className=" py-2 rounded-full w-3/5 text-center mx-auto bg-slate-200">Parker</ul>
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

