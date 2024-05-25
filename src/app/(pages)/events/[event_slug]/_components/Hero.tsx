import React from "react";

import { Carousel as ReactResponsiveCarousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { cn } from "@/app/lib/utils";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

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
        "absolute top-[50%] z-10 flex size-12 translate-y-[-50%] items-center justify-center rounded-full bg-primary-4 text-color-1 opacity-80 transition-all duration-500 ease-in-out hover:cursor-pointer hover:opacity-100 sm:size-20",
        label === "previous" && "left-8 sm:left-16",
        label == "next" && "right-8 sm:right-16",
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

const HeroCarousel = ({
  images,
}: {
  images: { src: string; alt: string }[];
}) => {
  return (
    <ReactResponsiveCarousel
      statusFormatter={() => ""}
      swipeable
      autoPlay
      emulateTouch
      infiniteLoop
      interval={5000}
      showThumbs={false}
      renderArrowPrev={(goPrev) => {
        return <CustomButton label="previous" fn={goPrev} />;
      }}
      renderArrowNext={(goNext) => {
        return <CustomButton label={"next"} fn={goNext} />;
      }}
    >
      {images.map(({ src, alt }, idx) => (
        <div
          key={idx}
          className="group relative mx-auto h-[30rem] w-[95%] overflow-hidden rounded-sm sm:h-[40rem]"
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain object-center"
          />
        </div>
      ))}
    </ReactResponsiveCarousel>
  );
};

const Hero = ({ config }: { config: { src: string; alt: string }[] }) => {
  return (
    <div className="hero-header-pad wrapper-pad">
      <HeroCarousel images={config} />
    </div>
  );
};

export default Hero;
