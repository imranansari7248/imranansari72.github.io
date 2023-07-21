import React from "react";
import { experiences } from "../../assets/data";
import Experience from "./Experience";


const Experiences = () => {
  return (
    <section id="experience">
      <div className=" flex flex-col space-y-10 items-center justify-center relative py-12 container min-h-screen bg-experience-bg bg-cover bg-center bg-fixed text-darkblue">
        <h2 className=" uppercase text-4xl font-bold text-center  text-cream">
          Experience
        </h2>
        {experiences.map((experience) => {
          return <Experience key={experience.id} {...experience} />;
        })}

      </div>
    </section>
  );
};

export default Experiences;
