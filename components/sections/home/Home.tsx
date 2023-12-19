import Image from "next/image";

function Home() {
  return (
    <section
      id="home"
      className="background-light800_dark400 text-dark100_light900 flex w-full flex-col gap-4 rounded-lg "
    >
      {/* Robust Security */}
      <div className="mx-auto flex flex-col gap-2 md:flex-row ">
        <div className="space-y-2 text-center md:text-start">
          <h1 className="h1-bold  ">
            HAWKLOCK: Pioneering the Escrow Revolution
          </h1>
          <p className="">
            Embark on a journey of unbreakable security and swift decentralized
            trades with HAWKLOCK
          </p>
        </div>
        <Image src="" alt="" width={20} height={20} className="" />
      </div>
    </section>
  );
}

export default Home;
