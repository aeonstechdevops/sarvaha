import { cn } from "@/app/lib/utils";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const config = {
  title: "Selection Process",
  description:
    "Our selection process is designed to identify startups with the greatest potential for success. It typically involves the following steps:",
  image: {
    src: "/images/pages/home/map.png",
    alt: "Roadmap image",
  },
  steps: [
    {
      image: {
        url: "/images/pages/home/step1.svg",
        alt: "Application Submission",
      },
      title: "Application Submission",
      description:
        "Startups interested in joining our incubation program can submit their applications online",
    },
    {
      image: {
        url: "/images/pages/home/step2.svg",
        alt: "Initial Screening",
      },
      title: "Initial Screening",
      description:
        "Our team reviews all applications and shortlists candidates based on the viability and scalability of their ideas",
    },
    {
      image: {
        url: "/images/pages/home/step3.svg",
        alt: "Pitch Presentation",
      },
      title: "Pitch Presentation",
      description:
        "Shortlisted startups are invited to present their business ideas to a panel of judges, who assess the feasibility, market potential, and innovation of the ideas",
    },
    {
      image: {
        url: "/images/pages/home/step4.svg",
        alt: "Selection Decision",
      },
      title: "Selection Decision",
      description:
        "Final selection is made based on the pitch presentations, interviews, and overall potential of the startup to benefit from our incubation program.",
    },
  ],
};

const Step = ({
  step,
  index,
}: {
  step: (typeof config.steps)[number];
  index: number;
}) => {
  return (
    <motion.div
      className="flex flex-col gap-4 sm:flex-row md:flex-row"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.5 * (index + 1),
          ease: "easeInOut",
        },
      }}
    >
      <div className="relative min-h-16 min-w-16 overflow-hidden">
        <Image
          src={step.image.url}
          alt={step.image.alt}
          fill
          className="object-contain object-center"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3>{step.title}</h3>
        <p>{step.description}</p>
      </div>
    </motion.div>
  );
};

const SelectionProcess = () => {
  return (
    <>
      <section
        className={cn("hidden md:flex")}
        style={{
          background: `url("${config.image.src}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      >
        <div className="wrapper wrapper-pad flex justify-end">
          <div className="flex h-screen w-1/2 flex-col justify-center text-right">
            <h2>{config.title}</h2>
            <p>{config.description}</p>
          </div>
        </div>
      </section>
      <section className={cn("md:hidden")}>
        <div className="wrapper wrapper-pad flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <h2>{config.title}</h2>
            <p>{config.description}</p>
          </div>
          <div className="flex flex-col gap-4">
            {config.steps.map((step, idx) => (
              <Step step={step} key={idx} index={idx} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SelectionProcess;
