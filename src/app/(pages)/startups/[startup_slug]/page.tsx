import React from "react";
import { startups } from "../startups";
import StartupInner from ".";

const StartupInnerPage = ({
  params: { startup_slug },
}: {
  params: { startup_slug: string };
}) => {
  return (
    <StartupInner
      startups={startups.find(
        (startup) => startup.startupSlug === startup_slug,
      )}
    />
  );
};

export default StartupInnerPage;
