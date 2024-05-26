import React from "react";
import { motion } from "framer-motion";

const config = {
  description:
    "Sarvah Incubation Center understands the critical role that funding plays in the success of a startup. That's why we offer comprehensive funding support to our incubatees, helping them secure the financial resources they need to grow and scale their businesses. Our funding support includes:",

  supports: [
    {
      title: "Grants",
      description: `We help startups identify and apply for grants from government agencies, foundations, and other funding bodies. Our team provides assistance throughout the application process, increasing the chances of securing funding.`,
    },
    {
      title: "Investments",
      description: `Sarvah Incubation Centre has a network of investors interested in supporting innovative startups. We facilitate connections between startups and investors, helping them secure seed funding, venture capital, and other forms of investment.`,
    },
    {
      title: "Partnerships",
      description: `We help startups explore partnership opportunities with corporations, universities, and other organisations. These partnerships can provide funding, access to resources, and opportunities for collaboration and growth.`,
    },
    {
      title: "Pitching Events",
      description: `We organise pitching events where startups can pitch their ideas to a panel of investors and potential partners. These events not only provide funding opportunities but also valuable feedback and exposure.`,
    },
    {
      title: "Financial Planning",
      description: `Our team provides guidance on financial planning, helping startups manage their finances effectively and make informed decisions about funding options.`,
    },
  ],
  footnote: `At Sarvah Incubation Centre, we are committed to helping startups secure the funding they need to thrive. Join us and access the funding support you need to turn your ideas into reality.`,
};

const SupportCard = ({
  support,
  index,
}: {
  support: (typeof config.supports)[number];
  index: number;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
        transition: {
          duration: 0.5 * (index + 1), // Animation duration
          ease: "easeInOut",
        },
      }}
      whileHover={{
        scale: 1.05,
      }}
      className="flex w-full flex-col gap-2 border border-secondary-1 bg-primary-4 p-4 text-color-1 drop-shadow-md md:w-1/3 lg:w-1/4"
    >
      <h2>{support.title}</h2>
      <p>{support.description}</p>
    </motion.div>
  );
};

const Support = () => {
  return (
    <section className="wrapper wrapper-pad overflow-hidden">
      <div className="flex w-full flex-col gap-6">
        <p className="text-center">{config.description}</p>
        <div className="flex flex-wrap justify-center gap-4">
          {config.supports.map((support, idx) => (
            <SupportCard index={idx} support={support} key={idx} />
          ))}
        </div>
        <p className="text-center">{config.footnote}</p>
      </div>
    </section>
  );
};

export default Support;
