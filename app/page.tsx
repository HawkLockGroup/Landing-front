// <UserButton /> allows users to manage their account information and log out, completing the full authentication circle.
"use client";
import HowItWorks from "@/components/sections/HowItWorks/HowItWorks";
import Features from "@/components/sections/features/Features";
import Footer from "@/components/sections/footer/Footer";
import Home from "@/components/sections/home/Home";
import Token from "@/components/sections/token/Token";
import Animation from "@/components/shared/animation_bg/Animation";
import Navbar from "@/components/shared/navbar/Navbar";
import Image from "next/image";
export default function Page() {
  return (
    <div className="relative">
      {/* animation background */}
      <div className="absolute inset-0">
        <Animation />
      </div>
      {/* navbar */}
      <Navbar />
      {/* sections <main> */}
      <main className="relative z-10 mx-auto flex min-h-screen w-full flex-1 flex-col gap-20 p-6 pt-24 lg:px-20">
        <Home />
        <HowItWorks />
        <Image
          src="/test.svg"
          alt="howklock"
          width={600}
          height={600}
          className="mx-auto w-full"
        />
        <Features />
        <Token />
      </main>
      {/* footer */}
      <Footer />
      {/* toaster */}
    </div>
  );
}
