"use client";

import React from "react";
import { TEvent } from "../events";
import Hero from "./_components/Hero";
import Body from "./_components/Body";

const EventInner = ({ event }: { event: TEvent | undefined }) => {
  if (!event) return <div>Event not found</div>;
  return (
    <>
      <Hero config={event.images} />
      <Body config={event} />
    </>
  );
};

export default EventInner;
