import { cn } from "@/app/lib/utils";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineContentCopy } from "react-icons/md";
import { motion } from "framer-motion";

const config = {
  title: "Apply Now",
  description:
    "Welcome to our startup incubation program, specifically structured to equip you with the necessary resources and support as you embark on your journey to business success. Our program is committed to fostering innovation and entrepreneurship, providing a nurturing ground for your ideas to flourish. Here's a detailed overview of what you can expect from us:",
  subsection: {
    title: "Resources and Support Offerings:",
    points: [
      {
        title: "Pre-Accelerator Programs",
        description:
          " For those in the initial stages of their startup journey, we offer programs that help refine your business model and prepare you for the challenges ahead.",
      },
      {
        title: "Mentorship",
        description:
          "Access to a network of experienced mentors who can guide you through strategic decisions and introduce valuable connections.",
      },
      {
        title: "Full-Time Staff and Operations Support",
        description:
          "Our team is here to assist you with operational tasks and strategy development, ensuring that your startup runs smoothly.",
      },
      {
        title: "Design Sprint Workshops",
        description:
          "We encourage rapid iteration and action, often achieved through design sprint workshops where you can test and refine your program components.",
      },
    ],
  },
  howToApply: {
    title: "How to Apply?",
    description:
      "How to Apply: To apply for our program, please submit your application along with a brief description of your startup and what you hope to achieve during your time with us. Our selection process is competitive, and we look forward to reviewing your submission.",
    links: [
      {
        title: "Email to us at",
        url: {
          label: "sarvah@sggs.ac.in",
          url: "mailto:sarvah@sggs.ac.in",
        },
      },
    ],
  },
  footnote:
    "Once again, we are thrilled to have you here and are excited to witness your progress. Remember, the journey of a thousand miles begins with a single step, and we are here to support you every step of the way.",
};

const AccordionItem = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          "flex items-center justify-between gap-6 border border-color-2 p-2 transition-all duration-500 ease-in-out hover:cursor-pointer",
          isOpen && "bg-primary-4 text-color-1",
        )}
      >
        <h3>{title}</h3>
        <span
          className={cn(
            "rotate-0 transition-transform duration-500 ease-in-out",
            isOpen && "rotate-180",
          )}
        >
          <IoIosArrowDown size={30} />
        </span>
      </div>
      <div
        className={cn(
          `max-h-0 overflow-hidden border border-t-0 border-color-2 p-0 transition-all duration-500 ease-in-out`,
          isOpen && "max-h-[300rem] p-2",
        )}
      >
        <p>{description}</p>
      </div>
    </div>
  );
};

const HowToApply = () => (
  <div className="flex flex-col gap-4 border-2 border-secondary-1 bg-primary-4 p-4 text-color-1">
    <h2>{config.howToApply.title}</h2>
    <div className="flex flex-col items-center gap-6 sm:flex-row">
      <p className="flex-1">{config.howToApply.description}</p>
      <div className="flex flex-1 flex-col gap-2">
        {config.howToApply.links.map((link, idx) => (
          <div
            className="flex flex-col items-start gap-2 sm:items-end"
            key={idx}
          >
            <h3 className="text-color-1">{link.title}</h3>
            <div className="flex items-end gap-1">
              <Link
                className="text-header-text-2 text-secondary-1 sm:text-header-text-1"
                href={link.url.url}
              >
                {link.url.label}
              </Link>
              <motion.span
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{ scale: 0.9 }}
                className="mb-2 hover:cursor-pointer"
                onClick={() => {
                  navigator.clipboard.writeText(link.url.label);
                }}
              >
                <MdOutlineContentCopy />
              </motion.span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
const Apply = () => {
  return (
    <section id="apply" className="wrapper wrapper-pad">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <h2>{config.title}</h2>
          <p>{config.description}</p>
        </div>
        <HowToApply />
        <div className="flex flex-col gap-4">
          <h2>{config.subsection.title}</h2>
          {config.subsection.points.map((point, idx) => (
            <AccordionItem
              key={idx}
              title={point.title}
              description={point.description}
            />
          ))}
        </div>
        <p>{config.footnote}</p>
      </div>
    </section>
  );
};

export default Apply;
