import React from "react";

const Education = ({university, place, degree, cgpa, duration}) => {
    const paraClass = "flex px-2 md:px-4 text-sm md:text-lg";
    const spanClass = "font-bold flex";
  return (
    <div className="flex flex-col mx-12 p-4 space-y-3 mt-6 md:mt-20 md:p-8 px-4 md:px-6 md:py-10 md:mx-10 my-12 md:my-24 items-start justify-start bg-cream bg-opacity-80 rounded shadow-md">
      <h2 className="text-md px-4 pb-2 md:pb-4 md:px-6 md:text-xl font-semibold md:font-bold border-b border-darkblue">{university}</h2>
      <p className={paraClass}>{place}</p>
      <p className={paraClass}>
        <span className={spanClass}>Degree: </span>
        {degree}
      </p>
      <p className={paraClass}>
        <span className={spanClass}>CGPA: </span>
        <span>{cgpa}</span>
      </p>
      <p className={paraClass}><span className={spanClass}>Duration: </span> {duration}</p>
    </div>
  );
};

export default Education;
