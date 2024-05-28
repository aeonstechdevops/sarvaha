import React, { useMemo } from "react";
import Image from "next/image";
import { Carousel as ReactResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BsArrowRight } from "react-icons/bs";
import NoSSR from "@/app/_components/NoSSR";
import { useWindowDimensions } from "@/app/hooks/useWindowDimensions";
import { motion } from "framer-motion";
import { news } from "../../news/news";
import Link from "next/link";
import Button from "@/app/_components/ui/Button";

const config = {
  title: "Latest News",
  description: "Keep yourself updated with the latest News at Sarvaha",
  button: {
    text: "Explore",
    url: "/news",
  },
};

const NewsCarousel = () => {
  const windowDimensions = useWindowDimensions();

  const centerSlidePercentage = useMemo(() => {
    return (1440 / windowDimensions.width) * 35;
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
      centerMode={windowDimensions.width > 425}
      showIndicators={false}
      centerSlidePercentage={centerSlidePercentage}
    >
      {news
        .sort((a, b) => (a.day > b.day ? 1 : -1))
        .slice(0, 5)
        .map(({ images, title, newsSlug }, idx) => (
          <Link
            href={`/news/${newsSlug}`}
            key={idx}
            className="group flex aspect-[4/3] h-[20rem] max-w-[90vw] flex-col gap-4 overflow-hidden rounded-sm"
          >
            <div className="relative aspect-[3/4] h-full">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                className="object-cover object-center"
              />
            </div>
            <p className="inline-flex items-center gap-4 text-left text-lg text-color-1 transition-all duration-500 ease-in-out group-hover:text-3xl">
              {title} <BsArrowRight className="min-w-6" />
            </p>
          </Link>
        ))}
    </ReactResponsiveCarousel>
  );
};

const News = () => {
  return (
    <section id="news" className="overflow-hidden bg-primary-4">
      <div className="wrapper wrapper-pad flex flex-col gap-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div className="text-color-1">
            <h1>{config.title}</h1>
            <p>{config.description}</p>
          </div>
          <div>
            <Link href={config.button.url} className="w-fit">
              <Button>{config.button.text}</Button>
            </Link>
          </div>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            x: "100%",
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.5, // Animation duration
              easings: true,
            },
          }}
        >
          <NoSSR>
            <NewsCarousel />
          </NoSSR>
        </motion.div>
      </div>
    </section>
  );
};

export default News;
