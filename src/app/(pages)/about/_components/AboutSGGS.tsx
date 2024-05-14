import React from "react";

const config = {
  title: "About SGGS",
  descriptionPoints: [
    "The Institute: Sarvaha Incubation Center is housed within the prestigious SGGS Institute of Engineering and Technology, known for its academic excellence and innovation.",
    "Gallery: Immerse yourself in the vibrant life of SGGS through our gallery, showcasing events, infrastructure, and moments of creativity.",
    "Infrastructure: Our center boasts world-class facilities, including labs, meeting rooms, and a startup lounge, designed to foster collaboration and creativity.",
    "Events: From hackathons to guest lectures, SGGS hosts a variety of events that enrich the entrepreneurial spirit. • Partners: Meet our esteemed partners who share our vision and support our mission to nurture innovation.",
  ],
  video: {
    url: "https://www.youtube.com/embed/a3ICNMQW7Ok?si=EUSRw3yJ3EFDUyLi",
  },
};

const AboutSGGS = () => {
  return (
    <section className="wrapper wrapper-pad">
      <div className="flex flex-col border-4 border-secondary-1 bg-primary-4 text-color-1 md:flex-row">
        <iframe
          src={config.video.url}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className=" min-h-[20rem] w-full md:min-h-[30rem]"
        />
        <div className="flex flex-col gap-4 p-8">
          <h2>{config.title}</h2>
          <ul className="list-inside list-disc">
            {config.descriptionPoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutSGGS;
