import React, { useState, useRef, useEffect } from "react";
import { howItWorks } from "@/constants";
import Image from "next/image";

function HowItWorks() {
  const [selectedItem, setSelectedItem] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [sectionVisible, setSectionVisible] = useState(false);

  const handleWheelScroll = (e: React.WheelEvent) => {
    if (sectionRef.current) {
      const deltaY = e.deltaY;
      console.log(deltaY);
      if (sectionVisible) {
        // e.preventDefault();
        if (deltaY > 0 && selectedItem < howItWorks.length) {
          // Scrolling down within the section
          setSelectedItem((prev) => Math.min(prev + 1, howItWorks.length - 1));
        } else if (deltaY < 0 && selectedItem > 0) {
          // Scrolling up within the section
          setSelectedItem((prev) => Math.max(prev - 1, 0));
        }
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        // document.body.style.overflow = "hidden";
        const sectionRect = sectionRef.current.getBoundingClientRect();

        // Check if the section is partially visible
        if (sectionRect.top < window.innerHeight && sectionRect.bottom >= 0) {
          setSectionVisible(true);
          // document.body.style.overflow = "auto";
        } else {
          setSectionVisible(false);
        }
      }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionRef]);

  const progressPercentage = (selectedItem + 1) * (100 / howItWorks.length);

  return (
    <section
      id="howItWorks"
      ref={sectionRef}
      className={`relative w-full${sectionVisible ? "scrollable" : ""}`}
      onWheel={handleWheelScroll}
    >
      {/* Progress Line */}
      <div className="absolute left-0 top-0 z-10 h-full w-2 bg-gray-300">
        <div
          className="absolute left-0 top-0 w-full bg-blue-500"
          style={{ height: `${progressPercentage}%` }}
        />
      </div>

      {/* items */}
      <div className="p-10">
        {/* gradient bg */}
        <div className="absolute inset-0  border-2  border-[#6b1e72] bg-gradient-to-t from-[#6b1e72] to-[#ffffff] opacity-90 dark:from-[#6b1e72] dark:to-[#080B18]"></div>
        {/* img and content */}
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-col items-center gap-4">
            <h3 className="relative">{howItWorks[selectedItem]?.heading}</h3>
            <p className="relative">{howItWorks[selectedItem]?.paragraph}</p>
          </div>
          <Image
            src="/assets/images/site-logo.png"
            alt="howklock"
            width={50}
            height={50}
            className="relative mx-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
