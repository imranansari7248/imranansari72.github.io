import React, {useState} from "react";
import "./Hamburger.css";
import { SidebarContext } from "../store/SidebarContext";

const Hmaburger = () => {
  const { show, setShow } = React.useContext(SidebarContext);
  
  return (
    <div className="md:hidden">
      <button
        className={`${
          show && "open"
        } z-40 block hamburger focus:outline-none`}
        onClick={() => setShow(!show)}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
    </div>
  );
};

export default Hmaburger;
