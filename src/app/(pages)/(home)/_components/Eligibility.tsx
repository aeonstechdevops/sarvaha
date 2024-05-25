import React from "react";

const config = {
  title: "Selection Process",
  description:
    "Our selection process is designed to identify startups with the greatest potential for success. It typically involves the following steps:",
  eligibilityImage: "/images/pages/home/map.png",
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
        backgroundSize: "contain",
      }}
    >
      <div className="wrapper flex">
        <div className="w-2/3"></div>
        <div className="flex h-screen w-1/3 flex-col items-end justify-center pr-12 text-right">
          <h1 className=" pb-4 text-right text-3xl md:text-4xl">
            {config.title}
          </h1>
          <p className="text-light-text">{config.description}</p>
        </div>
      </div>
    </section>
  );
};

export default Eligibility;
