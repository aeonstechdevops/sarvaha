import React from "react";

const config = {
  title: "Selection Process",
  description:
    "Our selection process is designed to identify startups with the greatest potential for success. It typically involves the following steps:",
  image: {
    src: "/images/pages/home/map.png",
    alt: "Roadmap image",
  },
};

const SelectionProcess = () => {
  return (
    <section
      className="hidden lg:flex"
      style={{
        background: `url("${config.image.src}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
      }}
    >
      <div className="wrapper wrapper-pad flex justify-end">
        <div className="flex h-screen w-1/2 flex-col justify-center text-right">
          <h2>{config.title}</h2>
          <p>{config.description}</p>
        </div>
      </div>
    </section>
  );
};

export default SelectionProcess;
