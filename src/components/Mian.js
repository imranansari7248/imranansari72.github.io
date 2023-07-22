import React, { useRef } from "react";
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

const sections = [
  {
    id: "hero",
    component: <Hero />,
  },
  {
    id: "about",
    component: <About />,
  },
  {
    id: "experience",
    component: <Experiences />,
  },
  {
    id: "projects",
    component: <Projects />,
  },
  {
    id: "skills",
    component: <Skills />,
  },
  {
    id: "education",
    component: <Educations />,
  },
  {
    id: "contact",
    component: <Contact />,
  },
];

const Mian = (props) => {
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

      {/* <About ref={(el) => {ref.current['about'] = el}} />
      <Experiences ref={(el) => {ref.current['experience'] = el}} />
      <Projects ref={(el) => {ref.current['projects'] = el}}  />
      <Skills ref={(el) => {ref.current['skills'] = el}} />
      <Educations ref={(el) => {ref.current['education'] = el}} />
      <Contact ref={(el) => {ref.current['contact'] = el}} /> */}
      {/* <Professional />
          <Portfolio />
          <Experience /> */}
    </div>
  );
};

export default Mian;
