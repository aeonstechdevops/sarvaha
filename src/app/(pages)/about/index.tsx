"use client";
import React from "react";
import Hero from "./_components/Hero";
import AboutInfo from "./_components/AboutInfo";
import VisionMission from "./_components/VisionMission";
import DirectorsAndMentors from "./_components/DirectorsAndMentors";
import AboutSGGS from "./_components/AboutSGGS";
import Story from "./_components/Story";

const About = () => {
  return (
    <>
      <Hero />
      <AboutInfo />
      <VisionMission />
      <Story />
      <DirectorsAndMentors />
      <AboutSGGS />
    </>
  );
};

export default About;
