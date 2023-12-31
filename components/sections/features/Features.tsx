import { features } from "@/constants";
import Image from "next/image";

function Features() {
  return (
    <section
      id="features"
      className="background-light800_dark400 text-dark100_light900 w-full rounded-2xl p-4 "
    >
      {/* <h1 className="home-heading">HOw it works</h1> */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((item, index) => (
          <div key={index} className="light-border p-6">
            <div className="mb-4 text-xl font-bold">{item.heading}</div>
            <p>{item.paragraph}</p>
          </div>
        ))}
      </div>{" "}
      <Image
        src="/test1.svg"
        alt="howklock"
        width={600}
        height={600}
        className="mx-auto w-full"
      />
    </section>
  );
}

export default Features;
