"use client";

import React from "react";
import { TNews } from "../news";
import Hero from "./_components/Hero";
import Body from "./_components/Body";

const NewsInner = ({ news }: { news: TNews | undefined }) => {
  if (!news) return <div>News not found</div>;
  return (
    <>
      <Hero config={news.images} />
      <Body config={news} />
    </>
  );
};

export default NewsInner;
