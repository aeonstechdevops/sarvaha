import SectionHero from "@/app/_components/ui/SectionHero";
import React from "react";

const config = {
  heroImage: "/images/pages/about/hero.png",
  title: "Sarvah News",
};

const Hero = () => {
  return <SectionHero config={config} />;
};

export default Hero;
