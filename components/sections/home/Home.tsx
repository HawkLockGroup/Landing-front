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
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BiShieldPlus } from "react-icons/bi";

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
      className="relative w-full p-4 text-dark-100 transition delay-100 duration-700  hover:scale-103"
    >
      {/* gradient bg */}
      <div className="absolute inset-0 rounded-2xl border-2  border-[#6b1e72] bg-gradient-to-t from-[#6b1e72] to-[#ffffff] opacity-90 dark:from-[#6b1e72] dark:to-[#080B18]"></div>

      <div className="relative flex  flex-col md:grid md:grid-cols-5">
        {/* heading & paragraph */}

        <div className=" space-y-2 md:col-span-2 md:flex md:flex-col md:items-center md:justify-start md:gap-6 md:pt-20 2xl:gap-12">
          {/* main head */}
          <motion.h1
            variants={
              isMediumScreen ? slideInFromTop(0.7) : slideInFromLeft(0.5)
            }
            className="home-heading "
          >
            <span className="bg-gradient-to-r from-[#00ff0d] to-[#ea00ff] bg-clip-text text-start text-transparent">
              {" "}
              SEALSED
            </span>{" "}
            Pioneering the Escrow Revolution
          </motion.h1>

          {/* main paragraph */}
          <motion.p
            variants={
              isMediumScreen ? slideInFromTop(0.5) : slideInFromLeft(0.7)
            }
            className="text-center text-xl dark:text-[#95A1B4] md:text-start"
          >
            Embark on a journey of unbreakable security and swift decentralized
            trades with SEALSED.
          </motion.p>
          <motion.div
            variants={slideInFromLeft(0.8)}
            className="hidden w-full justify-start md:flex"
          >
            <button className="shadow__btn">
              <a
                href="https://www.google.com/"
                target="_blank"
                className="flex flex-row justify-center gap-2 "
              >
                <BiShieldPlus size="28px" />

                <span>discover</span>
                <BsArrowRightCircleFill size="28px" />
              </a>
            </button>
          </motion.div>
        </div>

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
            className="mx-auto"
          />
        </motion.div>
      </div>
      <motion.div
        variants={slideInFromBottom(0.8)}
        className="relative flex w-full justify-center md:hidden"
      >
        <button className="shadow__btn">
          <a
            href="https://www.google.com/"
            target="_blank"
            className="flex flex-row justify-center gap-2 "
          >
            <BiShieldPlus size="28px" />

            <span>discover</span>
            <BsArrowRightCircleFill size="28px" />
          </a>
        </button>
      </motion.div>
    </motion.section>
  );
}

export default Home;
