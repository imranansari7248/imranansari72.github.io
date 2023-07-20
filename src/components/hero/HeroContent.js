import React from "react";

const HeroContent = (props) => {
  return (
    <div className={props.className}>
      <h2 className="text-xl font-semibold mb-6">React Developer</h2>
      <p className="leading-6">
        I am a React Developer passionate about crafting seamless user experiences.
        With expertise in React and its ecosystem, I specialize in building
        interactive web applications that are intuitive, efficient, and visually
        engaging. From developing reusable components to implementing state
        management with Redux or Context API, I strive to create clean and
        maintainable code.
      </p>
    </div>
  );
};

export default HeroContent;
