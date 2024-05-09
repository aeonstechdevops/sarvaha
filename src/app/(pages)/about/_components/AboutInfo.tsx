import Button from "@/app/_components/ui/Button";
import { cn } from "@/app/lib/utils";
import Link from "next/link";
import React from "react";

const config = {
  sections: [
    {
      title: { part1: "About", part2: "Sarvaha" },
      description: `SARVAH - “SGGSIET Alumni Run Venture Accelerator Hub” is inspired by the word
            “सर्व:” meaning all, everything, inclusive. The Incubator will assist students, as well
            as other startup aspirants in ALL ways; EVERYTHING from mentoring, to providing
            equipment, technology support and industry connect, and test environment etc. for
            building prototypes, product-market fit analysis, help in arranging for early adopters
            and INCLUSIVE of assistance in making pitches to angel investors and obtaining
            seed funding.`,
      button: {
        text: "Read More",
        url: "/",
      },
    },
    {
      title: { part1: "Our", part2: "Story" },
      description: `Established in 1981, Shri Guru Gobind Singhji Institute of Engineering and Technology
        (SGGSIET), Nanded, is one of the promising leader institutions in technical education,
        research and technology transfer. Its been identified as an Institute which can be
        raised to the level of Centre of Excellence. The institute has excellent track record of
        publications with recent statistics as 1200+ peer reviewed publications`,
      button: {
        text: "Read More",
        url: "/",
      },
    },
  ],
};

const Section = ({ idx }: { idx: number }) => {
  const isOdd = idx % 2;
  return (
    <div
      className={cn(
        `flex flex-col items-center gap-4 md:flex-row`,
        !isOdd && "md:flex-row-reverse",
      )}
    >
      <div
        className={cn(
          "flex flex-1 items-center",
          isOdd ? "justify-start" : "justify-end",
        )}
      >
        <h2>
          <span className="text-secondary-2">
            {config.sections[idx].title.part1}
          </span>{" "}
          <span className="text-primary-2">
            {config.sections[idx].title.part2}
          </span>
        </h2>
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <p>{config.sections[idx].description}</p>
        <Link href={config.sections[idx].button.url}>
          <Button>{config.sections[idx].button.text}</Button>
        </Link>
      </div>
    </div>
  );
};

const AboutInfo = () => {
  return (
    <section className="wrapper wrapper-pad">
      <div className="flex flex-col gap-4">
        {config.sections.map((_section, idx) => (
          <Section key={idx} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default AboutInfo;
