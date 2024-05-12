import { GradientOverlay } from "@/app/_components/ui/GeadientOverlay";
import React from "react";

const config = {
  heroImage: "/images/pages/about/hero.png",
  title: "About Sarvaha",
};

const Hero = () => {
  return (
    <section
      className={`hero-header-pad relative h-[40vh] bg-red-500`}
      style={{
        background: `url("${config.heroImage}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <GradientOverlay className="h-[calc(100%-4rem)] bg-gradient-to-t from-black via-black/50 to-black/0" />
      <div className="wrapper wrapper-pad relative flex h-full items-center justify-center text-color-1">
        <h1>{config.title}</h1>
      </div>
    </section>
  );
};

export default Hero;
