import React from "react";
import { news, TNews } from "../startups";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { trimChars } from "@/app/lib/utils";
import Link from "next/link";

const NewsCard = ({ news }: { news: TNews }) => {
  return (
    <Link
      href={`/news/${news.newsSlug}`}
      className="flex flex-col gap-4 rounded-md border border-[#D9D9D9] p-4 md:flex-row md:items-center"
    >
      <div className="relative aspect-square max-h-[20rem] min-h-[10rem] min-w-max overflow-hidden rounded-md">
        <Image
          className="object-cover object-center"
          src={news.images[0].src}
          alt={news.images[0].alt}
          fill
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3>{news.title}</h3>
        <p>{trimChars(news.description, 100)}</p>
        <div className="flex flex-wrap items-center gap-2">
          <p className="flex items-center gap-1">
            <CiCalendar className="text-primary-4" /> {news.day}
          </p>
        </div>
      </div>
    </Link>
  );
};

const NewsList = () => {
  return (
    <section className="wrapper wrapper-pad">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {news.map((news, idx) => (
          <NewsCard key={idx} news={news} />
        ))}
      </div>
    </section>
  );
};

export default NewsList;
