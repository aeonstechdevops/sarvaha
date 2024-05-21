import React from "react";

const config = {
  title: "Upcoming Events",
  description:
    "Ready to take your startup to the next level?  Sarvaha offers a dynamic environment and valuable resources to help your business flourish.  To be eligible for our program, your startup should meet the following criteria:",
  eligibilityImage: "/images/pages/home/roadmap.png",
  alt: "Roadmap image",
};

const Eligibility = () => {
  return (
    <section
      className="hidden lg:flex lg:h-screen lg:flex-row"
      style={{
        background: `url("${config.eligibilityImage}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-1/2"></div>
      <div className="flex h-screen w-1/2 flex-col items-end justify-center pr-12 text-right">
        <h1 className=" pb-4 text-right text-3xl md:text-4xl">
          {config.title}
        </h1>
        <p className="text-light-text">{config.description}</p>
      </div>
    </section>
  );
};

export default Eligibility;
