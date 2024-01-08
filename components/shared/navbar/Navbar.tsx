"use client";
import dynamic from "next/dynamic";
// import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Theme from "./Theme";
import MobileNav from "./MobileNav";
// import Banner from "./Banner";

function Navbar() {
  const DesktopNavRenderClient = dynamic(
    () => import("@/components/shared/navbar/DesktopNav"),
    { ssr: false }
  );

  // const [showNavbar, setShowNavbar] = useState(false);
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     const scrollThreshold = 0.1;
  //     setShowNavbar(scrollTop > scrollThreshold);
  //   };
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      {/* {!showNavbar && <Banner />} */}
      <header className="fixed inset-x-6 z-50 mx-auto my-0 flex h-[72px] flex-row items-center justify-between gap-5 rounded-lg border-2 border-[#6b1e72]  bg-[#fcf8fc] px-4 py-1 opacity-95  transition-all duration-500 dark:bg-[#080B18] sm:px-12 lg:inset-x-20 lg:justify-center lg:px-20">
        {/* name&logo */}
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/images/site-logo.png"
            width={23}
            height={23}
            alt="SEALSED Image"
          />
          <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
            <span className="bg-gradient-to-r from-[#00ff0d] to-[#00ff0d] bg-clip-text text-start text-transparent">
              SEALSED
            </span>
          </p>
        </Link>

        {/* desktop nv */}
        <DesktopNavRenderClient />
        <div className="flex items-center justify-between gap-5">
          {/* theme btn */}
          <Theme />

          {/* mobile nav */}
          <MobileNav />
        </div>
      </header>
    </>
  );
}

export default Navbar;
