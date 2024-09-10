import Navbar from "./navbar";
import React from "react";
import Hero from "./hero";

export default function Home() {
  return (
    <main className="w-full">
      <div className="max-w-sm mx-auto h-f" >
      <Navbar/>
      <Hero/>
      </div>

      
      
    </main>
  );
}
