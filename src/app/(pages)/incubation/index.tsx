"use client";

import React from "react";
import Hero from "./_components/Hero";
import Facilities from "./_components/Facilities";
import SelectionProcess from "./_components/SelectionProcess";
import Eligibility from "./_components/Eligibility";

const Incubation = () => {
  return (
    <>
      <Hero />
      <SelectionProcess />
      <Eligibility />
      <Facilities />
    </>
  );
};

export default Incubation;
