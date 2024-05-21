import React from "react";

const config = {
  title: "Upcoming Events",
  description:
    "Ready to take your startup to the next level?  Sarvaha offers a dynamic environment and valuable resources to help your business flourish.  To be eligible for our program, your startup should meet the following criteria:",
  image: {
    src: "/images/pages/home/roadmap.png",
    alt: "Roadmap image",
  },
};

const Eligibility = () => {
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

export default Eligibility;
