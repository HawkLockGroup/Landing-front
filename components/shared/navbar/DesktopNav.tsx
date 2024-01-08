"use client";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import { useEffect } from "react";
import { Link, Events, scrollSpy } from "react-scroll";

export default function DesktopNav() {
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
    <div className="hidden border-none lg:flex lg:flex-1">
      {/* flex w-full flex-row items-center justify-between xl:justify-center xl:gap-12 */}
      <section className="m-auto grid w-full grid-cols-5 ">
        {sidebarLinks.map((item) => {
          return (
            <div key={item.label}>
              <Link
                className="text-dark300_light900 m-auto flex cursor-pointer items-center justify-start gap-4 rounded-lg border-2 border-[#6b1e72] bg-transparent lg:p-2 2xl:w-[180px]"
                to={item.sectionId}
                spy={true}
                smooth={true}
                offset={5}
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
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
}
