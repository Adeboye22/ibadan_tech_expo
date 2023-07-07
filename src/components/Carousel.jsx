import { useEffect } from "react";
import { useState } from "react";
import line from "../assets/hero/Ibadantechexpo/Line 9.png";

export default function Carousel({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 4000,
}) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr == 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr == slides.length - 1 ? 0 : curr + 1));

  useEffect(() => {
    if (!autoSlide) return;
    const slideIntervaal = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideIntervaal);
  }, []);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="text-xl tracking-tighter absolute top-[23%] left-1.5 inset-0 md:leading-8 md:text-4xl md:top-8 md:left-20 z-10  text-white">
        <h2 className=" font-bold md:py-4 ">International Conference Center</h2>
        <h2 className=" font-bold">University of Ibadan (ICC)</h2>
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <div className="invisible md:visible h-full lg:pl-10 relative">
          <div className="-rotate-90 text-white">
            <span className="absolute -left-14 bottom-0 text-lg">VENUE</span>
          </div>
          <img
            style={{}}
            src={line}
            className=" h-full w-0.5"
          />
          <div className="rotate-90 text-white">
            <span className="absolute text-lg -left-4">*</span>
          </div>
        </div>

        <div className="text-sm lg:pr-10 h-full md:text-lg">
          <div className="-rotate-90 text-white">
            <span className="absolute -left-1 md:-left-4 ">*</span>
          </div>
          <img
            style={{}}
            src={line}
            className=" h-full w-0.5"
          />{" "}
          <div className="rotate-90 text-white">
            <span className="text-[8px] -left-6 -bottom-1 md:text-lg absolute md:-left-14 md:bottom-0">
              VENUE
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
