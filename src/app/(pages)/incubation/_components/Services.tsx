import { cn } from "@/app/lib/utils";
import Image from "next/image";
import React, { RefObject, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaRegLightbulb } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa6";

const config = {
  title: "Services",
  servicesList: [
    {
      title: "Mentorship Program",
      description:
        "Our experienced mentors provide personalized guidance and support, sharing their expertise and insights to help entrepreneurs navigate the challenges of building a successful business.",
      image: {
        url: "/images/pages/incubation/services/ser1.jpg",
        alt: "Mentorship image",
      },
    },
    {
      title: "Investor Connect",
      description:
        "We facilitate connections with potential investors, including angel investors, venture capitalists, and strategic partners, to help secure the funding needed to scale your venture.",
      image: {
        url: "/images/pages/incubation/services/ser2.jpg",
        alt: "Mentorship image",
      },
    },
    {
      title: "Lab and Testing Infrastructure",
      description:
        "Our state-of-the-art facilities and co-working spaces provide entrepreneurs with access to the resources and infrastructure they need to grow their businesses efficiently.",
      image: {
        url: "/images/pages/incubation/services/ser3.jpg",
        alt: "Mentorship image",
      },
    },
    {
      title: "Entrepreneurship Training",
      description:
        "Our comprehensive training programs equip entrepreneurs with the knowledge, skills, and mindset necessary to succeed in today's competitive business landscape.",
      image: {
        url: "/images/pages/incubation/services/ser4.jpg",
        alt: "Mentorship image",
      },
    },
    {
      title: "Access To Network",
      description:
        "Join our vibrant community of entrepreneurs, industry experts, and business leaders, fostering valuable connections and collaborations that can propel your venture forward.",
      image: {
        url: "/images/pages/incubation/services/ser5.jpg",
        alt: "Mentorship image",
      },
    },
    {
      title: "Legal and IP",
      description:
        "Our team of legal professionals provides guidance on intellectual property protection, contract negotiations, and compliance matters, ensuring your business operates within legal boundaries.",
      image: {
        url: "/images/pages/incubation/services/ser6.jpg",
        alt: "Mentorship image",
      },
    },
    {
      title: "Funding Support",
      description:
        "We assist entrepreneurs in securing funding through various channels, including seed funding, grants, and investor pitches, providing the financial resources needed to bring their ideas to life.",
      image: {
        url: "/images/pages/incubation/services/ser7.jpg",
        alt: "Mentorship image",
      },
    },
    {
      title: "Business and Finance Advisory",
      description:
        "Our experienced advisors offer strategic guidance on financial planning, market analysis, and business model development, helping entrepreneurs make informed decisions for sustainable growth.",
      image: {
        url: "/images/pages/incubation/services/ser8.jpg",
        alt: "Mentorship image",
      },
    },
  ],
};

export const headerVariants = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
  hide: {
    y: "-100%",
    opacity: 0,
  },
};

export const descriptionVariants = {
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
  hide: {
    y: "100%",
    opacity: 0,
  },
};

export const imageVariants = {
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
  hide: {
    x: "-100%",
    opacity: 0,
  },
};

const Services = () => {
  const [selected, setSelected] = useState(0);

  const displayInfoRef: RefObject<HTMLDivElement> = useRef(null);

  const scrollToDisplayInfo = () => {
    displayInfoRef.current?.scrollIntoView({ block: "center" });
  };

  return (
    <section id="services" className="bg-primary-4">
      <div className="wrapper wrapper-pad flex flex-col gap-4 text-color-1">
        <h2>{config.title}</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {config.servicesList.map((service, idx) => (
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setSelected(idx);
                scrollToDisplayInfo();
              }}
              key={idx}
              className={cn(
                "flex items-center gap-2 border border-secondary-1 text-color-1 transition-all ease-in-out hover:cursor-pointer",
                selected === idx && "bg-secondary-1 text-color-2",
              )}
            >
              <span className="p-2">
                {selected === idx ? <FaLightbulb /> : <FaRegLightbulb />}
              </span>
              <p className="p-2">{service.title}</p>
            </motion.div>
          ))}
        </div>
        <div
          className="flex flex-col items-center gap-4 sm:flex-row"
          ref={displayInfoRef}
        >
          <motion.div
            className="relative size-[20rem]"
            key={`${selected}-image`}
            variants={imageVariants}
            animate="show"
            initial="hide"
          >
            <Image
              src={config.servicesList[selected].image.url}
              fill
              alt={config.servicesList[selected].image.alt}
              className="object-cover object-center"
            />
          </motion.div>
          <div className="flex flex-[2] flex-col gap-2">
            <motion.h3
              key={`${selected}-title`}
              variants={headerVariants}
              animate="show"
              initial="hide"
            >
              {config.servicesList[selected].title}
            </motion.h3>
            <motion.p
              key={`${selected}-description`}
              variants={descriptionVariants}
              animate="show"
              initial="hide"
            >
              {config.servicesList[selected].description}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
