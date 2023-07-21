import React from "react";
import Education from "./Education";
import { educations } from "../../assets/data";

const Educations = () => {
  return (
    <section id="education">
      <div className="min-h-screen w-full bg-education-bg bg-fixed bg-center bg-cover bg-no-repeat text-cream text-center">
        <h2 className="uppercase text-4xl font-bold py-10">Educations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 md:flex-row justify-center mx-12 text-darkblue">
          {educations.map((education) => {
            return <Education key={education.id} {...education} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Educations;
