import React from "react";
import { TStartup } from "../../startups";

const BodyHeader = ({ news }: { news: TStartup }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1>{news.title}</h1>
    </div>
  );
};

const Body = ({ config: news }: { config: TStartup }) => {
  return (
    <section className="wrapper wrapper-pad">
      <div className="flex flex-col gap-4">
        <BodyHeader news={news} />
        <div className="h-1 w-full bg-[#D9D9D9]" />
        <div className="flex flex-col gap-4">
          {news.details.map((detail, idx) => (
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
