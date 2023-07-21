import React from "react";

const Experience = (props) => {
  return (
    <div className="bg-cream bg-opacity-80 text-darkblue flex flex-col max-w-sm md:max-w-2xl rounded-lg">
      <div className="flex flex-col justify-between items-center rounded-lg shadow-sm shadow-white px-4">
        {/* main header */}
        <div className="flex flex-col items-center justify-between w-full pb-2 pt-4 md:space-x-20 md:flex-row border-b border-gray-400">
          <h2 className="text-xl uppercase">{props.name}</h2>
          <h2 className="text-lg">{props.position}</h2>
        </div>

        {/* main content */}
        <div className="m-8 font-roboto text-sm leading-6 md:leading-9 md:text-md">
          <ul className=" list-disc">
            {props.description.map((desc, index) => {
              return <li key={index}>{desc}</li>;
            })}
            <li>
              <span className="px-2 font-bold">Tools:</span>
              {props.tools}
            </li>
          </ul>
          <div className="mt-4">{props.duration} | { props.place}</div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
