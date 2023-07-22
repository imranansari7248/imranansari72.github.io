import React, { useEffect } from "react";
import Sidebar from "./components/ui/Sidebar";
import Mian from "./components/Mian";
import Navbar from "./components/ui/Navbar";
import { SidebarContext } from "./components/store/SidebarContext";

const sections = [
  "hero",
  "about",
  "experience",
  "projects",
  "skills",
  "education",
  "contact",
];

function App() {
  const [show, setShow] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  const observerRefs = React.useRef([]);

  React.useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    });
  }, [show, isMobile]);

  // adding which section is on screen
  useEffect(() => {
    const observers = new IntersectionObserver(
      (entries) => {
        console.log(entries[0].isIntersecting, entries[0].target.id);
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
      }
    );

    sections.forEach((section,index) => {
      observerRefs.current[index] = document.querySelectorAll(`#${section}`)[0];
    });
    console.log(observerRefs.current);
  }, []);

  return (
    <React.Fragment>
      <SidebarContext.Provider
        value={{ isMobile, show, setShow, observerRefs }}
      >
        <div className="relative flex w-screen">
          <Sidebar />
          {/* main Content */}
          <Mian>
            <Navbar />
          </Mian>
        </div>
      </SidebarContext.Provider>
    </React.Fragment>
  );
}

export default App;
