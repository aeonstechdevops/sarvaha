import { cn } from "@/app/lib/utils";
import Image from "next/image";
import React, { RefObject, useRef, useState } from "react";
import { motion } from "framer-motion";

const config = {
  title: "Services",
  servicesList: [
    {
      title: "Mentorship Program",
      description:
        "We provide mentorship to students who are looking to start their entrepreneurial journey. Our mentorship program is designed to help students develop the skills and knowledge they need to succeed in the world of startups.",
      image: {
        url: "/images/pages/incubation/service.png",
        alt: "Mentorship image",
      },
    },
    {
      title: "Investor Connect",
      description:
        "We provide investors with a platform to connect with potential investors and partners. Our platform offers a range of services, including access to investment opportunities, networking events, and mentorship programs.",
      image: {
        url: "/images/pages/incubation/service.png",
        alt: "Mentorship image",
      },
    },
    {
      title: "Lab and Testing Infrastructure",
      description:
        "We provide a range of lab and testing infrastructure to help startups develop and test their products. Our infrastructure includes access to high-quality equipment, software, and resources to ensure that startups can develop and test their products effectively.",
      image: {
        url: "/images/pages/incubation/service.png",
        alt: "Mentorship image",
      },
    },
    {
      title: "Entrepreneurship Training",
      description:
        "We provide entrepreneurship training to students who are looking to start their own businesses. Our training program is designed to help students develop the skills and knowledge they need to succeed in the world of entrepreneurship.",
      image: {
        url: "/images/pages/incubation/service.png",
        alt: "Mentorship image",
      },
    },
    {
      title: "Internship and Recruitment Connect",
      description:
        "We provide internship and recruitment connect to startups looking to hire top talent. Our platform offers a range of services, including access to internship opportunities, job postings, and recruitment events.",
      image: {
        url: "/images/pages/incubation/service.png",
        alt: "Mentorship image",
      },
    },
    {
      title: "Legal and IP",
      description:
        "We provide legal and IP services to startups looking to protect their intellectual property and comply with legal requirements. Our services include legal advice, patent filing, and trademark registration.",
      image: {
        url: "/images/pages/incubation/service.png",
        alt: "Mentorship image",
      },
    },
    {
      title: "Marketing Support",
      description:
        "We provide marketing support to startups looking to promote their products and reach a wider audience. Our services include social media management, content creation, and advertising campaigns.",
      image: {
        url: "/images/pages/incubation/service.png",
        alt: "Mentorship image",
      },
    },
    {
      title: "Business and Finance Advisory",
      description:
        "We provide business and finance advisory to startups looking to grow their businesses and make informed financial decisions. Our advisory services include financial planning, budgeting, and investment advice.",
      image: {
        url: "/images/pages/incubation/service.png",
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
    <section className="bg-primary-4">
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
                <div className="relative size-6 ">
                  <Image src={service.image.url} alt={service.image.alt} fill />
                </div>
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
