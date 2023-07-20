import React from "react";
import Sidebar from "./components/ui/Sidebar";
import Mian from "./components/Mian";
import Navbar from "./components/ui/Navbar";
import { SidebarContext } from "./components/store/SidebarContext";

function App() {
  const [show, setShow] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

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

  return (
    <React.Fragment>
      <SidebarContext.Provider value={{ isMobile, show, setShow }}>
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
