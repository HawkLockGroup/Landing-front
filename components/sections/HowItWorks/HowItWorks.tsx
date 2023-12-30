"use client";
import { howItWorks } from "@/constants";
function HowItWorks() {
  return (
    <section
      id="HowItWorks"
      className="background-light800_dark400 text-dark100_light900 w-full rounded-2xl p-4 "
    >
      <h1 className="home-heading">HOw it works</h1>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {howItWorks.map((item, index) => (
          <div key={index} className="light-border  p-6">
            <div className="mb-4 text-xl font-bold">{item.heading}</div>
            <p>{item.paragraph}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HowItWorks;
