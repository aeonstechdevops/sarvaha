import React from "react";

const InnerInfo = ({
  config,
}: {
  config: {
    paragraphs: {
      title: string;
      paras: string[];
    }[];
  };
}) => {
  return (
    <section className="wrapper wrapper-pad">
      <div className="flex flex-col gap-6">
        {config.paragraphs.map((paragraph, idx) => (
          <div key={idx} className="flex flex-col gap-4">
            <h2>{paragraph.title}</h2>
            <div className="flex flex-col gap-2">
              {paragraph.paras.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InnerInfo;
