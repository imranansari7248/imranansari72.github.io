import { useContext } from "react";
import React  from "react";
import HeroRight from "./HeroRight";
import { SidebarContext } from "../store/SidebarContext"; 

const Hero = () => {
  const { observersRef } = useContext(SidebarContext);
  return (
    <section  id="hero" className="bg-hero bg-fixed bg-center bg-cover bg-no-repeat pt-24 md:pt-32">
      <HeroRight />
    </section>
  );
};

export default Hero;
