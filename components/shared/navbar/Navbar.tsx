"use client";
import Image from "next/image";
import Link from "next/link";
import Theme from "./Theme";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import Banner from "./Banner";
import { useEffect, useState } from "react";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollThreshold = 0.1; // Adjust this threshold as needed

      setShowNavbar(scrollTop > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {!showNavbar && <Banner />}
      {/* // HTML5 nav semantic tag */}
      <nav
        className={`background-light900_dark200 fixed z-50 flex w-full flex-row items-center justify-between gap-5 bg-light-900 p-6 shadow-light-300 transition-all duration-500 dark:shadow-none sm:px-12 lg:justify-normal ${
          showNavbar ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        // className="background-light900_dark200 fixed z-50 flex w-full flex-row justify-between gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12 lg:justify-normal"
      >
        {/* name&logo */}
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/images/site-logo.png"
            width={23}
            height={23}
            alt="HawkLock Image"
          />
          <p className="h2-bold font-spaceGrotesk text-dark-100 dark:text-light-900 max-sm:hidden">
            <span className="text-primary-500">HawkLock</span>
          </p>
        </Link>
        {/* desktop nv */}
        <DesktopNav />
        <div className="flex-between gap-5">
          {/* theme btn */}
          <Theme />
          {/* mobile nav */}
          <MobileNav />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
