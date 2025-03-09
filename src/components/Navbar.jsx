import { useRef, useState } from "react";

import { motion } from "framer-motion";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isactive, setIsactive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();
  const handleHover = () => {
    setIsactive(!isactive);
    console.log("hovered on nav item");
  };
  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="md:flex z-50 sticky top-0 md:justify-between md:items-center bg-white px-4 py-1 font-semibold "
        ref={navRef}
      >
        <div
          className="flex justify-between items-center hover:cursor-pointer"
          id="logo"
        >
          <img src="/intelion.png" className="h-10 w-32" />

          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <div
          id="nav"
          className={`${
            isOpen ? "block" : "hidden"
          } md:block transition-all duration-300 ease-in`}
        >
          <ul
            className="md:flex justify-evenly items-center text-lg font-semibold"
            id="navItems"
          >
            <li
              className="py-2 md:py-0 transition-all duration-200 hover:translate-x-2 md:hover:translate-x-0"
              id="item1"
            >
              <Link
                to="home"
                className="mx-2 block hover:text-gray-500 hover:cursor-pointer"
                smooth={true}
                duration={500}
              >
                About us
              </Link>
            </li>
            <li
              className="py-2 md:py-0 transition-all duration-200 hover:translate-x-2 md:hover:translate-x-0"
              id="item3"
            >
              <Link
                to="partners"
                className="mx-2 block hover:text-gray-500 hover:cursor-pointer"
                smooth={true}
                duration={500}
              >
                Partners
              </Link>
            </li>
            <li
              className="py-2 md:py-0 transition-all duration-200 hover:translate-x-2 md:hover:translate-x-0"
              id="item2"
            >
              <Link
                to="services"
                className="mx-2 block hover:text-gray-500 hover:cursor-pointer"
                smooth={true}
                duration={500}
              >
                Services
              </Link>
            </li>
            <li
              className="py-2 md:py-0 transition-all duration-200 hover:translate-x-2 md:hover:translate-x-0"
              id="item4"
            >
              <Link
                to="contact"
                className="mx-2 block hover:text-gray-500 hover:cursor-pointer"
                smooth={true}
                duration={500}
              >
                Contact us
              </Link>
            </li>
            <button
              className="border-2 ml-4  border-black py-2 px-4 rounded-lg transition-all duration-200 hover:bg-[black] hover:text-white"
              id="item6"
            >
              Schedule a Consultation
            </button>
          </ul>
        </div>
      </motion.nav>
    </>
  );
};

export default NavBar;
