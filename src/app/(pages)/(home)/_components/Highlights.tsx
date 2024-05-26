import Button from "@/app/_components/ui/Button";
import { cn } from "@/app/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { Carousel as ReactResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { motion } from "framer-motion";

const config = {
  title: "Do you have an idea where we can support?",
  subTitle: "Launch Your Dreams Here",
  description:
    "If you have an innovative idea that you believe will have a beneficial impact, we are here to help you every step of the way. Our incubation program creates a supportive atmosphere for aspiring entrepreneurs to turn their ideas into successful businesses. Whether you're working on a revolutionary technology, a sustainable solution, or a disruptive business strategy, we provide the resources, mentorship, and network you need to make your concept a reality. Join us at the SARVAH Incubation Centre to create the future together!",
  button: {
    text: "Apply Now",
    url: "/",
  },
  images: [
    {
      url: "/images/pages/home/hl1.png",
      alt: "Alt text",
    },
    {
      url: "/images/pages/home/hl2.JPG",
      alt: "Alt text",
    },
  ],
};

const CustomButton = ({
  label,
  fn,
}: {
  label: "previous" | "next";
  fn: () => void;
}): React.JSX.Element => {
  return (
    <button
      className={cn(
        "absolute bottom-8 z-10 flex size-20 items-center justify-center rounded-full bg-primary-4 text-color-1 opacity-80 transition-all duration-500 ease-in-out hover:cursor-pointer hover:opacity-100",
        label === "previous" && "left-8",
        label == "next" && "right-8 md:left-32 md:right-0",
      )}
      onClick={fn}
    >
      {label === "previous" ? (
        <MdOutlineKeyboardArrowLeft size={40} />
      ) : (
        <MdOutlineKeyboardArrowRight size={40} />
      )}
    </button>
  );
};

const ImageCarousel = () => {
  return (
    <div className="relative w-full">
      <ReactResponsiveCarousel
        statusFormatter={() => ""}
        swipeable
        autoPlay
        emulateTouch
        infiniteLoop
        interval={5000}
        className="w-full"
        showThumbs={false}
        renderArrowPrev={(goPrev) => {
          return <CustomButton label="previous" fn={goPrev} />;
        }}
        renderArrowNext={(goNext) => {
          return <CustomButton label={"next"} fn={goNext} />;
        }}
      >
        {config.images.map(({ url, alt }, idx) => (
          <div key={idx} className=" relative h-[30rem] w-full md:h-[50rem]">
            <Image
              src={url}
              alt={alt}
              fill
              className="object-cover object-center"
            />
          </div>
        ))}
      </ReactResponsiveCarousel>
    </div>
  );
};

const Highlights = () => {
  return (
    <motion.section className="wrapper wrapper-pad overflow-hidden">
      <div className="flex flex-col items-stretch gap-4 md:flex-row">
        <motion.div
          className="flex flex-[2] flex-col justify-between gap-2"
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
          <h1>{config.title}</h1>
          <div className="flex flex-col gap-4">
            <h2>{config.subTitle}</h2>
            <p>{config.description}</p>
            <Link href={config.button.url} className="w-fit">
              <Button>{config.button.text}</Button>
            </Link>
          </div>
        </motion.div>
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
          className="flex flex-[4]"
        >
          <ImageCarousel />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Highlights;
