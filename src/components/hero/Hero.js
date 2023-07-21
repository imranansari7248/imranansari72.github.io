import React from "react";
import heroBg from "../../assets/images/hero-bg.jpg";
import Navbar from "../ui/Navbar";
import HeroRight from "./HeroRight";
import HeroLeft from "./HeroLeft";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <section id="hero" className="bg-hero bg-fixed bg-center bg-cover bg-no-repeat pt-24 md:pt-32">
      <HeroRight />
    </section>
  );
};

export default Hero;
