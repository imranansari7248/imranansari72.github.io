import React, { useEffect,useState, useRef } from "react";
import heroleft from "../../assets/images/heroleft.jpg";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarContext } from "../store/SidebarContext";

const Sidebar = () => {
  const { isMobile, show, setShow, observerRefs } = React.useContext(SidebarContext);
  const [visibleKey, setVisibleKey] = useState(0);
  const observers = useRef([]);

  const active = " text-lightblue border-l-2 border-b border-lightblue scale-110 shadow transition duration-200";

  const onClick = (item, key) => {
    setVisibleKey(key);
  };

  const observerCallback = async (e, key) => {
    if (e.length && e[0].isIntersecting) {
      setVisibleKey(key);
      console.log(e[0].target.id, key)
    }
  };

  useEffect(() => {
    if (observerRefs.current?.length && observers.current) {
      Array.from(Array(10).keys()).forEach((_u, key) => {
        observers.current[key] = new IntersectionObserver((e) =>
          observerCallback(e, key)
        );
        if (observerRefs.current[key]) {
          observers.current[key].observe(observerRefs.current[key]);
        }
      });
    }
    return () =>
      observers.current?.forEach((observer) => observer?.current?.disconnect());
  }, [observerRefs, observers]);

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
        <div className="flex flex-col pt-4 gap-4">
          {" "}
          {sidebarLinks.map((link, key) => {
            return (
              <a
                key={key}
                href={link.link}
                className={`px-4 flex text-semibold text-lg hover:text-lightblue hover:border-l-2 hover:border-b  hover:border-lightblue ${key === visibleKey && active }`}
              >
                <h2 className="font-light">{link.name}</h2>
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

const sidebarLinks = [
  {
    id: 1,
    name: "Home",
    link: "#",
  },
  {
    id: 2,
    name: "About",
    link: "#about",
  },
  {
    id: 3,
    name: "Experience",
    link: "#experience",
  },
  {
    id: 4,
    name: "Projects",

    link: "#projects",
  },
  {
    id: 5,
    name: "Skills",
    link: "#skills",
  },
  {
    id: 6,
    name: "Education",
    link: "#education",
  },
  {
    id: 7,
    name: "Contact",
    link: "#contact",
  },

  {
    id: 8,
    name: "Resume",
    link: "#",
  },
];

export default Sidebar;
