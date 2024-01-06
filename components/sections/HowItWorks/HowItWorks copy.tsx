import React, { useState, useRef, useEffect } from "react";
import { howItWorks } from "@/constants";

function HowItWorks() {
  const [selectedItem, setSelectedItem] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [sectionVisible, setSectionVisible] = useState(false);

  const handleBtnClick = (index: number) => {
    setSelectedItem(index);
  };

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
      className={`relative w-full text-dark-100 ${
        sectionVisible ? "scrollable" : ""
      }`}
      onWheel={handleWheelScroll}
    >
      <div className="h-full bg-red-200 text-white">
        {/* Progress Line */}
        <div className="absolute left-0 top-0 h-full w-2 bg-gray-300">
          <div
            className="absolute left-0 top-0 w-full bg-blue-500"
            style={{ height: `${progressPercentage}%` }}
          />
        </div>

        {/* Display selected item */}
        <div className="mt-4">
          <h3 className="">{howItWorks[selectedItem]?.heading}</h3>
          {/* Render other content of the selected item here */}
        </div>

        {/* Scrollable content */}
        <div className="mt-4 flex flex-col items-center">
          {howItWorks.map((item, index) => (
            <button
              key={index}
              className={`my-2 px-4 py-2 ${
                selectedItem === index ? "bg-blue-500" : "bg-gray-300"
              } text-black`}
              onClick={() => handleBtnClick(index)}
            >
              {item.heading}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
