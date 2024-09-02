import React from "react";
import Link from "next/link";
import { MdOutlineContentCopy } from "react-icons/md";
import { motion } from "framer-motion";
import Button from "@/app/_components/ui/Button";

const config = {
  howToApply: {
    title:
      "Expression of Interest (EoI) from WCE Alumni for Mentoring Startups",
    description:
      "In the startup ecosystem, mentors play an vital role. For the teams pre-incubating or incubating at WCE IIE Cell / Incubation Center, we are creating a pull of mentors. Please fill the following EoI form. ",
    links: [
      {
        title: "Email to us at",
        url: {
          label: "sarvah@sggs.ac.in",
          url: "mailto:sarvah@sggs.ac.in",
        },
      },
    ],
  },
  footnote:
    "Once again, we are thrilled to have you here and are excited to witness your progress. Remember, the journey of a thousand miles begins with a single step, and we are here to support you every step of the way.",
};

const HowToApply = () => (
  <div className="max-md  mx-16  mb-10  flex flex-col gap-4 border-2 border-secondary-1 bg-primary-4 p-10 text-color-1 max-lg:mx-10 max-md:mx-5 max-md:mb-5 max-md:p-5">
    <h2>{config.howToApply.title}</h2>
    <div className="flex flex-col items-center justify-between gap-6  sm:flex-row">
      <p className="w-[100%] md:flex-1">{config.howToApply.description}</p>
      <div className="flex flex-1 flex-col items-end gap-2">
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSdJobJ65X7tENTM5rzcw6Z4Mgg0bbgcvLUUZdOE-IvijrpFjA/viewform?pli=1"
          className="w-fit"
        >
          <Button>Fill this Form</Button>
        </Link>
      </div>
    </div>
  </div>
);

export default HowToApply;
