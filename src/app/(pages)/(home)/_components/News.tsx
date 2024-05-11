import React from "react";
import Image from "next/image";

const config = {
  title: "News",
  description: "Keep yourself updated with the latest News at Sarvaha",

  news: [
    {
      url: "/images/pages/home/news1.png",
      alt: "News1 image",
      text: "where dreams are nurtured and innovations take flight! Join us on a journey of creativity and entrepreneurship.",
    },
    {
      url: "/images/pages/home/news1.png",
      alt: "News1 image",
      text: "where dreams are nurtured and innovations take flight! Join us on a journey of creativity and entrepreneurship.",
    },
    {
      url: "/images/pages/home/news1.png",
      alt: "News1 image",
      text: "where dreams are nurtured and innovations take flight! Join us on a journey of creativity and entrepreneurship.",
    },
    {
      url: "/images/pages/home/news1.png",
      alt: "News1 image",
      text: "where dreams are nurtured and innovations take flight! Join us on a journey of creativity and entrepreneurship.",
    },
    {
      url: "/images/pages/home/news1.png",
      alt: "News1 image",
      text: "where dreams are nurtured and innovations take flight! Join us on a journey of creativity and entrepreneurship.",
    },
    {
      url: "/images/pages/home/news1.png",
      alt: "News1 image",
      text: "where dreams are nurtured and innovations take flight! Join us on a journey of creativity and entrepreneurship.",
    },
  ],
};

const News = () => {
  return (
    <section className=" h-screen mb-7 bg-primary-4">
      <div className="wrapper wrapper-pad mb-7 flex items-center justify-between space-x-4 ">
        <div className="left text-white">
          <h1 className="pb-4 text-3xl md:text-4xl">{config.title}</h1>
          <p >{config.description}</p>
        </div>
        <div className="right"></div>
      </div>
    </section>
  );
};

export default News;
