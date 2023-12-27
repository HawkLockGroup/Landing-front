import HowItWorks from "@/components/sections/HowItWorks";
import Features from "@/components/sections/features/Features";
import Home from "@/components/sections/home/Home";
import Animation from "@/components/shared/Animation";
import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* animation background */}
      <div className="absolute inset-0">
        <Animation />
      </div>
      {/* navbar */}
      <header>
        <Navbar />
      </header>
      {/* sections <main> */}
      <main className="relative z-10 mx-auto flex min-h-screen w-full flex-1 flex-col px-6 pt-16 lg:px-20 ">
        <Home />
        <HowItWorks />
        <Features />
      </main>
      toaster
    </div>
  );
}

export default layout;
