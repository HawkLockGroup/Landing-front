import HowItWorks from "@/components/sections/HowItWorks";
import Home from "@/components/sections/home/Home";
import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex ">
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">
            {/* {children} */}
            <Home />
            <HowItWorks />
          </div>
        </section>
      </div>
      toaster
    </main>
  );
}

export default layout;
