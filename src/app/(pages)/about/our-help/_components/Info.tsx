import InnerInfo from "@/app/_components/InnerInfo";

const config = {
  paragraphs: [
    {
      title: "Specifically, SARVAH incubator offers:",
      paras: [
        `Free or low-cost workspace: This is often a physical location where startups can set up to commence their operations.`,
        `Access to extensive Library and Laboratory facilities, with high end equipment`,
        `Mentorship and expertise: Experienced professionals to guide and advise the
        startups on various aspects of bringing ideas to life, and viability of business .
        `,
        `Access to essential non-technical services: These include legal, accounting,
        and administrative assistance.
        `,
        `Funding opportunities: provide funding or connect startups with investors .`,
      ],
    },
    {
      title: `Program Structure:`,
      paras: [
        `Launch and Iterate Approach: Encouraging immediate action and continuous improvement, this approach helps in quickly validating your business model and gaining traction.`,
        `Masterclasses: Online sessions where you can learn from industry experts and gain insights into effective program design and management.`,
        `Expected Outcomes:
        `,
        `Successful Exit: Our program aims to produce startups that are not only viable but also attractive to investors, with a clear path to profitability.
        `,
        `Confidence Building: Through our program, you can develop the confidence to navigate the complexities of starting a business and take your idea to the next level.
        `,
      ],
    },
    {
      title: `To your Advantage:`,
      paras: [
        `SARVAH is attached to an Engineering Institute of repute : You get easy access to an entire resource of Library & Multi-Disciplinary Laboratories all at one place to develop and build your prototype.
        `,
        `Guidance on core Technical aspects of your idea : You will have quick and easy access to Professors, under various streams of Engineering, all under one roof, many of whom are recognised scientists, have several Research Papers published and also patents under their belt.
        `,
        `Customised Mentoring: Our mentors are carefully selected to match the stage of your startup and the specific needs of your founding team.
        `,
        `Assistance across all stages .
        `,
      ],
    },
  ],
};

const Info = () => {
  return <InnerInfo config={config} />;
};

export default Info;
