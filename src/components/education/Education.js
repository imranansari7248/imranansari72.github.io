import React from "react";

const Education = ({university, place, degree, cgpa, duration}) => {
    const paraClass = "flex px-2 md:px-4 text-sm md:text-lg";
    const spanClass = "font-bold flex";
  return (
    <div className="flex flex-col w-auto md:min-w-auto space-y-3 md:p-8 px-4 md:px-6 py-8 md:py-10 md:mx-10 my-12 md:my-24 items-start justify-start bg-cream bg-opacity-80 rounded shadow-md">
      <h2 className="text-md px-4 pb-2 md:pb-4 md:px-6 md:text-xl font-semibold md:font-bold">{university}</h2>
      <div className="border-b border-darkblue w-full mb-2"></div>
      <p className={paraClass}>{place}</p>
      <p className={paraClass}>
        <span className={spanClass}>Degree: </span>
        {" " + degree}
      </p>
      <p className={paraClass}>
        <span className={spanClass}>CGPA: </span>
        <span>{" " + cgpa}</span>
      </p>
      <p className={paraClass }>{" " + duration}</p>
    </div>
  );
};

export default Education;
