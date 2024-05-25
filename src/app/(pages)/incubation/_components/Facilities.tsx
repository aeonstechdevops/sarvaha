import { GradientOverlay } from "@/app/_components/ui/GeadientOverlay";
import { cn } from "@/app/lib/utils";
import Image from "next/image";
import React, { RefObject, useRef, useState } from "react";
const config = {
  title: "Facilities",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
  facilities: [
    {
      src: "/images/pages/incubation/im1.png",
      alt: "Facility1 image",
      description:
        "1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    },
    {
      src: "/images/pages/incubation/im2.png",
      alt: "Facility2 image",
      description:
        "2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    },
    {
      src: "/images/pages/incubation/im3.png",
      alt: "Facility3 image",
      description:
        "3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    },
    {
      src: "/images/pages/incubation/im4.png",
      alt: "Facility4 image",
      description:
        "4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    },
    {
      src: "/images/pages/incubation/im5.png",
      alt: "Facility4 image",
      description:
        "5 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.",
    },
  ],
};

const ImageGrid = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const displayImageRef: RefObject<HTMLDivElement> = useRef(null);

  const scrollToDisplayImage = () => {
    displayImageRef.current?.scrollIntoView({ block: "center" });
  };

  return (
    <div className="grid grid-cols-3 gap-6 sm:grid-rows-2">
      <div
        className="relative col-span-3 min-h-[25rem] sm:row-span-2 lg:col-span-1"
        ref={displayImageRef}
      >
        <Image
          src={config.facilities[selectedImage].src}
          alt={config.facilities[selectedImage].alt}
          fill
          className="object-cover object-center"
        />
        <GradientOverlay className="bg-gradient-to-t from-black to-black/0" />
        <p className="absolute bottom-5 left-5 text-color-1">
          {config.facilities[selectedImage].description}
        </p>
      </div>
      {config.facilities.map(({ src, alt }, idx) => (
        <div
          key={idx}
          className="group relative col-span-3 min-h-[10rem] cursor-pointer overflow-hidden md:col-span-1"
          onClick={() => {
            setSelectedImage(idx);
            scrollToDisplayImage();
          }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-center transition-all duration-1000 ease-in-out group-hover:scale-110"
          />
          <p
            className={cn(
              "absolute bottom-2 left-2 bg-primary-2 p-1 text-color-1 transition-all duration-200 ease-in-out group-hover:bg-secondary-1",
            )}
          >
            Click to learn more
          </p>
        </div>
      ))}
    </div>
  );
};
const Facilities = () => {
  return (
    <section className="wrapper wrapper-pad flex flex-col gap-6">
      <div className="flex flex-col items-center gap-2">
        <h2>{config.title}</h2>
        <p className="text-center md:max-w-[60%]">{config.description}</p>
      </div>
      <ImageGrid />
    </section>
  );
};

export default Facilities;
