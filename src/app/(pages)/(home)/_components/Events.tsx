import React, { useMemo } from "react";
import Button from "@/app/_components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { Carousel as ReactResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GradientOverlay } from "@/app/_components/ui/GeadientOverlay";
import { useWindowDimensions } from "@/app/hooks/useWindowDimensions";
import NoSSR from "@/app/_components/NoSSR";

const config = {
  title: "Upcoming Events",
  description:
    "Keep yourself updated with the latest events happening at Sarvaha",
  button: {
    text: "Explore",
    url: "/",
  },

  events: [
    {
      url: "/images/pages/home/event1.png",
      alt: "Event1 image",
      text: "where dreams are nurtured and innovations take flight! Join us on a journey of creativity and entrepreneurship.",
    },
    {
      url: "/images/pages/home/event2.png",
      alt: "Event1 image",
      text: "where dreams are nurtured and innovations take flight! Join us on a journey of creativity and entrepreneurship.",
    },
    {
      url: "/images/pages/home/event3.png",
      alt: "Event1 image",
      text: "where dreams are nurtured and innovations take flight! Join us on a journey of creativity and entrepreneurship.",
    },
    {
      url: "/images/pages/home/event4.png",
      alt: "Event1 image",
      text: "where dreams are nurtured and innovations take flight! Join us on a journey of creativity and entrepreneurship.",
    },
  ],
};
const EventsCarousel = () => {
  const windowDimensions = useWindowDimensions();

  const centerSlidePercentage = useMemo(() => {
    return (1440 / windowDimensions.width) * 30;
  }, [windowDimensions.width]);

  return (
    <ReactResponsiveCarousel
      statusFormatter={() => ""}
      swipeable
      autoPlay
      emulateTouch
      infiniteLoop
      interval={5000}
      showThumbs={false}
      centerMode={true}
      centerSlidePercentage={centerSlidePercentage}
    >
      {[...config.events, ...config.events].map(({ url, alt, text }, idx) => (
        <div
          key={idx}
          className="group relative aspect-[3/4] h-[30rem] overflow-hidden rounded-sm"
        >
          <Image
            src={url}
            alt={alt}
            fill
            className="object-cover object-center"
          />
          <p className="absolute bottom-10 left-4 z-10 text-left text-color-1 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100">
            {text}
          </p>
          <GradientOverlay className="bg-gradient-to-t from-black to-black/0 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100" />
        </div>
      ))}
    </ReactResponsiveCarousel>
  );
};

const Events = () => {
  return (
    <section className="wrapper wrapper-pad">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="pb-4 text-3xl md:text-4xl">{config.title}</h1>
            <p>{config.description}</p>
          </div>
          <div>
            <Link href={config.button.url} className="w-fit">
              <Button>{config.button.text}</Button>
            </Link>
          </div>
        </div>
        <NoSSR>
          <EventsCarousel />
        </NoSSR>
      </div>
    </section>
  );
};

export default Events;
