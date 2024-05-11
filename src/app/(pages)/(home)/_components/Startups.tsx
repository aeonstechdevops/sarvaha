import React from "react";
import Image from "next/image";

const config = {
  title: "Our Start-ups",
  description:
    "At Sarvaha, we're proud to foster a vibrant community of innovative startups across diverse industries. These passionate entrepreneurs are tackling real-world challenges and developing groundbreaking solutions. Explore the companies making waves and shaping the future:",
  startups: [
    {
      url: "/images/pages/home/startup1.png",
      height: "325",
      width: "325",
      alt: "Startup1 image",
      title: "Greenlight",
      descri:
        "Greenlight provides sustainable home energy solutions through a user-friendly app.",
    },
    {
      url: "/images/pages/home/startup1.png",
      height: "325",
      width: "325",
      alt: "Startup2 image",
      title: "Greenlight",
      descri:
        "Greenlight provides sustainable home energy solutions through a user-friendly app.",
    },
    {
      url: "/images/pages/home/startup2.png",
      height: "650",
      width: "650",
      alt: "Startup3 image",
      title: "Pawsitive Tech",
      descri:
        " Pawsitive Tech develops smart wearables for pets, allowing owners to monitor their furry friend's health and activity levels remotely, promoting pet wellness and fostering a stronger human-animal bond.",
    },
    {
      url: "/images/pages/home/startup1.png",
      height: "325",
      width: "325",
      alt: "Startup4 image",
      title: "Greenlight",
      descri:
        "Greenlight provides sustainable home energy solutions through a user-friendly app.",
    },
    {
      url: "/images/pages/home/startup1.png",
      height: "325",
      width: "325",
      alt: "Startup5 image",
      title: "Greenlight",
      descri:
        "Greenlight provides sustainable home energy solutions through a user-friendly app.",
    },
  ],
};
const Startups = () => {
  return (
    <section className="wrapper wrapper-pad grid justify-items-center">
      <div className="px-8 text-center md:px-40 lg:px-60">
        <h1 className="pb-4 text-3xl md:text-4xl">{config.title}</h1>
        <p className="text-light-text">{config.description}</p>
      </div>
      <div className="mt-10 flex flex-row">
        <div className="flex w-1/2 flex-col lg:w-1/4">
          <div className="relative">
            <Image
              src={config.startups[0].url}
              alt={config.startups[0].alt}
              height={parseInt(config.startups[0].height)}
              width={parseInt(config.startups[0].width)}
            />
            <div className="absolute bottom-0 left-0 right-0 px-3  py-2 text-white md:pb-6">
              <h3>{config.startups[0].title}</h3>
              <p className="text-xs">{config.startups[0].descri}</p>
            </div>
          </div>

          <div className="relative">
            <Image
              src={config.startups[1].url}
              alt={config.startups[1].alt}
              height={parseInt(config.startups[1].height)}
              width={parseInt(config.startups[1].width)}
            />
            <div className="absolute bottom-0 left-0 right-0 px-3  py-2 text-white md:pb-6">
              <h3>{config.startups[1].title}</h3>
              <p className="text-xs">{config.startups[1].descri}</p>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2">
          <div className="relative">
            <Image
              src={config.startups[2].url}
              alt={config.startups[2].alt}
              height={parseInt(config.startups[2].height)}
              width={parseInt(config.startups[2].width)}
            />
            <div className="absolute bottom-0 left-0 right-0 px-3  py-2 text-white md:pb-6">
              <h3>{config.startups[2].title}</h3>
              <p className="text-xs">{config.startups[2].descri}</p>
            </div>
          </div>
        </div>
        <div className="flex w-1/2 flex-col lg:w-1/4">
          <div className="relative">
            <Image
              src={config.startups[3].url}
              alt={config.startups[3].alt}
              height={parseInt(config.startups[3].height)}
              width={parseInt(config.startups[3].width)}
            />
            <div className="absolute bottom-0 left-0 right-0 px-3  py-2 text-white md:pb-6">
              <h3>{config.startups[3].title}</h3>
              <p className="text-xs">{config.startups[3].descri}</p>
            </div>
          </div>

          <div className="relative">
            <Image
              src={config.startups[4].url}
              alt={config.startups[4].alt}
              height={parseInt(config.startups[4].height)}
              width={parseInt(config.startups[4].width)}
            />
            <div className="absolute bottom-0 left-0 right-0 px-3  py-2 text-white md:pb-6">
              <h3>{config.startups[4].title}</h3>
              <p className="text-xs">{config.startups[4].descri}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Startups;
