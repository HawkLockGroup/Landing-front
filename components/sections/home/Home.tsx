"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  slideInFromBottom,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { useMediaQuery } from "@react-hook/media-query";
import { useEffect, useState } from "react";

function Home() {
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
      className="text-dark100_light900 w-full rounded-2xl border-2 border-[#FF00FF] bg-light-800  bg-opacity-[0.8] p-4 transition delay-100 duration-700  hover:scale-103 dark:bg-dark-400 dark:bg-opacity-[0.8]"
    >
      <div className="flex flex-col  md:grid md:grid-cols-5">
        {/* heading & paragraph */}
        <motion.div
          variants={isMediumScreen ? slideInFromTop(0.5) : slideInFromLeft(0.7)}
          className="gap-4 md:col-span-2 md:flex md:flex-col md:items-center md:justify-center md:gap-8 2xl:justify-start 2xl:gap-12 2xl:pt-72"
        >
          {/* main head */}
          <h1 className="home-heading">
            <span className="bg-gradient-to-r from-green-400 to-purple-400 bg-clip-text text-start text-transparent">
              {" "}
              HAWKLOCK
            </span>{" "}
            Pioneering the Escrow Revolution
          </h1>

          {/* main paragraph */}
          <p className="text-center text-xl md:text-start">
            Embark on a journey of unbreakable security and swift decentralized
            trades with HAWKLOCK.
          </p>
          <div className="hidden w-full justify-start md:flex">
            <button className="shadow__btn">
              <a
                href="https://www.google.com/"
                target="_blank"
                className="text-lg font-bold"
              >
                Discover the Future
              </a>
            </button>
          </div>
        </motion.div>

        {/* svg */}
        <motion.div
          className="mx-auto h-full w-full md:col-span-3"
          variants={
            isMediumScreen ? slideInFromBottom(0.5) : slideInFromRight(0.5)
          }
        >
          <Image
            src="/animation.svg"
            alt="howklock"
            width={600}
            height={600}
            className="mx-auto w-full"
          />
        </motion.div>
      </div>
      <div className="flex w-full justify-center md:hidden">
        <button className="shadow__btn">
          <a
            href="https://www.google.com/"
            target="_blank"
            className="text-lg font-bold"
          >
            Discover the Future
          </a>
        </button>
      </div>
    </motion.section>
  );
}

export default Home;
