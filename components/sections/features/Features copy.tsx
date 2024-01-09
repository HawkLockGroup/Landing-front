import { features } from "@/constants";

function Features() {
  return (
    <section id="features" className="text-dark100_light900 w-full p-4 ">
      {/* <h1 className="home-heading">HOw it works</h1> */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-20 2xl:grid-cols-4 2xl:gap-24">
        {features.map((item, index) => (
          <div key={index} className="relative p-6">
            {/* bg moving border */}
            <div className="absolute inset-0 border-2 border-[#00ff0d] opacity-90"></div>
            <div className="absolute inset-0 border-2 border-[#00ff0d] opacity-90"></div>

            <div className="relative mb-4 text-xl font-bold">
              {item.heading}
            </div>
            <p className="relative">{item.paragraph}</p>
          </div>
        ))}
      </div>{" "}
    </section>
  );
}

export default Features;
