"use client";
import { Parallax } from "react-scroll-parallax";
import { ScrollContainer } from "@/components/shared/scroll/ScrollContainer";
export default function Test() {
  return (
    <Parallax
      translateX={["-400px", "0px"]}
      scale={[0.75, 1]}
      rotate={[-180, 0]}
      easing="easeInQuad"
      // onEnter={() => {
      //   document.body.style.overflow = "hidden";
      // }}
      // onExit={() => {
      //   document.body.style.overflow = "auto";
      // }}
    >
      <div className="h-48 w-48 bg-red-500" />
    </Parallax>
  );
}
