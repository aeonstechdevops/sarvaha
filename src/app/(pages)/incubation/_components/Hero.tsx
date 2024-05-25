import SectionHero from "@/app/_components/ui/SectionHero";
import React from "react";

const config = {
  heroImage: "/images/pages/incubation/hero.png",
  title: "Incubation",
};

const Hero = () => {
  return <SectionHero config={config} />;
};

export default Hero;
