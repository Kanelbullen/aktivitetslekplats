import Navbar from "./components/navbar";
import React from "react";
import Hero from "./components/hero";
import playground from "./assets/playgroundHero.jpg";
import Image from "next/image";
import Footer from "./components/footer";
import ParksComponent from "./components/parksComponent/parksComponent";

export default function Home() {
  return (
      <div className=" mx-auto">
        <Image
          src={playground}
          alt="Playground"
          className="absolute z-[-1] mx-auto rounded-b-3xl object-cover h-[100vh]"
        />
        <div className="h-[100vh] flex flex-col">
          <Navbar />
          <Hero />
        </div>
        <ParksComponent />
        <Footer />

      </div>
  );
}

