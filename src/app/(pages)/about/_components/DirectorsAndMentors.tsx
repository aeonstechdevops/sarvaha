import Button from "@/app/_components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { motion } from "framer-motion";
import { directors, Member } from "../directors-and-mentors/directors";
import { useRouter } from "next/navigation";

const config = {
  title: "Meet Our Directors & Mentors",
  list: directors,
  button: {
    text: "Explore more",
    url: "/about/directors-and-mentors",
  },
};

const Card = ({ member }: { member: Member }) => {
  const router = useRouter();
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        transition: { ease: "easeInOut" },
      }}
      whileTap={{ scale: 0.98 }}
      className="border-light-text/25 flex w-min flex-col border hover:cursor-pointer"
      onClick={() => router.push(`/about/directors-and-mentors#${member.slug}`)}
    >
      <div className="relative aspect-[31/23] h-[15rem]">
        <Image
          src={member.image.url}
          alt={member.image.alt}
          fill
          className="object-contain object-center"
        />
      </div>
      <div className="flex items-center justify-between gap-2 p-4">
        <div className="flex flex-col gap-2">
          <h3>{member.name}</h3>
          <p className="text-body-text-2">{member.post}</p>
        </div>
        <Link
          href={member.linkedin.url}
          target="_blank"
          className="flex size-10 items-center justify-center rounded-full bg-gray-200 p-2 text-primary-4"
        >
          <IoLogoLinkedin size={20} />
        </Link>
      </div>
    </motion.div>
  );
};
const DirectorsAndMentors = () => {
  return (
    <section id="management" className="wrapper wrapper-pad">
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
