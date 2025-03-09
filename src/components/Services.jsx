import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="bg-black text-white h-full pb-36" id="services">
      <div>
        <h1 className="text-4xl font-bold ml-8 pt-10">HOW WE DO!</h1>
        <p className="ml-8 text-xl font-semibold">
          We offer Services that help you grow your business.
        </p>
      </div>
      <div className="ml-8 my-10">
        <h1 className="text-2xl font-semibold mb-10">Our Services</h1>
        <div className=" grid place-items-center md:grid-cols-3 grid-1 gap-8">
          <motion.div
            className="md:w-[18vw] rounded-md text-black w-64 p-4 h-[40vh]  bg-white flex flex-col items-start justify-around transition-all duration-500 "
            style={{
              clipPath: "polygon(85% 0, 100% 13%, 100% 100%, 0 100%, 0 0)",
            }}
          >
            <img src="/service.png" className="md:h-28 md:w-28 h-12 w-12" />
            <h1 className="md:text-2xl text-xl font-bold">Managed Services</h1>
            <p className="font-medium text-xs md:text-lg text-gray-700 ">
              Free up your internal resources to focus on the business by
              letting us handle day to day support services, management, and
              monitoring of your IT.
            </p>
          </motion.div>
          {/* ..................................... */}
          <div
            className="md:w-[18vw] rounded-md text-black w-64 p-4 h-[40vh] bg-white flex flex-col items-start justify-around  transition-all duration-500 "
            style={{
              clipPath: "polygon(85% 0, 100% 13%, 100% 100%, 0 100%, 0 0)",
            }}
          >
            <img src="/consult.png" className="md:h-44 md:w-28 h-12 w-12" />
            <h1 className="md:text-2xl text-xl font-bold">
              IT Consulting & Advisory
            </h1>
            <p className="font-medium text-xs md:text-lg text-gray-700 ">
              {" "}
              The right technology, implemented properly, appropriately managed
              and monitored, can lead to significant gains in growth
            </p>
          </div>
          {/* ..................................... */}
          <div
            className="md:w-[18vw] rounded-md text-black w-64 p-4 h-[40vh] bg-white flex flex-col items-start justify-around  transition-all duration-500 "
            style={{
              clipPath: "polygon(85% 0, 100% 13%, 100% 100%, 0 100%, 0 0)",
            }}
          >
            <img src="/cyber.png" className="md:h-28 md:w-28 h-12 w-12" />
            <h1 className="md:text-2xl text-xl font-bold">Cyber Security</h1>
            <p className="font-medium text-xs md:text-lg text-gray-700 ">
              {" "}
              Our experts can identify vulnerabilities, assess risks, and
              implement robust security measures to safeguard your systems and
              data.
            </p>
          </div>
          {/* ..................................... */}
          <div
            className="md:w-[18vw] rounded-md text-black w-64 p-4 h-[40vh] bg-white flex flex-col items-start justify-around  transition-all duration-500 "
            style={{
              clipPath: "polygon(85% 0, 100% 13%, 100% 100%, 0 100%, 0 0)",
            }}
          >
            <img src="/web.png" className="md:h-28 md:w-28 h-12 w-12" />
            <h1 className="md:text-2xl text-xl font-bold">Web Development</h1>
            <p className="font-medium text-xs md:text-lg text-gray-700 ">
              {" "}
              Our web development services can help you establish an impactful
              online presence and reach your target audience effectively.
            </p>
          </div>
          {/* ..................................... */}
          <div
            className="md:w-[18vw] rounded-md text-black w-64 p-4 h-[40vh] bg-white flex flex-col items-start justify-around  transition-all duration-500 "
            style={{
              clipPath: "polygon(85% 0, 100% 13%, 100% 100%, 0 100%, 0 0)",
            }}
          >
            <img src="/mobile.png" className="md:h-28 md:w-28 h-12 w-12" />
            <h1 className="md:text-2xl text-xl font-bold">
              Mobile Development
            </h1>
            <p className="font-medium text-xs md:text-lg text-gray-700 ">
              We can help you create a customized mobile app that aligns with
              your brand and goals, with expertise in various mobile platforms.
            </p>
          </div>
          {/* ..................................... */}
          <div
            className="md:w-[18vw] rounded-md text-black w-64 p-4 h-[40vh] bg-white flex flex-col items-start justify-around  transition-all duration-500 "
            style={{
              clipPath: "polygon(85% 0, 100% 13%, 100% 100%, 0 100%, 0 0)",
            }}
          >
            <img src="/cloud.png" className="md:h-28 md:w-28 h-12 w-12" />
            <h1 className="md:text-2xl text-xl font-bold">Cloud Services</h1>
            <p className="font-medium text-xs md:text-lg text-gray-700 ">
              With our expertise in cloud technologies, we can help you find the
              right cloud solutions that meet your business needs and goals.
            </p>
          </div>
        </div>
      </div>
      <div className="ml-24 ">
        <button className="px-2 py-1 bg-black font-bold rounded-lg cursor-pointer hover:bg-white border text-white hover:text-black transition-all">
          View All Services
        </button>
      </div>
    </div>
  );
};

export default Services;

// Managed Services
// Free up your internal resources to focus on the business by letting us handle day to day support services, management, and monitoring of your IT.
// Learn more
// IT Consulting & Advisory
// The right technology, implemented properly, appropriately managed and monitored, can lead to significant gains in growth
// Learn more
// Cyber Security
// Our experts can identify vulnerabilities, assess risks, and implement robust security measures to safeguard your systems and data.
// Learn more
// Web Development
// Our web development services can help you establish an impactful online presence and reach your target audience effectively.
// Learn more
// Mobile Development
// We can help you create a customized mobile app that aligns with your brand and goals, with expertise in various mobile platforms.
// Learn more
// Cloud Services
// With our expertise in cloud technologies, we can help you find the right cloud solutions that meet your business needs and goals.
