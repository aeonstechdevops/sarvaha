import Button from "@/app/_components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { motion } from "framer-motion";

const config = {
  title: "Meet Our Directors & Mentors",
  list: [
    {
      image: {
        url: "/images/pages/about/members/ad.png",
        alt: "Image of Abhay Deshpande.",
      },
      name: "Abhay Deshpande",
      post: "Board of Director",
      description:
        "There are many variations of passages of Lorem Ipsum available",
      linkedin: {
        url: "/",
      },
    },
    {
      image: {
        url: "/images/pages/about/members/vr.png",
        alt: "Image of Vikas Rathor.",
      },
      name: "Vikas Rathor",
      post: "Board of Director",
      description:
        "There are many variations of passages of Lorem Ipsum available",
      linkedin: {
        url: "/",
      },
    },
    {
      image: {
        url: "/images/pages/about/members/mk.png",
        alt: "Image of Manesh Kokare.",
      },
      name: "Manesh Kokare",
      post: "Board of Director",
      description:
        "There are many variations of passages of Lorem Ipsum available",
      linkedin: {
        url: "/",
      },
    },
    {
      image: {
        url: "/images/pages/about/members/yj.png",
        alt: "Image of Prof. Yashwant Y. Joshi.",
      },
      name: "Prof. Yashwant Y. Joshi",
      post: "Mentor/Advisor",
      description:
        "There are many variations of passages of Lorem Ipsum available",
      linkedin: {
        url: "/",
      },
    },
    {
      image: {
        url: "/images/pages/about/members/rs.png",
        alt: "Image of Shri Ravindra Shanbhag.",
      },
      name: "Shri Ravindra Shanbhag",
      post: "Board of Director",
      description:
        "There are many variations of passages of Lorem Ipsum available",
      linkedin: {
        url: "/",
      },
    },
    {
      image: {
        url: "/images/pages/about/members/rs.png",
        alt: "Image of Dr. Jaishri  Waghmare.",
      },
      name: "Dr. Jaishri  Waghmare",
      post: "Board of Director",
      description:
        "There are many variations of passages of Lorem Ipsum available",
      linkedin: {
        url: "/",
      },
    },
  ],
  button: {
    text: "Explore more",
    url: "/about/directors-and-mentors",
  },
};

const Card = ({
  member,
}: {
  member: {
    image: {
      url: string;
      alt: string;
    };
    name: string;
    post: string;
    description: string;
    linkedin: {
      url: string;
    };
  };
}) => (
  <motion.div
    whileHover={{
      scale: 1.05,
      transition: { ease: "easeInOut" },
    }}
    whileTap={{ scale: 0.98 }}
    className="border-light-text/25 flex w-min flex-col border"
  >
    <div className="relative aspect-[31/23] h-[15rem]">
      <Image
        src={member.image.url}
        alt={member.image.alt}
        fill
        className="object-contain object-center"
      />
    </div>
    <div className="flex flex-col gap-2 p-4">
      <h3>{member.name}</h3>
      <p className="text-body-text-2">{member.post}</p>
      <p>{member.description}</p>
      <Link
        href={member.linkedin.url}
        target="_blank"
        className="flex w-fit items-center justify-center rounded-full bg-gray-200 p-2 text-primary-4"
      >
        <IoLogoLinkedin />
      </Link>
    </div>
  </motion.div>
);
const DirectorsAndMentors = () => {
  return (
    <section className="wrapper wrapper-pad">
      <div className="flex flex-col items-center gap-4">
        <h2>{config.title}</h2>
        <div className="flex flex-wrap justify-center gap-6">
          {config.list.map((member, idx) => (
            <Card member={member} key={idx} />
          ))}
        </div>
        <Link href={config.button.url}>
          <Button>{config.button.text}</Button>
        </Link>
      </div>
    </section>
  );
};

export default DirectorsAndMentors;
