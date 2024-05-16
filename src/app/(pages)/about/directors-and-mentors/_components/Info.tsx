import Button from "@/app/_components/ui/Button";
import { GradientOverlay } from "@/app/_components/ui/GeadientOverlay";
import { cn } from "@/app/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { IoLogoLinkedin } from "react-icons/io";
type Member = {
  image: {
    url: string;
    alt: string;
  };
  name: string;
  post: string;
  description: string[];
  linkedin: {
    url: string;
  };
};
const config = {
  list: [
    {
      image: {
        url: "/images/pages/about/members/rs.png",
        alt: "Image of Shri Ravindra Shanbhag.",
      },
      name: "Shri Ravindra Shanbhag",
      post: "Board of Director",
      description: [
        `An Electronics & Telecommunication Engineer from SGGS Institute of Engineering & Technology,
          Nanded with specialization in Software Technology from National Centre for Software Technology
          (NCST). He has over 35 years of experience in Technology implementation, Operations and Software
          Application Delivery including in leading Large Public Sector enterprise like Air India and in senior
          positions in leading Large Private sector enterprise like Associate VP of Operations at ICICI Prudential
          Mutual Fund and Asst. General Manager in the Technology division of ICICI Bank. He also has to his
          credit, implementing amongst India’s first Online Services “India Online” to usher in Internet
          revolution in India in the early 1990s, through a startup DaRTNET and commercializing email and EDI
          (Electronic Data Interchange) for eCommerce.`,
      ],
      linkedin: {
        url: "/",
      },
    },
    {
      image: {
        url: "/images/pages/about/members/yj.png",
        alt: "Image of Prof. Yashwant Y. Joshi.",
      },
      name: "Prof. Yashwant Y. Joshi",
      post: "Mentor/Advisor",
      description: [
        `Prof. Yashwant V Joshi, Graduated (B. E.) in Electronics Engineering from SGGS institute of Engineering and Technology, Vishnupuri Nanded in 1986. He completed Post Graduation M. E. in Electronics Engineering also from the same institute in 1991. He then completed Ph. D. on the topic on the design of IIT Digital notch Filters from the Electrical Engineering Dept of IIT Delhi  in 1998. He also completed CMI Level 5 certification in Management and Leadership Earned 17 credits with level 5 from UKIERI – AICTE. He has undergone PMMMNMTT LEAP program (IIT Kharagpur 3 weeks and Cambridge University, UK – One week).
        He has attended many (More than 50 one/two weeks Short Term Training Programs in the areas of AI, Parallel Processing, Analog and Digital VLSI, Digital Signal Processing, C/C++ programming, Java Programming, Data Base management, Embedded systems etc. 
        He also coordinated more than 10 Short Term Training programs (one/two weeks) in the areas of Digital Signal and Image Processing, VLSI Design, Statistical Inferencing, Multirate Signal Processing.`,
        `He joined SGGS IE&T Nanded as Lecturer in 1986, became Assistant Professor in 1993 Professor in 2001. He served the institute in the capacities of Head of Department (2002-04), First Dean Academics (2004-2006), Dean Administration (2014-16) and as a teacher teaching several UG/PG Courses of Computer Science (1987-1993) and Electronics and Telecommunication Engineering (1994-2024). 17 students completed their PhD under his guidance and more than 50 students have completed their ME/MTech dissertation and more than 100 students for their B. Tech. projects.
        He has more than 50 Publications in refereed National and International Journals and more than 50 publications in national and international Conferences  of repute. `,
        `He served as Director of Walchand College of Engineering (2009-2013) on lien from SGGS IE&T Nanded and Director of SGGS IE&T Nanded (2018-2023). During his tenure he was instrumental in the establishment of SARVAH Incubation Foundation.  During his tenure the institute received best Institute award of SRTMU, Nanded (2023), 4th Rank ATAL ranking of institutions for innovation achievements (ARIIA-2020) under Govt. /Aided Institute category at National Level. He also was instrumental in setting up AICTE IDEA Laboratory for creating the culture of startups and Entrepreneurship and motivating students to undertake Project based learning. He also has taken keen interest in the establishment of facilities for industry 4.0. Under this a state of art Industrial Robotics training Center was established with 6 YASKAWA Robots of 10 KG payload capacity.`,
        `He is a member of BOG, Govt Engineering College, Amravati (2023 onwards). He is on several committees of DTE/AICTE/State Govt. Contributing to policies like NEP2020.`,
      ],
      linkedin: {
        url: "/",
      },
    },
    {
      image: {
        url: "/images/pages/about/members/ad.png",
        alt: "Image of Abhay Deshpande.",
      },
      name: "Abhay Deshpande",
      post: "Board of Director",
      description: [
        `Abhay Deshpande is a distinguished serial entrepreneur and a TEDx speaker whose innovative mindset, leadership capabilities, and expertise in digital marketplaces have charted a successful career over two decades.`,
        `Abhay is the Founder at Recykal, a clean-tech company he established in 2016 with a strong focus on the circular economy. He has reshaped the conversation around waste management and recycling with his vision to mainstream sustainability, Environmental, Social, and Governance (ESG) practices and circularity.`,
        `His goal to channel 5% of India's waste back into the circular economy exemplifies his pursuit of progressive environmental solutions.`,
        `Before Recykal, Abhay was the driving force behind Martjack, India's first Software-as-a-Service (SAAS) company specializing in enterprise e-commerce platforms. Founded in 2007, Martjack, acquired by Capillary Technologies in 2015, marked one of the largest SAAS deals in India at the time, an accomplishment that underscores Abhay's business acumen.`,
        `Abhay started his entrepreneurial journey in 1998 with Malamall.com, recognized as one of India's pioneering e-commerce ventures. This initiative was an early indicator of his foresight and adaptability, which continue to define his career.`,
        `Whether in the boardroom or at industry events, Abhay's insights and leadership consistently bring a fresh perspective, inspiring others to think differently about the role of business in society.`,
      ],
      linkedin: {
        url: "/",
      },
    },
    {
      image: {
        url: "/images/pages/about/members/vr.png",
        alt: "Image of Vikas Rathor.",
      },
      name: "Vikas Rathor",
      post: "Board of Director",
      description: [
        `I did my graduation (BE Electronics)from SGGS College of Engineering & Technology, Nanded in 1989.After my job with Electronics Testing & Development Center (ETDC), Pune,I started my own activity from 1996. I did not have any background of business. I started my own company (ZEAL MANUFACTURING).Initially equipment of all brands of Electronics Test and Measurement were repaired and maintained by me.I must have repaired thousands of Oscilloscopes, Multimeters etc. I designed products one after anither and introduced them into market. I faced problems both financial and technical while launching every new product.I overcame them by hardwork. I implemented quality management systems like ISO 9001 for manufacturing activity and ISO 17025 for management of our in house calibration laboratory. So far I have designed more than 100 products.Few of them are Multifunction Calibrator,  Three phase power energy meter Calibrator,  Precision AC & DC High current Sources,  Precision AC & DC High Voltage Sources, Precision Decade Resistance & Inductance & Capacitance Boxes, AC DC High Voltage Measurement Probes, DC Regulated Power Supplies,  AC Power supplies,  High Voltage Breakdown testers, Electronic loads etc. Indias' majority of the Calibration and testing laboratories,  research institutes, engineering / technological institutes, electrical/electronics/automation industries are our customers. In my company effectively I am responsible for Design Development, Production, Testing, Calibration and Marketing too. While implementing both QMS, I learnt about other management skills, most important among them is HR management. There are about 50 employees are working at ZEAL. `,
        `I have got patent granted for Multifunction Calibrator.  More than 500 Calibration labs of India and about 150 outside India are our customers.  We have till date exported products to more than 55 countries.`,
      ],
      linkedin: {
        url: "/",
      },
    },
    {
      image: {
        url: "/images/pages/about/members/mk.png",
        alt: "Image of Manesh Kokare.",
      },
      name: "Manesh Kokare",
      post: "Board of Director",
      description: [
        `Dr. Manesh B Kokare is the Director of Shri Guru Gobind Singhji Institute of Engineering and Technology Vishnupuri Nanded. Prof Kokare has an impressive academic background. He is credited with Postdoctoral experience from the University of California, Santa Barbara, USA, under the BOYSCAST Fellowship, following his Ph.D. from the Department of Electronics and Electrical Communication Engineering of the Indian Institute of Technology (IIT) Kharagpur. He received BE(Electronics) and ME( Electronics) from SGGSIE&T Nanded. He has been the recipient of several prestigious awards, such as the national level AICTE Visveswaraya Best Teacher Award (2020), SRTM University Best Teacher Award (2013), BOYSCAST Postdoctoral fellowship of the Department of Science and Technology Government of India (2011), “Best Achievements in Career" awarded by Alumni of Shri Guru Gobind Singhji Institute of Engineering and Technology, Nanded, in the Silver Jubilee Alumni Meet held 26th -27th December 2009, AICTE Career Award for Young Teachers (C.Y.A.T.)" of Rs. 10.5. Lakh for 2005-06, International Association of Pattern Recognition (UK) Travel Bursary Award of $500, with all these fortified with several Best Paper Awards.`,
        `He has served SGGSIE&T Nanded in almost all administrative capacities. This includes the Dean of Academics (March 2022-April 2023), Dean of Finance Quality Assurance and Resource Mobilisation (October 2020-March 2022), Institute NBA Coordinator (October 2020- April 2023), Institute NAAC Coordinator (October 2020- April 2023), Head of the Department of Electronics and Telecommunication Engineering (July 2018- July 2020), Dean of Research and Development (August 2016- July 2018), Coordinator of the Center of Excellence in SIP (September 2013- April 2023), Coordinator of RUSA (September 2017- April 2023), Controller of Examination (June 2008-June 2011), and Hostel Warden (July 1999-July 2001). In every role, Prof Manesh Kokare has demonstrated exceptional leadership skills and dedication, consistently driving the concerned Institutional activities to completion, with a keen eye for detail and a strategic mindset for excellence. He has been instrumental in the preparation and implementation of new policies, starting new programs at SGGSIE&T Nanded, and always ensuring that the curriculum remains up-to-date and relevant to the needs of the industry. He also fetched funding of Rs. 749.20 Lakhs, from different funding agencies, for the institute. To date, he has published more than 125 papers in reputed International conferences and Journals. His research has achieved a citation index of 3539, an h-index: of 25, and an i-10 index of 49. He has delivered more than 400 seminars and expositions in other Engineering institutes all over India, as a resource person, to benefit faculty and students all over the nation. To date, 15 research scholars have completed their Ph.D. under his supervision, and six are currently working towards their Ph.D.`,
        `He is a life member of the System Society of India, the Indian Society for Technical Education (ISTE), The Institution of Electronics and Telecommunication Engineers (IETE) and Member of IEEE, Member of IEEE Signal Processing Society, Member of IEEE Computer Society. Acknowledging Dr. Kokare's research contribution, he has been selected as a reviewer of twenty-five international journals. Dr. Kokare was also Program Chair of the IEEE International Conference on Information Processing (IConSIP- 2016), held at Nanded, Maharashtra, in Oct 2016. In Aug 2004, Dr. Kokare visited Cambridge University U.K. to present his research paper at the IEEE International Conference on Pattern Recognition (ICPR). Also, in June 2006, Dr. Kokare visited the University of Barcelona, Spain, for collaborative research work. In November 2006 and January 2008, he visited theUniversity of California, Santa Barbara, USA. In March 2009, he visited Bangkok to present his research paper at the IEEE International Conference on Digital Image Processing 2009. For his Post Doctoral research work in 2011-12, he visited the University of California Santa Barbara USA, the University of Iowa USA, Stanford University USA, the University of California San Diageo USA, and the University of California Berkley, USA. In 2013, he visited the National University Singapore, NTU Singapore, and UTP Malaysia for research collaboration. His research interests include wavelets, image processing, pattern recognition, Computer Vision, and Content-Based Image Retrieval. `,
      ],
      linkedin: {
        url: "/",
      },
    },
  ],
};

const InfoCard = ({ member, idx }: { member: Member; idx: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isOdd = idx % 2;
  return (
    <div className="flex flex-col gap-10">
      <div
        className={cn(
          "relative flex flex-col gap-4 md:flex-row",
          !isOdd && "md:flex-row-reverse",
        )}
      >
        <div
          className={cn(
            "top-[5rem] flex h-fit flex-1 flex-col items-center md:sticky",
            isOdd ? "md:items-start" : "md:items-end",
          )}
        >
          <div className="relative aspect-square h-[15rem]">
            <Image
              src={member.image.url}
              alt={member.image.alt}
              fill
              className="object-cover object-center"
            />
          </div>
          <h2
            className={cn(
              "flex flex-col items-center gap-2",
              isOdd ? "md:items-start" : "md:items-end",
            )}
          >
            <span className="text-center text-secondary-2">
              {config.list[idx].name}
            </span>{" "}
            <span className="text-primary-2">{config.list[idx].post}</span>
          </h2>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <div
            className={cn(
              "relative flex max-h-[20rem] flex-col gap-4 overflow-hidden transition-all duration-500 ease-in-out",
              isOpen && "max-h-[300rem]",
            )}
          >
            {member.description.map((desc, idx) => (
              <p key={idx}>{desc}</p>
            ))}
            <GradientOverlay
              className={cn(
                "bg-gradient-to-t from-white to-white/0 transition-all duration-500 ease-in-out",
                isOpen && "opacity-0",
              )}
            />
          </div>
          <div
            className={cn(
              "flex items-center justify-between",
              isOdd && "flex-row-reverse",
            )}
          >
            <Link
              href={member.linkedin.url}
              target="_blank"
              className="w-fit rounded-full text-3xl text-secondary-4"
            >
              <IoLogoLinkedin />
            </Link>
            <Button
              onClick={() => setIsOpen(!isOpen)}
              className={cn("w-fit ", isOdd ? "right-0" : "left-0")}
            >
              Read {`${isOpen ? "Less" : "More"}`}
            </Button>
          </div>
        </div>
        {/* separator in secondary color */}
      </div>
      <div className="mx-auto h-px w-[70%] bg-secondary-1" />
    </div>
  );
};
const Info = () => {
  return (
    <section className="wrapper wrapper-pad">
      <div className="flex flex-col gap-10">
        {config.list.map((member, idx) => (
          <InfoCard member={member} key={idx} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default Info;
