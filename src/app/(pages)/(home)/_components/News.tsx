import React from "react";
import Image from "next/image";
import { useWindowDimensions } from "@/app/hooks/useWindowDimensions";
import { Carousel as ReactResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsArrowRight } from "react-icons/bs";

const config = {
  title: "News",
  description: "Keep yourself updated with the latest News at Sarvaha",

  news: [
    {
      image: { url: "/images/pages/home/news1.png", alt: "News1 image" },
      title: "Empowering Women in Tech",
    },
    {
      image: { url: "/images/pages/home/news2.png", alt: "News1 image" },
      title: "Funding Frenzy at Demo Day",
    },
    {
      image: { url: "/images/pages/home/news3.png", alt: "News1 image" },
      title: "Incubators: Powering Local Economies",
    },
    {
      image: { url: "/images/pages/home/news4.png", alt: "News1 image" },
      title: "Clean Energy Gets a Boost",
    },
  ],
};

const NewsCarousel = () => {
  const windowDimensions = useWindowDimensions();

  return (
    <ReactResponsiveCarousel
      statusFormatter={() => ""}
      swipeable
      autoPlay
      emulateTouch
      infiniteLoop
      interval={5000}
      showThumbs={false}
      centerMode={windowDimensions.width > 425}
      showIndicators={false}
      centerSlidePercentage={(1440 / windowDimensions.width) * 35}
    >
      {[...config.news, ...config.news].map(({ image, title }, idx) => (
        <div
          key={idx}
          className="group flex aspect-[4/3] h-[20rem] max-w-[90vw] flex-col gap-4 overflow-hidden rounded-sm"
        >
          <div className="relative aspect-[3/4] h-full">
            <Image
              src={image.url}
              alt={image.alt}
              fill
              className="object-cover object-center"
            />
          </div>
          <p className="inline-flex items-center gap-4 text-left text-lg text-color-1 transition-all duration-500 ease-in-out group-hover:text-3xl">
            {title} <BsArrowRight />
          </p>
        </div>
      ))}
    </ReactResponsiveCarousel>
  );
};

const News = () => {
  return (
    <section className="bg-primary-4">
      <div className="wrapper wrapper-pad flex flex-col gap-6">
        <div className="flex flex-col justify-between md:flex-row md:items-center">
          <div className="text-color-1">
            <h1>{config.title}</h1>
            <p>{config.description}</p>
          </div>
        </div>
        <NewsCarousel />
      </div>
    </section>
  );
};

export default News;
