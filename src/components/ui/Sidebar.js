import React from "react";
import heroleft from "../../assets/images/heroleft.png";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarContext } from "../store/SidebarContext";

const Sidebar = () => {
  const { isMobile, show, setShow } = React.useContext(SidebarContext);

  let myClass = `${!isMobile ? "sticky" : "fixed"} ${
    !show && "hidden"
  }  h-screen top-0 pl-4 pr-16 md:pr-24 bg-white md:flex z-10 shadow-2xl`;

  return (
    <aside className={myClass}>
      <div className="relative left-0 flex flex-col uppercase space-y-2 items-start pt-10">
        {/* profile */}

        <div className="absolute top-5 -right-10 rounded-full shadow-darkblue shadow-sm hover:shadow-sm hover:scale-90 transition duration-200 md:hidden">
          <AiOutlineClose size={25} onClick={() => setShow(!show)}/>
        </div>

        <div className="w-28 h-28 ml-10 overflow-hidden border-4 rounded-full border-gray-600">
          <img src={heroleft} alt="" className="" />
        </div>

        {/* line braeak */}
        <div className="border-t-2 border-darkblue w-full border-opacity-50"></div>

        {/* Items */}
        <a className="px-4 group flex cursor-pointer flex-col txt-semibold text-lg hover:text-lightblue hover:border-l-2 hover:border-b  hover:border-lightblue">
          <h2 className="font-aght">Home</h2>
        </a>
        <a className="px-4 group flex cursor-pointer flex-col txt-semibold text-lg hover:text-lightblue hover:border-l-2 hover:border-b  hover:border-lightblue">
          <h2 className="font-aght">About</h2>
        </a>
        <a className="px-4 group flex cursor-pointer flex-col txt-semibold text-lg hover:text-lightblue hover:border-l-2 hover:border-b  hover:border-lightblue">
          <h2 className="font-aght">Experience</h2>
        </a>
        <a className="px-4 group flex cursor-pointer flex-col txt-semibold text-lg hover:text-lightblue hover:border-l-2 hover:border-b  hover:border-lightblue">
          <h2 className="font-aght">Projects</h2>
        </a>
        <a className="px-4 group flex cursor-pointer flex-col txt-semibold text-lg hover:text-lightblue hover:border-l-2 hover:border-b  hover:border-lightblue">
          <h2 className="font-aght">Skills</h2>
        </a>
        <a className="px-4 group flex cursor-pointer flex-col txt-semibold text-lg hover:text-lightblue hover:border-l-2 hover:border-b  hover:border-lightblue">
          <h2 className="font-aght">Education</h2>
        </a>
        <a className="px-4 group flex cursor-pointer flex-col txt-semibold text-lg hover:text-lightblue hover:border-l-2 hover:border-b  hover:border-lightblue">
          <h2 className="font-aght">Contact</h2>
        </a>
        <a className="px-4 group flex cursor-pointer flex-col txt-semibold text-lg hover:text-lightblue hover:border-l-2 hover:border-b  hover:border-lightblue">
          <h2 className="font-aght">REsume</h2>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
