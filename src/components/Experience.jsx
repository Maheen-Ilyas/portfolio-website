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
    contentStyle={{ background: "#FEFEFE" }}
    contentArrowStyle={{ borderRight: "7px solid #FEFEFE" }}
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
      <h3 className="text-[#121117] font-semibold text-[20px] font-playfair">
        {experience.title}
      </h3>
      <h4 className="text-[#121117] font-semibold text-[18px] font-playfair">
        {experience.company_name}
      </h4>
      {experience.techStack.map((tech, index) => (
        <span
          key={`experience.point.${index}`}
          className="text-[#12111D] text-[16px] font-playfair italic -tracking-wider"
        >
          {"| " + tech + " |"}
        </span>
      ))}
      <h5 className="text-[#121117] mt-4 font-medium font-poppins text-[12px]">
        {experience.date}
      </h5>
      <ul className="mt-4 list-disc ml-4 space-y-2 mb-4">
        {experience.points.map((point, index) => (
          <li
            key={`experience.point.${index}`}
            className="text-[#14161E] text-[14px] font-poppins pl-1 -tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <div
      className={`${styles.paddingX} bg-[#12171D] max-w-7xl mx-auto relative z-0`}
    >
      {" "}
      <motion.div variants={textVariant}>
        <p
          className={`${styles.sectionSubText} text-white-100 mt-10 pt-6 font-semibold font-poppins`}
        >
          WHAT I HAVE DONE SO FAR
        </p>
        <h2
          className={`${styles.sectionHeadText} text-[#FEFEFE] font-bold font-playfair`}
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
