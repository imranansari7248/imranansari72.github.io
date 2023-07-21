import React from "react";

const Skill = ({ name, skills }) => {
  return (
    <div className="px-2 py-4 md:px-8 md:py-10 bg-white my-6 rounded shadow-xl">
      <h2 className="text-2xl px-2 py-4 mb-4 text-lightblue border-b-2 md:text-4xl">{name}</h2>
      <div className="grid grid-cols-3 gap-6 md:grid-cols-5 md:gap-12">
        {skills.map((skill, index) => {
          return (
            <div
              key={index}
              className="flex flex-col my-2 items-center justify-center space-y-2 md:my-6"
            >
              <img
                src={skill.img} 
                alt={skill.name}
                className="w-12 h-12 md:w-20 md:h-20"
              />
              <p className="text-sm text-center font-roboto p-2 md:text-lg">{skill.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skill;
