"use client";

import Hero from "./_components/Hero";
import Events from "./_components/Events";
import News from "./_components/News";
import Startups from "./_components/Startups";
import Support from "./_components/Support";
import SelectionProcess from "./_components/SelectionProcess";

export const Home = () => {
  return (
    <>
      <Hero />
      <Support />
      <Events />
      <News />
      <SelectionProcess />
      <Startups />
    </>
  );
};
