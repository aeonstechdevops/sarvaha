"use client";

import Hero from "./_components/Hero";
import News from "./_components/News";
import Startups from "./_components/Startups";
import Support from "./_components/Support";
import SelectionProcess from "./_components/SelectionProcess";
import Glimpses from "./_components/Glimpses";

export const Home = () => {
  return (
    <>
      <Hero />
      <Support />
      <Glimpses />
      <News />
      <SelectionProcess />
      <Startups />
    </>
  );
};
