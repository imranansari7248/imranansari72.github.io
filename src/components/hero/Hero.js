import React from "react";
import heroBg from "../../assets/images/hero-bg.jpg";
import Navbar from "../ui/Navbar";
import HeroRight from "./HeroRight";
import HeroLeft from "./HeroLeft";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <section id="hero" className="bg-lightblue">
      <HeroRight />
    </section>
  );
};

export default Hero;
