import Link from "next/link";
import React from "react";
import Button from "../ui/Button";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoYoutube,
} from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { cn } from "@/app/lib/utils";

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
          title: "Career",
          url: "/",
        },
        {
          title: "Management",
          url: "/",
        },
        {
          title: "Events",
          url: "/",
        },
        {
          title: "News",
          url: "/",
        },
      ],
    },
    {
      title: "DISCOVER",
      links: [
        {
          title: "Built At Sarvaha",
          url: "/",
        },
        {
          title: "Community Engagement",
          url: "/",
        },
        {
          title: "Contact",
          url: "/",
        },
        {
          title: "Diversity & Inclusion",
          url: "/",
        },
        {
          title: "Giving",
          url: "/",
        },
      ],
    },
    {
      title: "RESOURCES",
      links: [
        {
          title: "Accessibility",
          url: "/",
        },
        {
          title: "Jobs",
          url: "/",
        },
        {
          title: "Privacy Policy",
          url: "/",
        },
        {
          title: "Events",
          url: "/",
        },
        {
          title: "News",
          url: "/",
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
          <Link href={link.url} key={idx} className="w-fit">
            {link.title}
          </Link>
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
            <Link
              href={social.url}
              target="_blank"
              className="text-xl text-secondary-1"
              key={idx}
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
const Footer = () => {
  return (
    <footer className="wrapper-pad bg-primary-4 text-color-1">
      <div className="wrapper wrapper-pad grid grid-cols-1 gap-8 sm:grid-cols-3 lg:!grid-cols-4">
        {config.columns.map((group, idx) => (
          <LinkGroup group={group} key={idx} />
        ))}
        <SocialsGroup className={"sm:col-span-3 lg:!col-span-1"} />
        <div className="col-span-1 mx-auto mt-6 h-1 w-[80vw] gap-6 bg-white/10 sm:col-span-3 sm:w-[60vw] lg:!col-span-4" />
      </div>
    </footer>
  );
};

export default Footer;
