"use client";
import { motion } from "framer-motion";
import {
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { useMediaQuery } from "@react-hook/media-query";
import { useEffect, useState } from "react";
import { howItWorks } from "@/constants";

function HowItWorks() {
  const isMediumScreen = useMediaQuery("(max-width: 768px)");

  // This key will be used as a prop in the motion.section component to trigger a remount when its value changes.
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Update the key when isMediumScreen changes
    setKey((prevKey) => prevKey + 1);
    console.log(key);
  }, [isMediumScreen]);

  // This change in the key state triggers a re-render of the component with the updated key value.
  return (
    <motion.section
      key={key} // Add the key prop
      initial="hidden"
      animate="visible"
      id="home"
      className=" w-full text-dark-100 "
    >
      {/* main paragraph */}
      <motion.p
        variants={isMediumScreen ? slideInFromTop(0.5) : slideInFromLeft(0.7)}
        className=" text-center text-xl  dark:text-[#95A1B4] md:text-start"
      >
        Embark on a journey of unbreakable security and swift decentralized
        trades with HAWKLOCK.
      </motion.p>
      <div className=" grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 ">
        {howItWorks.map((item, index) => (
          <div
            // eslint-disable-next-line tailwindcss/no-custom-classname
            className={`top-${item.position.top} right-${item.position.right} bottom-${item.position.bottom} left-${item.position.left} relative  mx-auto w-[250px] transition delay-100 duration-700 hover:scale-103`}
            key={index}
          >
            {/* gradient bg */}
            <div className="absolute inset-0 rounded-2xl border-[1px]  border-[#6b1e72] bg-gradient-to-l from-[#6b1e72] to-[#ffffff] opacity-90 dark:from-[#6b1e72] dark:to-[#080B18]"></div>
            <div className="relative p-4">
              <h3 className="relative mb-1 text-[22px] font-semibold dark:text-[#EBF7FD]">
                {item.heading}
              </h3>
              <p className="text-base leading-5 tracking-tight dark:text-[#afb3bb]">
                {item.paragraph}
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}

export default HowItWorks;
