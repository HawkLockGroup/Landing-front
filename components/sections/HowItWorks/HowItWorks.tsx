import React, { useState, useRef, useEffect } from "react";
import { howItWorks } from "@/constants";
import Image from "next/image";

function HowItWorks() {
  const [selectedItem, setSelectedItem] = useState(0);
  const [nextItem, setNextItem] = useState(selectedItem);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [sectionVisible, setSectionVisible] = useState(false);
  const lastScrollTime = useRef<number>(performance.now());

  const handleWheelScroll = (e: React.WheelEvent) => {
    if (sectionRef.current) {
      const deltaY = e.deltaY;

      if (sectionVisible) {
        const now = performance.now();
        // debounce time is set to 500 for scroll smooth in items
        if (now - lastScrollTime.current > 1200) {
          if (deltaY > 0 && selectedItem < howItWorks.length - 1) {
            setSelectedItem((prev) => prev + 1);
          } else if (deltaY < 0 && selectedItem > 0) {
            setSelectedItem((prev) => prev - 1);
          }

          lastScrollTime.current = now;
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
      setNextItem((prev) => (prev + 1) % howItWorks.length);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [selectedItem]);

  const paginationBullets = Array.from(
    { length: howItWorks.length },
    (_, index) => (
      <button
        key={index}
        className={` h-2 w-2 rounded-full bg-[#fc38ff] focus:outline-none ${
          index === selectedItem ? "opacity-100" : "opacity-30"
        }`}
        onClick={() => setSelectedItem(index)}
      />
    )
  );

  // mobile touch
  const handleTouchStart = (e: React.TouchEvent) => {
    if (sectionRef.current) {
      lastScrollTime.current = performance.now();
    }
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    if (sectionRef.current && sectionVisible) {
      const now = performance.now();
      if (now - lastScrollTime.current > 1200) {
        const deltaY = e.touches[0].clientY - lastScrollTime.current;
        if (deltaY > 0 && selectedItem < howItWorks.length - 1) {
          setSelectedItem((prev) => prev + 1);
        } else if (deltaY < 0 && selectedItem > 0) {
          setSelectedItem((prev) => prev - 1);
        }
        lastScrollTime.current = now;
      }
    }
  };
  // mobile touch

  return (
    <section
      id="howItWorks"
      ref={sectionRef}
      className="relative grid w-full grid-cols-7 overflow-hidden scroll-smooth sm:flex"
      onWheel={handleWheelScroll}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onPointerEnter={() => {
        document.body.style.overflow = "hidden";
      }}
      onPointerLeave={() => {
        document.body.style.overflow = "auto";
      }}
    >
      <div
        className="relative col-span-6 flex flex-col justify-between overflow-hidden transition-transform duration-1000 sm:grid sm:grid-cols-7 sm:gap-4"
        style={{
          transform: `perspective(500px) rotateX(${selectedItem * 360}deg)`,
          transformOrigin: "center",
        }}
      >
        <div className="relative flex flex-col items-center gap-4 sm:col-span-3">
          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-[#6b1e72] to-[#ffffff] opacity-90 dark:from-[#6b1e72] dark:to-[#080B18]"></div>
          <h3 className="relative">{howItWorks[nextItem]?.heading}</h3>
          <p className="relative">{howItWorks[nextItem]?.paragraph}</p>
        </div>

        <div className="z-10 hidden  -translate-x-1/2 items-center justify-center gap-2 sm:col-span-1 sm:mx-auto sm:flex sm:flex-col">
          {paginationBullets}
        </div>

        <Image
          src="/assets/images/site-logo.png"
          alt="howklock"
          width={200}
          height={200}
          className="relative sm:col-span-3 sm:m-auto"
        />
      </div>

      <div className="col-span-1 flex -translate-x-1/2 flex-col items-end justify-center gap-2 sm:hidden">
        {paginationBullets}
      </div>
    </section>
  );
}

export default HowItWorks;
