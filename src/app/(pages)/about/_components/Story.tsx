import Button from "@/app/_components/ui/Button";
import { GradientOverlay } from "@/app/_components/ui/GeadientOverlay";
import Link from "next/link";
import React from "react";

const config = {
  title: "Our Story",
  description: `A section-8 not-for-profit company "SARVAH Incubation Foundation" promoted by alumni has been established at SGGSIE&T, Nanded. The non-profit company was inaugurated on 8-Aug-23 at the auspicious hands of Shri. Sunil Raithatha, Chairman, Board of Governors, SGGSIE&T, Nanded. Entrepreneur, alumnus, and Director of SARVAH Mr. Vikas Rathod (Director, Zeal Mfg, Pune - pioneers in the manufacturing of electro-technical calibration standards in India) was present on the occasion and the other Director of SARVAH Mr. Abhay Deshpande (founder of Recycle, a serial entrepreneur and alumnus) joined online.`,
  button: {
    text: "Read More",
    url: "/",
  },
  backgroundImage: "/images/pages/about/story.png",
};

const Story = () => {
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
        <Link href={config.button.url} className="w-fit">
          <Button>{config.button.text}</Button>
        </Link>
      </div>
    </section>
  );
};

export default Story;
