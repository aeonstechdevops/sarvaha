"use client";

import React from "react";
import Hero from "./_components/Hero";
import Body from "./_components/Body";
import { TStartup } from "../startups";

const StartupInner = ({ startups }: { startups: TStartup | undefined }) => {
  if (!startups) return <div>Startups not found</div>;
  return (
    <>
      <Hero config={startups.images} />
      <Body config={startups} />
    </>
  );
};

export default StartupInner;
