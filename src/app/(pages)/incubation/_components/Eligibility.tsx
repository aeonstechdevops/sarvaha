import { cn } from "@/app/lib/utils";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const config = {
  title: "Eligibility",
  description:
    "Sarvah  Incubation Centre welcomes applications from early-stage startups with innovative ideas and a passion for entrepreneurship. To be eligible for our incubation program, startups should meet the following criteria:",
  steps: [
    {
      title: "Uniqueness:",
      description: "Have a unique and innovative business idea.",
      image: {
        url: "/images/pages/incubation/step1.png",
        alt: "Application Submission image",
      },
    },
    {
      title: "Commitment:",
      description:
        "Demonstrate a strong commitment to developing and growing their startup.",
      image: {
        url: "/images/pages/incubation/step2.png",
        alt: "Initial Screening image",
      },
    },
    {
      title: "Ideation:",
      description: "Be in the ideation or early-stage development phase.",
      image: {
        url: "/images/pages/incubation/step3.png",
        alt: "Pitch Presentation image",
      },
    },
    {
      title: "Proactiveness:",
      description:
        "Be willing to actively participate in our incubation program and engage with mentors and experts.",
      image: {
        url: "/images/pages/incubation/step4.png",
        alt: "Selection Decision image",
      },
    },
  ],
};

const Eligibility = () => {
  return (
    <section className="overflow-hidden bg-primary-4 py-12">
      <div className="wrapper wrapper-pad flex flex-col gap-8 text-color-1 md:flex-row md:items-center">
        <motion.div
          className="flex flex-1 flex-col gap-2"
          initial={{
            opacity: 0,
            x: "-100%",
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.5, // Animation duration
              easings: true,
            },
          }}
        >
          <h2 className="mb-4 text-3xl font-bold">{config.title}</h2>
          <p className="text-lg">{config.description}</p>
        </motion.div>
        <div className="flex flex-1 flex-col gap-8">
          {config.steps.map((step, index) => (
            <motion.div
              initial={{
                opacity: 0,
                x: "100%",
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.5 * (index + 1), // Animation duration
                  easings: true,
                },
              }}
              key={index}
              className="flex flex-col items-start gap-4 sm:flex-row"
            >
              <div
                className={cn(
                  "relative min-h-16 min-w-16 overflow-hidden rounded-full",
                  index % 2 ? "bg-secondary-2" : "border-2 border-secondary-2",
                )}
              >
                <Image
                  fill
                  src={step.image.url}
                  alt={step.image.alt}
                  className="object-contain object-center"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
