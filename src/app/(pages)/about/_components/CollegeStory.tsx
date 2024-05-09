import Button from "@/app/_components/ui/Button";
import { GradientOverlay } from "@/app/_components/ui/GeadientOverlay";
import Link from "next/link";
import React from "react";

const config = {
  title: "Our Story",
  description:
    "Established in 1981, Shri Guru Gobind Singhji Institute of Engineering and Technology (SGGSIET), Nanded, is one of the promising leader institutions in technical education, research and technology transfer. Its been identified as an Institute which can be raised to the level of Centre of Excellence. The institute has excellent track record of publications with recent statistics as 1200+ peer reviewed publications, 8000+ research citations, 25 patents filed and two awarded. Egged on by its Alumni, the Institute built a desire to take a giant leap into the next higher orbit of grooming and churning out entrepreneurs from its campus.",
  button: {
    text: "Read More",
    url: "/",
  },
  backgroundImage: "/images/pages/about/story.png",
};

const CollegeStory = () => {
  return (
    <section
      className="relative"
      style={{
        background: `url("${config.backgroundImage}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <GradientOverlay className="!h-full bg-gradient-to-r from-primary-4 to-transparent" />
      <div className="wrapper wrapper-pad relative flex flex-col gap-4 text-color-1">
        <h2>{config.title}</h2>
        <p>{config.description}</p>
        <Link href={config.button.url}>
          <Button>{config.button.text}</Button>
        </Link>
      </div>
    </section>
  );
};

export default CollegeStory;
