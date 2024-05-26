"use client";

import React from "react";
import Hero from "./_components/Hero";
import Facilities from "./_components/Facilities";
import SelectionProcess from "./_components/SelectionProcess";
import Eligibility from "./_components/Eligibility";
import Apply from "./_components/Apply";
import Services from "./_components/Services";

const Incubation = () => {
  return (
    <>
      <Hero />
      <SelectionProcess />
      <Eligibility />
      <Apply />
      <Services />
      <Facilities />
    </>
  );
};

export default Incubation;
