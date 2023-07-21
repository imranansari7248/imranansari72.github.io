import React from "react";
import logo from "../../assets/images/logo-light.png";
import Hmaburger from "./Hamburger";
import { SidebarContext } from "../store/SidebarContext";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const { show, setShow } = React.useContext(SidebarContext);
  return (
    <nav className="absolute top-0 right-0 left-0 flex items-center justify-between px-10 pt-2 bg-darkblue bg-opacity-50 text-white md:justify-center">
      {/* <Hmaburger /> */}
      <div className="hover:scale-110 duration-200 md:hidden">
        <AiOutlineMenu size={25} onClick={() => setShow(!show)} />
      </div>
      <a
        href="#"
        className=" max-w-[80px] md:max-w-[110px] hover:decoration-none cursor-pointer"
      >
        <img src={logo} alt="logo" />
      </a>
    </nav>
  );
};

export default Navbar;
