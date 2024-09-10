import Navbar from "./navbar";
import React from "react";
import Hero from "./hero";
import playground from "./assets/playgroundHero.jpg";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full relative">
      <div className="max-w-sm mx-auto h-full">
        <Image
          src={playground}
          alt="Playground"
          className="absolute z-[-1] max-w-sm mx-auto rounded-b-3xl"
        />
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}

