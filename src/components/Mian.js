import React from "react";
import Hero from "./hero/Hero";
import Professional from "./professional/Professional";
import About from "./about/About";
import Experiences from "./experience/Experiences";
import { SidebarContext } from "./store/SidebarContext";
import Overlay from "./ui/Overlay";
import Projects from "./projects/Projects";
import Skills from "./skills/Skills";
import Educations from "./education/Educations";
import Contact from "./contact/Contact";

const Mian = (props) => {
  const { show, setShow } = React.useContext(SidebarContext);

  return (
    <div className=" bg-cream">
      {props.children}
      <Hero />
      <About />
      <Experiences />
      <Projects />
      <Skills />
      <Educations />
      <Contact />
      {/* <Professional />
          <Portfolio />
          <Experience /> */}
    </div>
  );
};

export default Mian;
