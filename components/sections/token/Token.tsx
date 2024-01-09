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

function Token() {
  return (
    <section
      id="token"
      className="relative w-full p-4 text-dark-100 transition delay-100 duration-700  hover:scale-103"
    >
      {/* gradient bg */}
      <div className="absolute inset-0 rounded-2xl border-2  border-[#6b1e72] bg-gradient-to-t from-[#6b1e72] to-[#ffffff] opacity-90 dark:from-[#6b1e72] dark:to-[#080B18]"></div>
      <div className="relative">token</div>
    </section>
  );
}

export default Token;
