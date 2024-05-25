"use client";

import React from "react";
import { GradientOverlay } from "./GeadientOverlay";
import { motion } from "framer-motion";

const SectionHero = ({
  config,
}: {
  config: {
    heroImage: string;
    title: string;
  };
}) => {
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
    </motion.section>
  );
};

export default SectionHero;
