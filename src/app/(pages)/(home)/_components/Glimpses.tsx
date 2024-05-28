import React, { useMemo } from "react";
import Image from "next/image";
import { Carousel as ReactResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GradientOverlay } from "@/app/_components/ui/GeadientOverlay";
import NoSSR from "@/app/_components/NoSSR";
import { useWindowDimensions } from "@/app/hooks/useWindowDimensions";
import { motion } from "framer-motion";
const config = {
  title: "SGGSIE&T Glimpses",
  description:
    "A Vibrant Campus Cultivating Innovation, Excellence and Enthusiasm",

  glimpses: [
    {
      url: "/images/pages/home/gl1.jpg",
      alt: "SGGSIE&T Nanded College",
      text: "Nestled amidst lush greenery, SGGSIE&T Nanded College is a tranquil oasis of learning and growth.",
    },
    {
      url: "/images/pages/home/gl2.jpg",
      alt: "SGGSIE&T Nanded Campus",
      text: "The campus of SGGSIE&T Nanded is a harmonious blend of architectural brilliance and natural splendor, creating a visually captivating and inspiring environment.",
    },
    {
      url: "/images/pages/home/gl3.jpg",
      alt: "SGGSIE&T Nanded Campus",
      text: "Meticulously designed buildings seamlessly integrate with the surrounding landscapes, showcasing a perfect symbiosis between modern infrastructure and environmental preservation.",
    },
    {
      url: "/images/pages/home/gl4.jpg",
      alt: "SGGSIE&T Nanded College",
      text: "The college's commitment to inclusivity and diversity is reflected in the vibrant cultural events and celebrations that bring together students from various backgrounds, creating a harmonious and enriching environment.",
    },
    {
      url: "/images/pages/home/gl5.jpg",
      alt: "SGGSIE&T Nanded College",
      text: "Sporting events and inter-college competitions foster a spirit of camaraderie and sportsmanship among the students.",
    },
    {
      url: "/images/pages/home/gl6.jpg",
      alt: "SGGSIE&T Nanded College",
      text: "The vibrant student community actively participates in social outreach programs, contributing to the betterment of the local community.",
    },
    {
      url: "/images/pages/home/gl7.jpg",
      alt: "SGGSIE&T Nanded College",
      text: "The verdant lawns and shaded alcoves offer a peaceful respite for students to unwind and rejuvenate between classes.",
    },
    {
      url: "/images/pages/home/gl8.jpg",
      alt: "SGGSIE&T Nanded College",
      text: "The college's vibrant student clubs and societies serve as melting pots for creativity, where students from various backgrounds collaborate, innovate, and bring their ideas to life.",
    },
    {
      url: "/images/pages/home/gl9.jpg",
      alt: "SGGSIE&T Nanded College",
      text: "SGGSIE&T's commitment to innovation and entrepreneurship enables students to transform their creative ideas into tangible solutions, fostering a culture of entrepreneurial spirit and risk-taking.",
    },
    {
      url: "/images/pages/home/gl10.jpg",
      alt: "SGGSIE&T Nanded College",
      text: "At SGGSIE&T Nanded, diversity is celebrated, and unity is woven into the fabric of the institution, creating a harmonious tapestry of cultures, thoughts, and perspectives.",
    },
    {
      url: "/images/pages/home/gl11.jpg",
      alt: "SGGSIE&T Nanded College",
      text: "With its perfect harmony of academic excellence, environmental consciousness, and artistic expression, the campus of SGGSIE&T Nanded College stands as a testament to the institution's unwavering dedication to holistic education and personal growth.",
    },
  ],
};
const GlimpsesCarousel = () => {
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
      {config.glimpses.map(({ url, alt, text }, idx) => (
        <div
          key={idx}
          className="group relative aspect-[3/4] h-[30rem] overflow-hidden rounded-sm"
        >
          <Image
            src={url}
            alt={alt}
            fill
            className="object-cover object-center transition-all duration-1000 ease-in-out group-hover:scale-110"
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

const Glimpses = () => {
  return (
    <section className="wrapper wrapper-pad">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h1 className="pb-4 text-3xl md:text-4xl">{config.title}</h1>
            <p>{config.description}</p>
          </div>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            x: "-100%",
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
            <GlimpsesCarousel />
          </NoSSR>
        </motion.div>
      </div>
    </section>
  );
};

export default Glimpses;
