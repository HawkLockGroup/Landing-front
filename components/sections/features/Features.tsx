import Image from "next/image";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

function Features() {
  return (
    <ParallaxProvider>
      <Parallax translateY={["-100px", "500px"]}>
        <section
          id="features"
          className="text-dark100_light900 relative flex h-[1020px] w-full flex-row items-center justify-around bg-green-500 p-40"
        >
          <Parallax translateX={["-20px", "100px"]}>
            <div className="">move right</div>
          </Parallax>
          <Parallax rotateY={[0, 1000]}>
            <Image
              src="/test.svg"
              alt="howklock"
              width={600}
              height={600}
              className="mx-auto w-full"
            />{" "}
          </Parallax>{" "}
          <Parallax translateX={["20px", "-100px"]}>
            <div className="text-end">move left</div>
          </Parallax>
        </section>
      </Parallax>
    </ParallaxProvider>
  );
}

export default Features;
