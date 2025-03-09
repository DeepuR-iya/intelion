import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Cards from "../Cards";

const Data = [{ id: 1, name: "Cost Effectiveness", img: "/cost.png" }];
const ScrollScalingImage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"], // Triggers animation throughout the section
  });

  // Scale transformation from 1 to 1.5 as user scrolls
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1.2]);

  return (
    <>
      <div className="my-10">
        <div>
          <h1 className="text-4xl font-bold ml-8">WHAT WE DO!</h1>
          <p className="ml-8 text-xl font-semibold">
            We simplify IT for this complex world.
          </p>
        </div>
        <Cards />
        <div className="flex flex-col items-center justify-around">
          <h1 className="md:text-5xl text-2xl text-center font-bold md:mt-10">
            Step into a{" "}
            <span className="bg-neutral-950 shadow-2xl shadow-black text-white px-1 rounded-sm mr-1">
              SAFE
            </span>
            ,{" "}
            <span className="bg-neutral-950 shadow-2xl shadow-black text-white px-1 rounded-sm mr-1">
              SECURE
            </span>{" "}
            &{" "}
            <span className="bg-neutral-950 shadow-2xl shadow-black text-white px-1 rounded-sm mr-1">
              SMART
            </span>{" "}
            Tech Future.
            <br />
          </h1>
          {/* <span className="bg-neutral-950 md:text-5xl text-white text-2xl md:ml-96 p-1 text-center font-bold my-4">
            - with Intelion
          </span> */}
        </div>
      </div>
      <div className="h-[150vh] overflow-y-hidden md:mt-40  flex justify-center items-end  overflow-x-hidden">
        <div
          ref={ref}
          className="relative h-screen flex items-center justify-center"
        >
          <motion.img
            src="/scale2.jpg"
            alt="Scaling Image"
            style={{ scale }}
            className="h-auto rounded-t-2xl  shadow-lg w-full "
          />
        </div>
      </div>
    </>
  );
};

export default ScrollScalingImage;
