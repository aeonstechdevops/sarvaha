import InnerInfo from "@/app/_components/InnerInfo";

const config = {
  paragraphs: [
    {
      title: "",
      paras: [
        "SARVAH - “SGGSIE&T Alumni Run Venture Accelerator Hub” is inspired by the word “सर्व:” meaning all, everything, inclusive. The Incubator will assist students, as well as other startup aspirants in ALL ways; EVERYTHING from mentoring, to providing equipment, technology support and industry connect, and test environment etc. for building prototypes, product-market fit analysis, help in arranging for early adopters and INCLUSIVE of assistance in making pitches to angel investors and obtaining seed funding.",
        `A section-8 not-for-profit company, "SARVAH Incubation Foundation" is promoted by the alumni of SGGSIE&T, Nanded. It was inaugurated on 8th of August 2023 at the auspicious hands of Shri. Sunil Raithatha, Chairman, Board of Governors, SGGSIE&T, Nanded. Entrepreneur, in the presence of Founder Directors of SARVAH - Mr. Vikas Rathod (Director, Zeal Mfg, Pune - pioneers in the manufacturing of electro-technical calibration standards in India) and Mr. Abhay Deshpande (founder of Recykal, a serial entrepreneur and alumnus) and several other senior Alumni, faculty and students of SGGSIE&T.`,
        `The idea of this company germinated in Alumni forums and was actively pursued by past and present Directors of the institute, was supported by governing body, faculty, and other mentors like Mr. Prasad Kokil, MAGIC (accelerator at Aurangabad promoted by CMIA).`,
      ],
    },
  ],
};

const Info = () => {
  return <InnerInfo config={config} />;
};

export default Info;
