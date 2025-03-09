import React from "react";
import NavBar from "./components/Navbar";
import { Hero } from "./components/Hero";
import Partners from "./components/Partners";

import ScrollScalingImage from "./components/ScrollScale";
import Services from "./components/Services";
import ContactMe from "./components/Contact";

const App = () => {
  return (
    <div className="bg-slate-200">
      <NavBar />
      <Hero />
      <Partners />
      <ScrollScalingImage />
      <Services />
      <ContactMe />
    </div>
  );
};

export default App;
