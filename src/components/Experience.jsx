import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{ background: "#d89098", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #c37c7d" }}
    iconStyle={{
      background: experience.iconBg,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
    icon={
      <div className="flex items-center justify-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[80%] h-[80%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="font-bold text-[20px] font-roboto">{experience.title}</h3>
      <h4 className="font-medium text-gray-100 mb-2 text-[16px] font-playfair">
        {experience.company_name}
      </h4>
      <ul className="mt-4 list-disc ml-4 space-y-2 mb-4">
        {experience.points.map((point, index) => (
          <li
            key={`experience.point.${index}`}
            className="text-white-100 text-[14px]  font-roboto pl-1 -tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
      <h4 className="font-medium font-playfair text-gray-100 text-[16px]">
        {experience.date}
      </h4>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <div
      className={`${styles.paddingX} bg-[#e1abae] max-w-7xl mx-auto relative z-0`}
    >
      {" "}
      <motion.div variants={textVariant}>
        <p
          className={`${styles.sectionSubText} text-white-100 mt-10 pt-6 font-semibold font-roboto`}
        >
          WHAT I HAVE DONE SO FAR
        </p>
        <h2
          className={`${styles.sectionHeadText} text-white font-bold font-playfair`}
        >
          Work Experience.
        </h2>
      </motion.div>
      <div className="mt-10 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
