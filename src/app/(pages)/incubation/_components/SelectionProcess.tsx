import { cn } from "@/app/lib/utils";
import Image from "next/image";
import React from "react";

const config = {
  title: "Selection Process",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
  steps: [
    {
      title: "Application Submission:",
      description:
        "Startups interested in joining our incubation program can submit their applications online.",
      image: {
        url: "/images/pages/incubation/step1.png",
        alt: "Application Submission image",
      },
    },
    {
      title: "Initial Screening:",
      description:
        "Our team reviews all applications and shortlists candidates based on the viability and scalability of their ideas.",
      image: {
        url: "/images/pages/incubation/step2.png",
        alt: "Initial Screening image",
      },
    },
    {
      title: "Pitch Presentation:",
      description:
        "Shortlisted startups are invited to present their business ideas to a panel of judges, who assess the feasibility, market potential, and innovation of the ideas.",
      image: {
        url: "/images/pages/incubation/step3.png",
        alt: "Pitch Presentation image",
      },
    },
    {
      title: "Selection Decision:",
      description:
        "Final selection is made based on the pitch presentations, interviews, and overall potential of the startup to benefit from our incubation program.",
      image: {
        url: "/images/pages/incubation/step4.png",
        alt: "Selection Decision image",
      },
    },
  ],
};

const SelectionProcess = () => {
  return (
    <section className="bg-primary-4 py-12">
      <div className="wrapper wrapper-pad flex flex-col gap-8 text-color-1 md:flex-row md:items-center">
        <div className="flex flex-1 flex-col gap-2">
          <h2 className="mb-4 text-3xl font-bold">{config.title}</h2>
          <p className="text-lg">{config.description}</p>
        </div>
        <div className="flex flex-1 flex-col gap-8">
          {config.steps.map((step, index) => (
            <div
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectionProcess;
