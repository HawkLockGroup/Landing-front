// <UserButton /> allows users to manage their account information and log out, completing the full authentication circle.
"use client";

import HowItWorks from "@/components/sections/HowItWorks/HowItWorks";
import Features from "@/components/sections/features/Features";
import Footer from "@/components/sections/footer/Footer";
import Home from "@/components/sections/home/Home";
import Animation from "@/components/shared/Animation";
import Navbar from "@/components/shared/navbar/Navbar";
export default function Page() {
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
      <main className="relative z-10 mx-auto flex min-h-screen w-full flex-1 flex-col gap-12 px-6 pt-16 lg:px-20">
        <Home />
        <HowItWorks />
        <Features />
      </main>
      {/* footer */}
      <Footer />
      {/* toaster */}
    </div>
  );
}
