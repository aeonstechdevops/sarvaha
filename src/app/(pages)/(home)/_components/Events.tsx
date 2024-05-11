import React, { CSSProperties } from "react";
import Button from "@/app/_components/ui/Button";
import Link from "next/link";
import Image from "next/image";
import { Carousel as ReactResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
      url: "/images/pages/home/event1.png",
      alt: "Event1 image",
      text: "where dreams are nurtured and innovations take flight! Join us on a journey of creativity and entrepreneurship.",
    },
    {
      url: "/images/pages/home/event1.png",
      alt: "Event1 image",
      text: "where dreams are nurtured and innovations take flight! Join us on a journey of creativity and entrepreneurship.",
    },
    {
      url: "/images/pages/home/event1.png",
      alt: "Event1 image",
      text: "where dreams are nurtured and innovations take flight! Join us on a journey of creativity and entrepreneurship.",
    },
    {
      url: "/images/pages/home/event1.png",
      alt: "Event1 image",
      text: "where dreams are nurtured and innovations take flight! Join us on a journey of creativity and entrepreneurship.",
    },
    {
      url: "/images/pages/home/event1.png",
      alt: "Event1 image",
      text: "where dreams are nurtured and innovations take flight! Join us on a journey of creativity and entrepreneurship.",
    },
    {
      url: "/images/pages/home/event1.png",
      alt: "Event1 image",
      text: "where dreams are nurtured and innovations take flight! Join us on a journey of creativity and entrepreneurship.",
    },
    {
      url: "/images/pages/home/event1.png",
      alt: "Event1 image",
      text: "where dreams are nurtured and innovations take flight! Join us on a journey of creativity and entrepreneurship.",
    },
  ],
};
// const EventsCarousel = () => {
//   return <ReactResponsiveCarousel></ReactResponsiveCarousel>;
// };

const Events = () => {
  return (
    <section className="wrapper wrapper-pad mt-6 h-screen">
      <div className="flex items-center justify-between space-x-4">
        <div className="left">
          <h1 className="pb-4 text-3xl md:text-4xl">{config.title}</h1>
          <p>{config.description}</p>
        </div>
        <div className="right">
          <Link href={config.button.url} className="w-fit">
            <Button>{config.button.text}</Button>
          </Link>
        </div>
      </div>
      <div className="pt-10">
        {/* <EventsCarousel /> */}
      </div>
    </section>
  );
};

export default Events;
