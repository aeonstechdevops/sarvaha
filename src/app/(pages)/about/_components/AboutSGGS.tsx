import React from "react";
import { motion } from "framer-motion";

const config = {
  title: "About SGGS",
  descriptionPoints: [
    "Established in 1981, Shri Guru Gobind Singhji Institute of Engineering and Technology (SGGSIE&T), Nanded, is one of the leading institutions in technical education, research and technology transfer.",
    "It's been identified as an Institute which can be raised to the level of Centre of Excellence.",
    "The institute has excellent track record of publications with recent statistics as 1200+ peer reviewed publications, 8000+ research citations, 25 patents filed and two awarded.",
    "Egged on by its Alumni, the Institute built a desire to take a giant leap into the next higher orbit of grooming and churning out entrepreneurs from its campus.",
  ],
  video: {
    url: "https://www.youtube.com/embed/6hawgPteJ2g?si=PeM_ukWAhrk6RuO2",
  },
};

const AboutSGGS = () => {
  return (
    <motion.section className="wrapper wrapper-pad overflow-hidden">
      <motion.div
        initial={{
          opacity: 0,
          y: "100%",
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1, // Animation duration
          },
        }}
        className="flex flex-col border-4 border-secondary-1 bg-primary-4 text-color-1 md:flex-row"
      >
        <iframe
          src={config.video.url}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className=" min-h-[20rem] w-full md:min-h-[30rem]"
        />
        <div className="flex flex-col gap-4 p-8">
          <h2>{config.title}</h2>
          <ul className="list-inside list-disc">
            {config.descriptionPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutSGGS;
