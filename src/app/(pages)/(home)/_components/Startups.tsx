import React from "react";
import { LayoutGrid } from "@/app/_components/ui/layout-grid";
import { startups } from "../../startups/startups";
import Link from "next/link";
import Button from "@/app/_components/ui/Button";

const config = {
  title: "Our Start-ups",
  description:
    "At Sarvah, we're proud to foster a vibrant community of innovative startups across diverse industries. These passionate entrepreneurs are tackling real-world challenges and developing groundbreaking solutions. Explore the companies making waves and shaping the future:",
};
const Startups = () => {
  const cards = startups.map((startup, idx) => ({
    id: idx,
    content: (
      <div className="flex flex-col gap-4 text-color-1">
        <p className="text-header-text-3">{startup.title}</p>
        <Link href={`/startups/${startup.startupSlug}`}>
          <Button variant={"secondary"} className="w-fit">
            Learn More
          </Button>
        </Link>
      </div>
    ),
    thumbnail: startup.images[0].src,
    className:
      idx % 4 === 0 || (idx + 1) % 4 === 0 ? "md:col-span-2" : "md:col-span-1",
  }));
  return (
    <section
      id="startups"
      className="wrapper wrapper-pad grid justify-items-center"
    >
      <div className="px-8 text-center md:px-40 lg:px-60">
        <h1 className="pb-4 text-3xl md:text-4xl">{config.title}</h1>
        <p className="text-light-text">{config.description}</p>
      </div>
      <div className="h-screen w-full">
        <LayoutGrid cards={cards} />
      </div>
    </section>
  );
};

export default Startups;
