import React from "react";
import Hero from "./hero/Hero";
import Professional from "./professional/Professional";
import About from "./about/About";
import Experience from "./experience/Experience";
import { SidebarContext } from "./store/SidebarContext";
import Overlay from "./ui/Overlay";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";

const Mian = (props) => {
  const { show, setShow } = React.useContext(SidebarContext);

  return (
    <div className=" bg-cream">
      {props.children}
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      {/* <Professional />
          <Portfolio />
          <Experience /> */}
    </div>
  );
};

export default Mian;
