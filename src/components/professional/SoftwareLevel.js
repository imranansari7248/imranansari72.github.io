import React from "react";

const SoftwareLevel = (props) => {
  console.log(`${props.level/2}%`);
  return (
    <div className="flex space-x-5 my-6 items-center justify-center">
      <div className="w-24 text-right">{props.software}</div>
      <div class="w-1/2 bg-gray-200/50 h-6 rounded-full">
        <div
          class="bg-lightblue text-xs h-6 font-medium  text-center p-2 leading-none rounded-full "
          style={{width: `${props.level}%`}}
        >
          {" "}
          {props.level}%
        </div>
      </div>
    </div>
  );
};

export default SoftwareLevel;
