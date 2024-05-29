"use client";

import { cn } from "@/app/lib/utils";
import { motion } from "framer-motion";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoYoutube,
} from "react-icons/io";
import Button from "../ui/Button";
import Link from "next/link";

const config = {
  social: {
    title: "CONNECT WITH US",
    subTitle: "Stay in the loop on all things",
    subscribe: {
      input: {
        type: "email",
        placeholder: "Email Address",
      },
      button: {
        text: "SUSCRIBE",
      },
    },
    socials: [
      {
        title: "Facebook",
        url: "https://www.facebook.com",
        icon: <IoLogoFacebook />,
      },
      {
        title: "Twitter",
        url: "https://www.x.com",
        icon: <FaXTwitter />,
      },
      {
        title: "YouTube",
        url: "https://www.youtube.com",
        icon: <IoLogoYoutube />,
      },
      {
        title: "LinkedIn",
        url: "https://www.linkedin.com",
        icon: <IoLogoLinkedin />,
      },
      {
        title: "Instagram",
        url: "https://www.instagram.com",
        icon: <IoLogoInstagram />,
      },
    ],
  },
  columns: [
    {
      title: "ABOUT",
      links: [
        {
          title: "About",
          url: "/about",
        },
        {
          title: "Management",
          url: "/about#management",
        },
        {
          title: "Events",
          url: "/events",
        },
        {
          title: "News",
          url: "/#news",
        },
      ],
    },
    {
      title: "DISCOVER",
      links: [
        {
          title: "Built At Sarvah",
          url: "/#startups",
        },
        {
          title: "Community Engagement",
          url: "/events",
        },
        {
          title: "Contact",
          url: "/contact",
        },
        {
          title: "Diversity & Inclusion",
          url: "/incubation",
        },
        {
          title: "Giving",
          url: "/incubation#services",
        },
      ],
    },
  ],
};

const LinkGroup = ({
  group,
}: {
  group: {
    title: string;
    links: {
      title: string;
      url: string;
    }[];
  };
}) => {
  return (
    <div className="mx-auto flex flex-col items-center gap-4 md:items-start">
      <b>{group.title}</b>
      <div className="flex flex-col items-center gap-1 md:items-start">
        {group.links.map((link, idx) => (
          <motion.a
            href={link.url}
            key={idx}
            className="w-fit"
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{ scale: 0.9 }}
          >
            {link.title}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

const SocialsGroup = ({
  className,
}: React.InputHTMLAttributes<HTMLDivElement> & {}) => {
  const section = config.social;
  return (
    <div
      className={cn(
        "flex flex-col items-center gap-4 lg:items-start",
        className,
      )}
    >
      <b>{section.title}</b>
      <div className="flex flex-col items-center gap-2 md:items-start">
        <p>{section.subTitle}</p>
        <input
          type={section.subscribe.input.type}
          required
          placeholder={section.subscribe.input.placeholder}
          className="h-full border-2 border-color-1 bg-white/30 p-1 outline-none ring-0"
        />
        <Button style={{ borderRadius: 0 }}>
          {section.subscribe.button.text}
        </Button>
        <div className="flex flex-wrap items-center gap-2">
          {section.socials.map((social, idx) => (
            <motion.a
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{ scale: 0.9 }}
              href={social.url}
              target="_blank"
              className="text-xl text-secondary-1"
              key={idx}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};
const Footer = () => {
  return (
    <footer className="bg-primary-4 text-color-1">
      <div className="wrapper wrapper-pad grid grid-cols-1 gap-8 sm:grid-cols-2 lg:!grid-cols-3">
        {config.columns.map((group, idx) => (
          <LinkGroup group={group} key={idx} />
        ))}
        <SocialsGroup className={"sm:col-span-3 lg:!col-span-1"} />
      </div>
      <div className="bg-secondary-4">
        <div className="wrapper p-2 text-center">
          All rights reserved Sarvah &copy; 2024 | Designed and developed by{" "}
          <Link
            href="https://www.aeonstechnologies.com/"
            target="_blank"
            className="text-primary-4 underline"
          >
            Aeons Technologies
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
