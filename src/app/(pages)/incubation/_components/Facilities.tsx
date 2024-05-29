import { GradientOverlay } from "@/app/_components/ui/GeadientOverlay";
import { cn } from "@/app/lib/utils";
import Image from "next/image";
import React, { RefObject, useRef, useState } from "react";
import { motion } from "framer-motion";
const config = {
  title: "Facilities",
  description:
    "Sarvah  Incubation Centre offers state-of-the-art facilities and resources to support the growth and development of startups. Some of the facilities available to our incubatees include:",
  facilities: [
    {
      src: "/images/pages/incubation/im1.png",
      alt: "Co-working Spaces",
      description:
        "Co-working Spaces: Collaborative workspaces designed to foster creativity and innovation.",
    },
    {
      src: "/images/pages/incubation/im2.png",
      alt: "Facility2 image",
      description:
        "Labs: Equipped with cutting-edge technology and equipment for prototyping and product development.",
    },
    {
      src: "/images/pages/incubation/im3.png",
      alt: "Facility3 image",
      description:
        "Mentorship: Access to a network of experienced mentors and industry experts who provide guidance and support.",
    },
    {
      src: "/images/pages/incubation/im4.png",
      alt: "Facility4 image",
      description:
        "Networking Opportunities: Regular events, workshops, and networking sessions to connect with fellow entrepreneurs, investors, and industry professionals.",
    },
    {
      src: "/images/pages/incubation/im5.png",
      alt: "Facility4 image",
      description:
        "Funding Support: Assistance in securing funding through grants, investments, and partnerships.",
    },
    {
      src: "/images/pages/incubation/im5.png",
      alt: "Facility4 image",
      description:
        "Business Support Services: Access to legal, financial, and marketing support to help startups scale their businesses.",
    },
  ],
  footnote:
    "At Sarvah Incubation Centre, we are committed to providing startups with the resources and support they need to succeed. Join us and take your startup to the next level!",
};

const ImageGrid = () => {
  const [selectedImage, setSelectedImage] = useState(0);

  const displayImageRef: RefObject<HTMLDivElement> = useRef(null);

  const scrollToDisplayImage = () => {
    displayImageRef.current?.scrollIntoView({ block: "center" });
  };

  return (
    <div className="grid grid-cols-3 gap-6 sm:grid-rows-2">
      <motion.div
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
      </motion.div>
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
      <p>{config.footnote}</p>
    </section>
  );
};

export default Facilities;
