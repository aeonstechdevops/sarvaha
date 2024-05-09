import Button from "@/app/_components/ui/Button";
import { GradientOverlay } from "@/app/_components/ui/GeadientOverlay";
import Link from "next/link";
import React from "react";
import { LuMouse } from "react-icons/lu";

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

const Hero = () => {
  return (
    <section
      className={`hero-header-pad relative h-[100vh]`}
      style={{
        background: `url("${config.heroImage}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <GradientOverlay className="bg-gradient-to-t from-black via-black/50 to-black/0" />
      <div className="wrapper wrapper-pad relative flex h-full items-end">
        <div className="flex flex-col gap-2 text-color-1 md:w-[35vw]">
          <h1>{config.heroTitle}</h1>
          <p>{config.heroDescription}</p>
          <Link href={config.heroButton.url} className="w-fit">
            <Button>{config.heroButton.text}</Button>
          </Link>
        </div>
        <LuMouse
          color="#fff"
          className="bottom-10 left-[50%] hidden size-10 translate-x-[-50%] opacity-0 transition-opacity duration-500 ease-in-out hover:cursor-pointer hover:opacity-100 sm:absolute"
        />
      </div>
    </section>
  );
};

export default Hero;
