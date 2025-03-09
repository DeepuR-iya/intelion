import { easeInOut, easeIn, easeOut } from "motion";
import { motion } from "motion/react";
import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";

import ContactForm from "./Form";
import Carousel from "./carousel";

const ContactMe = () => {
  return (
    <div className="h-full w-full" id="contact">
      <div>{/* <Carousel /> */}</div>
      <div className="md:flex justify-center md:my-20">
        <motion.div
          whileHover={{
            backgroundColor: "black",
            color: "white",
            scale: 1.015,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: easeOut,
          }}
          className="md:w-[30%] mr-2 my-4 h-[50vh] rounded-lg flex flex-col justify-between p-8 border border-black hover:cursor-pointer"
        >
          <div>
            <p className="text-lg font-semibold font-open-sans mb-8">WORK</p>
            <h1 className="text-3xl font-bold font-open-sans">
              Our Projects & <br />
              Team
            </h1>
          </div>
          <div>
            <p className="text-lg font-semibold font-open-sans">
              Web & Mobile Development,Cloud Services
              <br />
              IT Consultation & More
            </p>
          </div>
        </motion.div>
        <motion.div
          whileHover={{
            backgroundColor: "black",
            color: "white",
            scale: 1.015,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: easeOut,
          }}
          className="md:w-[60%] my-4 mr-2 h-[50vh] rounded-lg flex flex-col justify-between p-8 border border-black hover:cursor-pointer"
        >
          <div>
            <p className="text-lg font-semibold font-open-sans mb-8">
              GET IN TOUCH
            </p>
            <h1 className="text-3xl font-bold font-open-sans">
              Let's Work.
              <br />
              Together
            </h1>
          </div>
          <div className="flex justify-between items-end">
            <p className="md:text-6xl text-3xl font-bold font-open-sans">
              Start a Project
            </p>

            <a>
              <button className="text-lg font-semibold font-open-sans px-2 py-1 flex items-center hover:scale-95 transition-all ease-in-out hover:cursor-pointer">
                Contact Us
                <HiArrowUpRight className="mx-2" />
              </button>
            </a>
          </div>
        </motion.div>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactMe;
