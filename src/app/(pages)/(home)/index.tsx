"use client";

import Hero from "./_components/Hero";
import Highlights from "./_components/Highlights";
import Events from "./_components/Events";
import News from "./_components/News";
import Eligibility from "./_components/Eligibility";
import Startups from "./_components/Startups";
import NoSSR from "@/app/_components/NoSSR";

export const Home = () => {
  return (
    <>
      <Hero />
      <Highlights />
      <Events />
      <News />
      <Eligibility />
      <Startups />
    </>
  );
};
