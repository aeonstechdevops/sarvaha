import Button from "@/app/_components/ui/Button";
import { cn } from "@/app/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { CSSProperties, ReactNode, useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { Carousel as ReactResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const config = {
  title: "Highlights",
  subTitle: "Launch Your Dreams Here",
  description:
    "Our incubator provides the resources, mentorship, and collaborative environment you need to transform your innovative idea into a thriving business. We fuel the success of passionate entrepreneurs with industry expertise, networking opportunities, and the support system to propel you forward.",
  button: {
    text: "Explore",
    url: "/",
  },
  images: [
    {
      url: "/images/pages/home/highlight.png",
      alt: "Alt text",
    },
    {
      url: "/images/pages/home/highlight.png",
      alt: "Alt text",
    },
    {
      url: "/images/pages/home/highlight.png",
      alt: "Alt text",
    },
    {
      url: "/images/pages/home/highlight.png",
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
    <section className="wrapper wrapper-pad">
      <div className="flex flex-col items-stretch gap-4 md:flex-row">
        <div className="flex flex-[2] flex-col justify-between gap-2">
          <h1>{config.title}</h1>
          <div className="flex flex-col gap-4">
            <h2>{config.subTitle}</h2>
            <p>{config.description}</p>
            <Link href={config.button.url} className="w-fit">
              <Button>{config.button.text}</Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-[4]">
          <ImageCarousel />
        </div>
      </div>
    </section>
  );
};

export default Highlights;
