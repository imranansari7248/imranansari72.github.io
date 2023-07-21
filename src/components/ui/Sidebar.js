import React from "react";
import heroleft from "../../assets/images/heroleft.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarContext } from "../store/SidebarContext";

const Sidebar = () => {
  const { isMobile, show, setShow } = React.useContext(SidebarContext);

  let myClass = `${!isMobile ? "sticky" : "fixed"} ${
    !show && "hidden"
  }  h-screen top-0 w-[60%]  md:w-[30%] bg-white md:flex md:items-center md:justify-center z-10 shadow-2xl`;

  return (
    <aside className={myClass}>
      <div className="relative left-0 flex flex-col uppercase space-y-2 items-center">
        {/* profile */}

        <div className="absolute top-5 right-4 rounded-full shadow-darkblue shadow-sm hover:shadow-sm hover:scale-90 transition duration-200 md:hidden">
          <AiOutlineClose size={25} onClick={() => setShow(!show)} />
        </div>

        <div className="w-28 h-28 overflow-hidden border-4 rounded-full border-gray-600">
          <img src={heroleft} alt="" className="" />
        </div>

        {/* line braeak */}
        <div className="border-b-2 border-darkblue w-full border-opacity-50"></div>

        {/* Items */}
        <div className="flex flex-col pt-4 gap-2 md:gap-4">
          {" "}
          <a
            href="#"
            className="px-4 group flex cursor-pointer flex-col txt-semibold text-lg hover:text-lightblue hover:border-l-2 hover:border-b  hover:border-lightblue"
          >
            <h2 className="font-light">Home</h2>
          </a>
          <a
            href="#about"
            className="px-4 group flex cursor-pointer flex-col txt-semibold text-lg hover:text-lightblue hover:border-l-2 hover:border-b  hover:border-lightblue"
          >
            <h2 className="font-light">About</h2>
          </a>
          <a
            href="#experience"
            className="px-4 group flex cursor-pointer flex-col txt-semibold text-lg hover:text-lightblue hover:border-l-2 hover:border-b  hover:border-lightblue"
          >
            <h2 className="font-light">Experience</h2>
          </a>
          <a
            href="#projects"
            className="px-4 group flex cursor-pointer flex-col txt-semibold text-lg hover:text-lightblue hover:border-l-2 hover:border-b  hover:border-lightblue"
          >
            <h2 className="font-light">Projects</h2>
          </a>
          <a
            href="#skills"
            className="px-4 group flex cursor-pointer flex-col txt-semibold text-lg hover:text-lightblue hover:border-l-2 hover:border-b  hover:border-lightblue"
          >
            <h2 className="font-light">Skills</h2>
          </a>
          <a
            href="#education"
            className="px-4 group flex cursor-pointer flex-col txt-semibold text-lg hover:text-lightblue hover:border-l-2 hover:border-b  hover:border-lightblue"
          >
            <h2 className="font-light">Education</h2>
          </a>
          <a
            href="#contact"
            className="px-4 group flex cursor-pointer flex-col txt-semibold text-lg hover:text-lightblue hover:border-l-2 hover:border-b  hover:border-lightblue"
          >
            <h2 className="font-light">Contact</h2>
          </a>
          <a
            href="#"
            className="px-4 group flex cursor-pointer flex-col txt-semibold text-lg hover:text-lightblue hover:border-l-2 hover:border-b  hover:border-lightblue"
          >
            <h2 className="font-light">Resume</h2>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
