import React from "react";
import { TNews } from "../../news";
import { CiCalendar } from "react-icons/ci";

const BodyHeader = ({ news }: { news: TNews }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1>{news.title}</h1>
      <p>{news.description}</p>
      <div className="flex flex-wrap items-center gap-2">
        <p className="flex items-center gap-1">
          <CiCalendar className="text-primary-4" /> {news.day}
        </p>
      </div>
    </div>
  );
};

const Body = ({ config: news }: { config: TNews }) => {
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
