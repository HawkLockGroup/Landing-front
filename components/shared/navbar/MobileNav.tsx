"use client";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NavContent = () => {
  const [activeSection, setActiveSection] = useState<string | null>(() => {
    // Get the active section from localStorage on component mount
    const storedActiveSection = localStorage.getItem("activeSection");
    return storedActiveSection ? JSON.parse(storedActiveSection) : null;
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = sidebarLinks.map((item) =>
        document.getElementById(item.sectionId)
      );
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          const newActiveSection = sidebarLinks[i].sectionId;
          setActiveSection(newActiveSection);

          // Store the active section in localStorage
          localStorage.setItem(
            "activeSection",
            JSON.stringify(newActiveSection)
          );

          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="flex w-full flex-col gap-6 pt-16 ">
      {sidebarLinks.map((item) => {
        const isActive = activeSection === item.sectionId;

        return (
          <SheetClose asChild key={item.label}>
            <Button
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              } flex items-center justify-start gap-4 bg-transparent p-4`}
              onClick={() => scrollToSection(item.sectionId)}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {item.label}
              </p>
            </Button>
          </SheetClose>
        );
      })}
    </section>
  );
};

function MobileNav() {
  return (
    <Sheet>
      {/* asChild prop is used to specify whether the component should be treated or rendered differently when used as a child meaning show st in component */}
      <SheetTrigger asChild>
        <Image
          alt="mobile menu"
          src="/assets/icons/hamburger.svg"
          width={36}
          height={36}
          className="active-theme-menu cursor-pointer lg:hidden"
        />
      </SheetTrigger>
      <SheetContent
        side="left"
        className="background-light900_dark200 border-none"
      >
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/images/site-logo.png"
            width={23}
            height={23}
            alt="SEALSED"
          />
          <p className="h2-bold text-dark100_light900 font-spaceGrotesk">
            <span className="bg-gradient-to-r from-[#00ff0d] to-[#00ff0d] bg-clip-text text-start text-transparent">
              SEALSED
            </span>{" "}
          </p>
        </Link>
        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>
          <SheetClose asChild>
            <Button className=" btn-secondary primary-gradient mt-24 min-h-[41px] w-full justify-center rounded-lg bg-transparent px-4 py-3 text-light-900 shadow-none">
              <a
                href="https://www.google.com/"
                target="_blank"
                className="text-lg font-bold"
              >
                Discover the Future
              </a>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
