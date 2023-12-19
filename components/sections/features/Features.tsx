function Features() {
  return (
    <section
      id="features"
      className="w-full rounded-lg background-light800_dark400 text-dark100_light900 text-center md:text-start flex flex-col gap-4"
    >
      {/* Robust Security */}
      <div className="flex flex-col gap-2 md:flex-row mx-auto ">
        <div className="space-y-2">
          <h1 className="h1-bold  ">Robust Security</h1>
          <p className="">
            HAWKLOCK prioritizes your asset safety above all. Leveraging
            state-of-the-art security protocols alongside robust smart contract
            technology, we ensure each transaction is not only secure but also
            transparently conducted, providing you with a fortress of trust and
            reliability around the clock
          </p>
        </div>
      </div>
      {/* Efficient Trading */}
      <div className="flex flex-col gap-2 md:flex-row mx-auto ">
        <div className="space-y-2">
          <h1 className="h1-bold  ">Efficient Trading</h1>
          <p className="">
            Time is a valuable asset in trading, and HAWKLOCK respects this. Our
            platform is engineered for speed, facilitating rapid transactions
            without compromising clarity or accuracy. Step into a world where
            efficiency meets precision, ensuring your trading experience is both
            swift and seamless
          </p>
        </div>
      </div>
      {/* Integrity in Arbitration */}
      <div className="flex flex-col gap-2 md:flex-row mx-auto ">
        <div className="space-y-2">
          <h1 className="h1-bold  ">Integrity in Arbitration</h1>
          <p className="">
            At HAWKLOCK, integrity is the cornerstone of our community-driven
            arbitration process. Empower your transactions by choosing from a
            cadre of esteemed arbiters, committed to fairness and balance. Our
            democratic governance model is designed to reflect the collective
            voice of our users, fostering a transparent and equitable trading
            environment
          </p>
        </div>
      </div>{" "}
      {/* Reliable Asset Transfers */}
      <div className="flex flex-col gap-2 md:flex-row mx-auto ">
        <div className="space-y-2">
          <h1 className="h1-bold  ">Reliable Asset Transfers</h1>
          <p className="">
            Experience the convenience of instant asset transfers with HAWKLOCK.
            Our system is tailored for prompt and secure exchanges, minimizing
            wait times and maximizing trading efficacy. The HAWKLOCK Token (HWT)
            anchors our ecosystem, offering a dependable and swift medium for
            all your transactional needs, epitomizing our commitment to a
            user-centric, secure trading platform
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
