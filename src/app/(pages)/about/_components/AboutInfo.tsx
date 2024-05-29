import Button from "@/app/_components/ui/Button";
import { cn } from "@/app/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

const config = {
  sections: [
    {
      title: { part1: "About", part2: "Sarvah" },
      description: `SARVAH - “SGGSIET Alumni Run Venture Accelerator Hub” is inspired by the word
            “सर्व:” meaning all, everything, inclusive. The Incubator will assist students, as well
            as other startup aspirants in ALL ways; EVERYTHING from mentoring, to providing
            equipment, technology support and industry connect, and test environment etc. for
            building prototypes, product-market fit analysis, help in arranging for early adopters
            and INCLUSIVE of assistance in making pitches to angel investors and obtaining
            seed funding.`,
      button: {
        text: "Read More",
        url: "/about/sarvah",
      },
    },
    {
      title: { part1: "How we can", part2: "Help You?" },
      description: `The primary focus of SARVAH is to help startups born out of innovative ideas to grow and succeed by providing various resources and support systems.`,
      button: {
        text: "Read More",
        url: "/about/our-help",
      },
    },
  ],
};

const Section = ({ idx }: { idx: number }) => {
  const isOdd = idx % 2;
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 1.5, // Animation duration
          ease: "easeInOut",
        },
      }}
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
        <Link href={config.sections[idx].button.url} className="w-fit">
          <Button>{config.sections[idx].button.text}</Button>
        </Link>
      </div>
    </motion.div>
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
