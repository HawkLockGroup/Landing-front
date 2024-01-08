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
import { useEffect } from "react";
import { Events, scrollSpy, Link as ScrollLink } from "react-scroll";

const NavContent = () => {
  useEffect(() => {
    Events.scrollEvent.register("begin", (to, element) => {
      console.log("begin", to, element);
    });
    Events.scrollEvent.register("end", (to, element) => {
      console.log("end", to, element);
    });
    scrollSpy.update();
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);
  return (
    <section className="flex w-full flex-col gap-6 pt-16 ">
      {sidebarLinks.map((item) => {
        return (
          <SheetClose asChild key={item.label}>
            <ScrollLink
              className="text-dark300_light900 m-auto flex w-[180px] cursor-pointer items-center justify-start gap-4 rounded-lg border-2 border-[#6b1e72] bg-transparent p-2"
              to={item.sectionId}
              spy={true}
              smooth={true}
              offset={20}
              duration={500}
              activeClass="active_section"
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
              />
              <p>{item.label}</p>
            </ScrollLink>
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
          className="active-theme-menu cursor-pointer dark:invert lg:hidden"
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
