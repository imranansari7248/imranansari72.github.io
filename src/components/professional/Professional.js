import React from "react";
import HeroContent from "../hero/HeroContent";
import SoftwareLevel from "./SoftwareLevel";

const Professional = () => {
  return (
    <section id="professional">
      <div className=" container min-h-screen w-screen bg-professional-bg bg-cover bg-no-repeat bg-center bg-fixed text-white">

        <div className="flex flex-col items-center justify-center">
          <h2 className="text-6xl font-semibold mt-96">Professional</h2>
          <p className="mt-4">MY KNOWLEDGE LEVEL IN SOFTWARE</p>
        </div>

        <div className="mx-6 py-24">
          <SoftwareLevel software={'React'} level={90}  />
          <SoftwareLevel software={'JavaScript'} level={75}  />
          <SoftwareLevel software={'JavaScript'} level={85}  />
          <SoftwareLevel software={'JavaScript'} level={80}  />
        </div>
      </div>
    </section>
  );
};

export default Professional;
