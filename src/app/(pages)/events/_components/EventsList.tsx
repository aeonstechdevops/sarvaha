import React from "react";
import { events, TEvent } from "../events";
import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { IoIosTimer } from "react-icons/io";
import { TbLocation } from "react-icons/tb";
import { trimChars } from "@/app/lib/utils";
import Link from "next/link";

const EventCard = ({ event }: { event: TEvent }) => {
  return (
    <Link
      href={`/events/${event.eventSlug}`}
      className="flex flex-col gap-4 rounded-md border border-[#D9D9D9] p-4 md:flex-row md:items-center"
    >
      <div className="relative aspect-square max-h-[20rem] min-h-[10rem] min-w-max overflow-hidden rounded-md">
        <Image
          className="object-cover object-center"
          src={event.images[0].src}
          alt={event.images[0].alt}
          fill
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3>{event.title}</h3>
        <p>{trimChars(event.description, 100)}</p>
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
    </Link>
  );
};

const EventsList = () => {
  return (
    <section className="wrapper wrapper-pad">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {events.map((event, idx) => (
          <EventCard key={idx} event={event} />
        ))}
      </div>
    </section>
  );
};

export default EventsList;
