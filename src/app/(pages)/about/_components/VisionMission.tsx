import { TextGenerateEffect } from "@/app/_components/ui/text-generate-effect";
import { cn } from "@/app/lib/utils";
import Image from "next/image";
import React from "react";

const config = {
  vision: {
    title: "Vision Statement",
    description: ` “To become a fertile breeding ground where ideas germinate and bloom into innovative products and services, in a carefully designed nurturing environment that assists in every step of each phase of the blooming process, fully and staunchly supported by an Enabling Ecosystem for Engineers and in general, any aspiring brilliant mind with a drive, to become successful Entrepreneurs committed to creating employment opportunities and wealth generation for all involved.”`,
    icon: "/images/pages/about/rocket.svg",
  },
  mission: {
    title: "Our Mission",
    description: `“We dedicate ourselves to, creating an inclusive environment that kindles a culture of entrepreneurship, a setup replete with resources from knowledge banks, to laboratories with access to high end equipment, mentors and industry connects, and bridging technocrats with alien world of finance and business management; all of it, and do everything that provides a positive space for ideas to take root and thereby create successful Entrepreneurs.”`,
    icon: "/images/pages/about/bulb.svg",
  },
  image: {
    src: "/images/pages/about/vision-mission.jpg",
    alt: "Vision mission section image.",
  },
};

const Section = ({
  section,
  className,
}: React.HTMLAttributes<HTMLDivElement> & {
  section: {
    title: string;
    description: string;
    icon: string;
  };
}) => {
  return (
    <div
      className={cn("flex flex-col items-center gap-4 md:flex-row", className)}
    >
      <div className="relative h-full w-[10rem]">
        <Image
          src={section.icon}
          alt="Section icon"
          fill
          className="object-contain object-center"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h2>{section.title}</h2>
        <TextGenerateEffect words={section.description} className="text-base" />
        {/* <p>{section.description}</p> */}
      </div>
    </div>
  );
};

const VisionMission = () => {
  return (
    <section className="relative mb-12">
      <div className="absolute h-[calc((100%-32rem)/2)] w-full bg-primary-4 md:h-1/2" />
      <div className="relative flex flex-col items-center gap-8">
        <div className="wrapper wrapper-pad flex flex-col gap-4 md:flex-row">
          <div className="flex flex-col items-stretch justify-around gap-4">
            <Section section={config.vision} className="text-color-1" />
            <Section section={config.mission} />
          </div>
          <div className="relative h-[30rem] w-full">
            <Image
              src={config.image.src}
              alt={config.image.alt}
              fill
              className="object-contain object-center"
            />
          </div>
        </div>
        <div className="mx-auto h-px w-[70vw] bg-secondary-1 md:w-[40vw]" />
      </div>
    </section>
  );
};

export default VisionMission;
