"use client";
import Image from "next/image";

function Home() {
  return (
    <section
      id="home"
      className="background-light800_dark400 text-dark100_light900 w-full rounded-2xl px-4 "
    >
      <div className="flex flex-col md:grid md:grid-cols-5 md:gap-4">
        {/* heading & paragraph */}
        <div className="md:col-span-2 md:flex md:flex-col md:items-center md:justify-center md:gap-8 md:pb-32">
          <h1 className="home-heading">
            HAWKLOCK: Pioneering the Escrow Revolution
          </h1>
          <p className="text-center text-xl md:text-start">
            Embark on a journey of unbreakable security and swift decentralized
            trades with HAWKLOCK
          </p>
        </div>

        {/* animation */}
        <Image
          src="/animation.svg"
          alt="howklock"
          width={600}
          height={600}
          className="mx-auto w-full md:col-span-3"
        />
      </div>
    </section>
  );
}

export default Home;
