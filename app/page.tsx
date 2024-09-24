import Navbar from "./components/navbar";
import React from "react";
import Hero from "./components/hero";
import playground from "./assets/playgroundHero.jpg";
import Image from "next/image";
import Footer from "./components/footer";
import ParksComponent from "./components/parksComponent/parksComponent";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {

  return (
      <div className=" mx-auto">
        <Image
          src={playground}
          alt="Playground"
          priority={true}
          className="absolute z-[-1] mx-auto rounded-b-3xl object-cover translate-y-[-145.76px] h-[100vh]"
        />
        <div className=" flex flex-col">
          <Hero />
        </div>
        <ParksComponent/>

      </div>
  );
}

