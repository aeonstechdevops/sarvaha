"use client";

import Hero from "./_components/Hero";
import Events from "./_components/Events";
import News from "./_components/News";
import Eligibility from "./_components/Eligibility";
import Startups from "./_components/Startups";
import Support from "./_components/Support";

export const Home = () => {
  return (
    <>
      <Hero />
      <Support />
      <Events />
      <News />
      <Eligibility />
      <Startups />
    </>
  );
};
