import Button from "@/app/_components/ui/Button";
import Link from "next/link";
import React from "react";

const config = {
  heroImage: "/images/pages/home/hero.png",
  heroTitle: "Welcome to Sarvah Incubation Center!",
  heroDescription:
    "where dreams are nurtured and innovations take flight! Join us on a journey of creativity and entrepreneurship.",
  heroButton: {
    text: "Explore",
    url: "/",
  },
};

const GradientOverlay = () => (
  <div className="absolute bg-gradient-to-t from-black via-black/50 to-black/0 h-[calc(100vh-var(--header-height))] w-full" />
);

const Hero = () => {
  return (
    <section
      className={`h-[100vh] hero-header-pad relative`}
      style={{
        background: `url("${config.heroImage}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      <GradientOverlay />
      <div className="wrapper wrapper-pad relative z-10 flex items-end h-full">
        <div className="flex flex-col gap-2 text-color-1 md:w-[40vw]">
          <h1>{config.heroTitle}</h1>
          <p>{config.heroDescription}</p>
          <Link href={config.heroButton.url} className="w-fit">
            <Button variant={"secondary"}>{config.heroButton.text}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
