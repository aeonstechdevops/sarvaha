import Button from "@/app/_components/ui/Button";
import { GradientOverlay } from "@/app/_components/ui/GeadientOverlay";
import { cn } from "@/app/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoLogoLinkedin } from "react-icons/io";
import { directors, Member } from "../directors";

const config = directors;

const InfoCard = ({ member, idx }: { member: Member; idx: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isOdd = idx % 2;
  return (
    <div id={member.slug} className="flex flex-col gap-10">
      <div
        className={cn(
          "relative flex flex-col gap-4 md:flex-row",
          !isOdd && "md:flex-row-reverse",
        )}
      >
        <div
          className={cn(
            "top-[5rem] flex h-fit flex-1 flex-col items-center md:sticky",
            isOdd ? "md:items-start" : "md:items-end",
          )}
        >
          <div className="relative aspect-square h-[15rem]">
            <Image
              src={member.image.url}
              alt={member.image.alt}
              fill
              className="object-cover object-center"
            />
          </div>
          <h2
            className={cn(
              "flex flex-col items-center gap-2",
              isOdd ? "md:items-start" : "md:items-end",
            )}
          >
            <span className="text-center text-secondary-2">
              {config[idx].name}
            </span>{" "}
            <span className="text-primary-2">{config[idx].post}</span>
          </h2>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div
            className={cn(
              "relative flex max-h-[20rem] flex-col gap-4 overflow-hidden transition-all duration-500 ease-in-out",
              isOpen && "max-h-[300rem]",
            )}
          >
            {member.description.map((desc, idx) => (
              <p key={idx}>{desc}</p>
            ))}
            <GradientOverlay
              className={cn(
                "bg-gradient-to-t from-white to-white/0 transition-all duration-500 ease-in-out",
                isOpen && "opacity-0",
              )}
            />
          </div>
          <div
            className={cn(
              "flex items-center justify-between",
              isOdd && "flex-row-reverse",
            )}
          >
            <Link
              href={member.linkedin.url}
              target="_blank"
              className="w-fit rounded-full text-3xl text-secondary-4"
            >
              <IoLogoLinkedin />
            </Link>
            <Button
              onClick={() => setIsOpen(!isOpen)}
              className={cn("w-fit ", isOdd ? "right-0" : "left-0")}
            >
              Read {`${isOpen ? "Less" : "More"}`}
            </Button>
          </div>
        </div>
        {/* separator in secondary color */}
      </div>
      <div className="mx-auto h-px w-[70%] bg-secondary-1" />
    </div>
  );
};
const Info = () => {
  return (
    <section className="wrapper wrapper-pad">
      <div className="flex flex-col gap-10">
        {config.map((member, idx) => (
          <InfoCard member={member} key={idx} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default Info;
