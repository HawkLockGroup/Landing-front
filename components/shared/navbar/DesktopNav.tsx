"use client";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function DesktopNav() {
  const [activeSection, setActiveSection] = useState<string | null>(() => {
    // Get the active section from localStorage on component mount
    const storedActiveSection =
      typeof window !== "undefined"
        ? localStorage.getItem("activeSection")
        : null;
    return storedActiveSection ? JSON.parse(storedActiveSection) : null;
  });
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

        if (typeof window !== "undefined") {
          localStorage.setItem(
            "activeSection",
            JSON.stringify(newActiveSection)
          );
        }
        break;
      }
    }
  };
  useEffect(() => {
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
    <div className="background-light900_dark200 hidden border-none lg:flex lg:flex-1">
      <section className="flex w-full flex-row items-center justify-between xl:justify-center xl:gap-12">
        {sidebarLinks.map((item) => {
          const isActive = activeSection === item.sectionId;

          return (
            <div key={item.label}>
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
            </div>
          );
        })}
        <a href="/">
          <Button className="small-medium btn-secondary primary-gradient min-h-[41px] justify-center rounded-lg px-4 py-3 text-light-900 shadow-none">
            Go To App
          </Button>
        </a>
      </section>
    </div>
  );
}
