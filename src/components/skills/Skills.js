import React from "react";
import Skill from "./Skill";
import { skills } from "../../assets/data";

const Skills = () => {
  return (
    <section id="skills">
      <div className="flex flex-col container bg-cream min-h-screen w-full">
        <h2 className="uppercase bg-darkblue text-cream py-10 w-full text-center text-2xl font-bold md:text-4xl">
          Skills
        </h2>

        <div className="my-6 mx-auto text-darkblue md:px-4">
          {skills.map((skill, index) => (
            <Skill key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
