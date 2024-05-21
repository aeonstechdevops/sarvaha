import React from "react";
import EventInner from ".";
import { events } from "../events";

const EventInnerPage = ({
  params: { event_slug },
}: {
  params: { event_slug: string };
}) => {
  return (
    <EventInner
      event={events.find((event) => event.eventSlug === event_slug)}
    />
  );
};

export default EventInnerPage;
