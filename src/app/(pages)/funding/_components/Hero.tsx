import SectionHero from "@/app/_components/ui/SectionHero";
import React from "react";

const config = {
  heroImage: "/images/pages/funding/hero.png",
  title: "Funding Support",
};

const Hero = () => {
  return <SectionHero config={config} />;
};

export default Hero;
