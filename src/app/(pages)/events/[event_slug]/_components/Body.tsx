import React from "react";
import { TEvent } from "../../events";
import { CiCalendar } from "react-icons/ci";
import { IoIosTimer } from "react-icons/io";
import { TbLocation } from "react-icons/tb";

const BodyHeader = ({ event }: { event: TEvent }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1>{event.title}</h1>
      <p>{event.description}</p>
      <div className="flex flex-wrap items-center gap-2">
        <p className="flex items-center gap-1">
          <CiCalendar className="text-primary-4" /> {event.day}
        </p>
        <p className="flex items-center gap-1">
          <IoIosTimer className="text-primary-4" /> {event.time}
        </p>
      </div>
      <p className="flex items-center gap-1">
        <TbLocation className="text-primary-4" />
        {event.location}
      </p>
    </div>
  );
};

const Body = ({ config: event }: { config: TEvent }) => {
  return (
    <section className="wrapper wrapper-pad">
      <div className="flex flex-col gap-4">
        <BodyHeader event={event} />
        <div className="h-1 w-full bg-[#D9D9D9]" />
        <div className="flex flex-col gap-4">
          {event.details.map((detail, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <h3>{detail.title}</h3>
              {detail.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Body;
