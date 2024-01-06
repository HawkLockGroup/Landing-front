import React, { useState, useRef, useEffect } from "react";
import { howItWorks } from "@/constants";
import Image from "next/image";

function HowItWorks() {
  const [selectedItem, setSelectedItem] = useState(0);
  const [nextItem, setNextItem] = useState(selectedItem); // State to hold the next item
  const sectionRef = useRef<HTMLElement | null>(null);
  const [sectionVisible, setSectionVisible] = useState(false);

  const handleWheelScroll = (e: React.WheelEvent) => {
    if (sectionRef.current) {
      const deltaY = e.deltaY;
      console.log(deltaY);
      if (sectionVisible) {
        if (deltaY > 0 && selectedItem < howItWorks.length) {
          setSelectedItem((prev) => Math.min(prev + 1, howItWorks.length - 1));
        } else if (deltaY < 0 && selectedItem > 0) {
          setSelectedItem((prev) => Math.max(prev - 1, 0));
        }
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        if (sectionRect.top < window.innerHeight && sectionRect.bottom >= 0) {
          setSectionVisible(true);
        } else {
          setSectionVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionRef]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Set the next item after a delay
      setNextItem((prev) => (prev + 1) % howItWorks.length);
    }, 500);

    return () => clearTimeout(timeoutId); // Cleanup the timeout on component unmount
  }, [selectedItem]);

  const progressPercentage = (selectedItem + 1) * (100 / howItWorks.length);

  return (
    <section
      id="howItWorks"
      ref={sectionRef}
      className={`relative w-full overflow-hidden ${
        sectionVisible ? " scrollable" : ""
      }`}
      onWheel={handleWheelScroll}
    >
      {/* progress bar */}
      <div className="absolute left-0 top-0 z-10 h-full w-2 bg-gray-300">
        <div
          className="absolute left-0 top-0 w-full bg-blue-500"
          style={{ height: `${progressPercentage}%` }}
        />
      </div>

      <div className="p-10">
        <div
          className="relative flex flex-row items-center justify-between transition-transform duration-1000"
          style={{
            transform: `perspective(500px) rotateX(${selectedItem * 360}deg)`,
            transformOrigin: "center",
          }}
        >
          <div className="absolute inset-0  border-2  border-[#6b1e72] bg-gradient-to-t from-[#6b1e72] to-[#ffffff] opacity-90 dark:from-[#6b1e72] dark:to-[#080B18]"></div>
          <div className="flex flex-col items-center gap-4">
            <h3 className="relative">{howItWorks[nextItem]?.heading}</h3>
            <p className="relative">{howItWorks[nextItem]?.paragraph}</p>
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
