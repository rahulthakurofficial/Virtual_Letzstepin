import React from "react";
import { motion } from "framer-motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
 import { staggerContainer, textVariant } from "../../utils/motion";
import "./Experience.scss"; 

const experiences = [
  {
    title: "Outreach Manager Intern",
    company_name: "Flurno",
    icon: "starbucks",
    iconBg: "#383E56",
    date: "Jan 2022 - Feb 2022",
    points: [
      "Helped the company in setting up a Discord community of over 1k college students",
      "Managed events and community engagement on Discord.",
      "Invited guest speakers from top tech companies.",
      "Developed targeted marketing assets for Flurno Programs.",
    ],
  },
  {
    title: "Community Head",
    company_name: "StartNow",
    icon: "tesla",
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Oct 2022",
    points: [
      "Founded global community for young entrepreneurs, fostering connections and knowledge-sharing.",
      "Recognized as Top 5 Startup Community on Discord within 6 months.",
      "Organized events, facilitated team connections, explored business opportunities.",
      "Hosted sessions with industry leaders, provided valuable insights to members.",
      "Implemented effective outreach strategies, ensuring vibrant community engagement.",
    ],
  },
  {
    title: "Founder & CEO",
    company_name: "Startic Field",
    icon: "shopify",
    iconBg: "#383E56",
    date: "Jul 2022 - March 2023",
    points: [
      "Created an application suite of gamified task management for startups and LP portfolio startup investment tracking.",
      "Led focussed product development, enhancing user experience and satisfaction.",
      "Directed agile product development, driving rapid innovation in startup building.",
      "Devised strategy to expand market reach by leveraging existing customer base.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "PredCo AI",
    icon: "meta",
    iconBg: "#E6DEDD",
    date: "Apr 2023 - Present",
    points: [
      "Designed the framework of IOT sensor data integration to an end-to-end ML based analytics software.",
      "Created PRD and wireframes for the product, and developed the frontend using ReactJS.",
      "Developed Rest APIs, aligning with frontend flow.",
      "Integrated Elastic Search and Kibana Dashboards via dynamic APIs.",
    ],
  },
];

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="experience-icon">
        <img src={experience.icon} alt={experience.company_name} />
      </div>
    }
  >
    <div>
      <h3 className="experience-title">{experience.title}</h3>
      <p className="experience-company">{experience.company_name}</p>
    </div>
    <ul className="experience-points">
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`}>{point}</li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

const Experience = () => (
  <motion.section
    variants={staggerContainer()}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.25 }}
    className="experience-section"
  >
    <motion.div variants={textVariant()}>
      <p className="experience-subtext">What I have done so far</p>
      <h2 className="experience-headtext">Work Experience.</h2>
    </motion.div>
    <div className="experience-container">
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
  </motion.section>
);

export default Experience;



