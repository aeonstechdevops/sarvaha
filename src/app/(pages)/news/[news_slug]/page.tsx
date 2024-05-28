import React from "react";
import { news } from "../news";
import NewsInner from ".";

const NewsInnerPage = ({
  params: { news_slug },
}: {
  params: { news_slug: string };
}) => {
  return <NewsInner news={news.find((news) => news.newsSlug === news_slug)} />;
};

export default NewsInnerPage;
