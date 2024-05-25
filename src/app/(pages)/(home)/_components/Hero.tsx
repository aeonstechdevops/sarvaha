import Button from "@/app/_components/ui/Button";
import { GradientOverlay } from "@/app/_components/ui/GeadientOverlay";
import { TextGenerateEffect } from "@/app/_components/ui/text-generate-effect";
import Link from "next/link";
import React from "react";
import { LuMouse } from "react-icons/lu";
import { motion } from "framer-motion";

const config = {
  heroImage: "/images/pages/home/hero.png",
  heroTitle: "Welcome to Sarvah Incubation Center!",
  heroDescription:
    "Welcome to Sarvah Incubation Centre, where dreams are nurtured and innovations take flight! Join us on a journey of creativity and entrepreneurship.",
  heroButton: {
    text: "Explore",
    url: "/incubation",
  },
};

const Hero = () => {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: "-100%",
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1, // Animation duration
        },
      }}
      viewport={{ once: true }}
      className={`hero-header-pad relative h-[100vh]`}
      style={{
        background: `url("${config.heroImage}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <GradientOverlay className="h-[calc(100%-4rem)] bg-gradient-to-t from-black via-black/50 to-black/0" />
      <div className="wrapper wrapper-pad relative flex h-full items-end">
        <div className="flex flex-col gap-2 text-color-1 md:w-[35vw]">
          <h1>{config.heroTitle}</h1>
          <TextGenerateEffect
            words={config.heroDescription}
            className="text-base"
          />
          <Link href={config.heroButton.url} className="w-fit">
            <Button>{config.heroButton.text}</Button>
          </Link>
        </div>
        <LuMouse
          color="#fff"
          className="bottom-10 left-[50%] hidden size-10 translate-x-[-50%] opacity-0 transition-opacity duration-500 ease-in-out hover:cursor-pointer hover:opacity-100 sm:absolute"
        />
      </div>
    </motion.section>
  );
};

export default Hero;
