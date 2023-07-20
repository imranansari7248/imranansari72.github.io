import React from "react";
import MyTyped from "../ui/MyTyped";

const HeroRight = () => {
  return (
    <div className="flex flex-col text-gray-400 p-10 mx-10">
      <h2 className="flex flex-col text-4xl space-y-1 font-sans  font-extrabold text-white tracking-widest md:text-6xl">
        <span>
          Hi<span className="text-darkblue">,</span>I
          <span className="text-darkblue">'</span>m
        </span>
        <span>Imran</span>{" "}
        <span>
          Ansari <span className="text-darkblue -ml-3">.</span>
        </span>
      </h2>
      <div className=" flex mt-4 p-2 rounded-lg items-center text-cream w-40 font-semibold space-x-2 bg-darkblue">
        {" "}
        <h2 className="">A</h2>
        <div className="text-lightblue">
          <MyTyped strings={["DEVELOPER", "FAST LEARNER", "PYTHONIST"]} />
        </div>
      </div>

      <div className="mt-6 text-cream text-lg font-semibold max-w-2xl">
        <p>
          Self-driven, quick starter, passionate programmer with a curious mind
          who enjoys solving a complex and challenging real-world problems.
        </p>
      </div>

      <div className="flex max-w-xl space-x-2 mt-6 mb-24 ml-0">
        <a
          href="#"
          className="bg-darkblue px-4 py-2 rounded text-white text-lg shadow-lg font-semibold hover:bg-white hover:text-darkblue transition duration-300 border border-darkblue hover:border hover:border-darkblue hover:shadow-xl"
        >
          Download Resume
        </a>
        <a
          href="#"
          className="bg-white px-4 py-2 rounded text-darkblue text-lg shadow-lg font-semibold hover:bg-darkblue hover:text-white transition duration-300 border border-darkblue"
        >
          Contact Me
        </a>
      </div>
    </div>
  );
};

export default HeroRight;
