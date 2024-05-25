import React from 'react';
import Contact from '.';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Sarvaha | SARVAHA",
  description: "Contact Incubation Center of SGGS",
};

const ContactPage = () => {
  return (
    <Contact/>
  )
}

export default ContactPage