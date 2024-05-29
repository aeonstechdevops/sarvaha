import React from "react";
import About from "./";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sarvah | SARVAH",
  description: "About Incubation Center of SGGS",
};

const AboutPage = () => {
  return <About />;
};

export default AboutPage;
