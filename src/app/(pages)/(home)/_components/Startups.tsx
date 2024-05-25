import React from "react";
import { LayoutGrid } from "@/app/_components/ui/layout-grid";

const config = {
  title: "Our Start-ups",
  description:
    "At Sarvaha, we're proud to foster a vibrant community of innovative startups across diverse industries. These passionate entrepreneurs are tackling real-world challenges and developing groundbreaking solutions. Explore the companies making waves and shaping the future:",
  startups: [
    {
      image: {
        url: "/images/pages/home/startup1.png",
        alt: "Startup1 image",
      },
      title: "Greenlight",
      description:
        "Greenlight provides sustainable home energy solutions through a user-friendly app.",
    },
    {
      image: {
        url: "/images/pages/home/startup2.png",
        alt: "Startup2 image",
      },
      title: "Greenlight",
      description:
        "Greenlight provides sustainable home energy solutions through a user-friendly app.",
    },
    {
      image: {
        url: "/images/pages/home/startup1.png",
        alt: "Startup3 image",
      },
      title: "Pawsitive Tech",
      description:
        " Pawsitive Tech develops smart wearables for pets, allowing owners to monitor their furry friend's health and activity levels remotely, promoting pet wellness and fostering a stronger human-animal bond.",
    },
    {
      image: {
        url: "/images/pages/home/startup2.png",
        alt: "Startup4 image",
      },
      title: "Greenlight",
      description:
        "Greenlight provides sustainable home energy solutions through a user-friendly app.",
    },
  ],
};
const Startups = () => {
  const cards = config.startups.map((startup, idx) => ({
    id: idx,
    content: (
      <div className="flex flex-col gap-4 text-color-1">
        <h2>{startup.title}</h2>
        <p>{startup.description}</p>
      </div>
    ),
    thumbnail: startup.image.url,
    className:
      idx % 4 === 0 || (idx + 1) % 4 === 0 ? "md:col-span-2" : "md:col-span-1",
  }));
  return (
    <section className="wrapper wrapper-pad grid justify-items-center">
      <div className="px-8 text-center md:px-40 lg:px-60">
        <h1 className="pb-4 text-3xl md:text-4xl">{config.title}</h1>
        <p className="text-light-text">{config.description}</p>
      </div>
      <div className="h-screen w-full">
        <LayoutGrid cards={cards} />
      </div>
    </section>
  );
};

export default Startups;
