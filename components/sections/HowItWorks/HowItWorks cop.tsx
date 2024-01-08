import Test from "./test";

function HowItWorks() {
  return (
    <section
      // onPointerEnter={() => {
      //   document.body.style.overflow = "hidden";
      // }}
      // onPointerLeave={() => {
      //   document.body.style.overflow = "auto";
      // }}
      id="howItWorks"
      className="zero-scrollbar relative grid h-[300vh] w-full grid-cols-7 overflow-hidden scroll-smooth text-dark-100 sm:flex"
    >
      <div className="bg-red-200 p-20">
        lock scroll
        <Test />
      </div>
    </section>
  );
}

export default HowItWorks;
